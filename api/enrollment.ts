/**
 * Vercel Serverless Function - Enrollment Form Proxy
 * 
 * This function acts as a proxy between the frontend and Google Apps Script
 * to handle CORS issues and provide better error handling.
 * 
 * Environment Variables Required:
 * - GOOGLE_SCRIPT_ENROLLMENT_URL: The Google Apps Script Web App URL for enrollment
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return response.status(200).end();
  }

  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ 
      success: false, 
      error: 'Method not allowed. Use POST.' 
    });
  }

  // Get Google Apps Script URL from environment variable
  const googleScriptUrl = process.env.GOOGLE_SCRIPT_ENROLLMENT_URL;

  if (!googleScriptUrl) {
    console.error('GOOGLE_SCRIPT_ENROLLMENT_URL environment variable is not set');
    return response.status(500).json({ 
      success: false, 
      error: 'Server configuration error. Please contact the administrator.' 
    });
  }

  // Validate request body
  if (!request.body) {
    return response.status(400).json({ 
      success: false, 
      error: 'Request body is required' 
    });
  }

  try {
    // Forward the request to Google Apps Script
    const googleResponse = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request.body),
    });

    // Get the response data
    const responseData = await googleResponse.text();
    
    // Try to parse as JSON, fallback to text if it fails
    let parsedData;
    try {
      parsedData = JSON.parse(responseData);
    } catch {
      parsedData = { success: googleResponse.ok, message: responseData };
    }

    // Set CORS headers
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Return the response with appropriate status code
    if (googleResponse.ok) {
      return response.status(200).json(parsedData);
    } else {
      return response.status(googleResponse.status).json({
        success: false,
        error: parsedData.error || 'Failed to submit enrollment',
        details: parsedData
      });
    }
  } catch (error) {
    console.error('Error forwarding request to Google Apps Script:', error);
    return response.status(500).json({ 
      success: false, 
      error: 'Failed to submit enrollment. Please try again later.' 
    });
  }
}
