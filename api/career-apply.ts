/**
 * Vercel Serverless Function - Career / Internship Application Proxy
 *
 * Forwards application form submissions to Google Apps Script (or another backend).
 *
 * Environment Variables:
 * - GOOGLE_SCRIPT_CAREER_APPLY_URL: Google Apps Script Web App URL for career/internship applications
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method === "OPTIONS") {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return response.status(200).end();
  }

  if (request.method !== "POST") {
    return response.status(405).json({
      success: false,
      error: "Method not allowed. Use POST.",
    });
  }

  const googleScriptUrl = process.env.GOOGLE_SCRIPT_CAREER_APPLY_URL;

  if (!googleScriptUrl) {
    console.error("GOOGLE_SCRIPT_CAREER_APPLY_URL environment variable is not set");
    return response.status(500).json({
      success: false,
      error:
        "Server configuration error. Please contact the administrator.",
    });
  }

  if (!request.body) {
    return response.status(400).json({
      success: false,
      error: "Request body is required",
    });
  }

  try {
    const googleResponse = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request.body),
    });

    const responseData = await googleResponse.text();

    let parsedData: { success?: boolean; message?: string; error?: string };
    try {
      parsedData = JSON.parse(responseData);
    } catch {
      parsedData = { success: googleResponse.ok, message: responseData };
    }

    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (googleResponse.ok) {
      return response.status(200).json(parsedData);
    }
    return response.status(googleResponse.status).json({
      success: false,
      error: parsedData.error || "Failed to submit application",
      details: parsedData,
    });
  } catch (error) {
    console.error("Error forwarding career application:", error);

    let errorMessage = "Failed to submit application. Please try again later.";
    let statusCode = 500;

    if (error instanceof TypeError && (error as Error).message?.includes("fetch")) {
      errorMessage = "Network error. Please check your internet connection and try again.";
      statusCode = 503;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return response.status(statusCode).json({
      success: false,
      error: errorMessage,
      details:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? error.message
          : undefined,
    });
  }
}
