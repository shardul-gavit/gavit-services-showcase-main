# Vercel Deployment Guide - Form Submission Fix

## Problem Solved

This guide addresses form submission issues in production on Vercel where forms work on localhost but fail in production due to:
- CORS issues with Google Apps Script
- `no-cors` mode preventing response reading
- Direct client-side calls to Google Apps Script

## Solution Architecture

The solution uses **Vercel serverless functions as proxies** between the frontend and Google Apps Script:

```
Frontend Form → Vercel API Route (/api/enrollment or /api/contact) → Google Apps Script
```

This architecture:
- ✅ Eliminates CORS issues
- ✅ Allows proper error handling
- ✅ Keeps Google Apps Script URLs secure (environment variables)
- ✅ Works in both development and production

## Setup Instructions

### Step 1: Deploy Google Apps Scripts

1. **Enrollment Form Script:**
   - Go to https://script.google.com/
   - Create a new project
   - Copy the code from `google-apps-script.js`
   - Deploy as Web App with "Anyone" access
   - Copy the Web App URL

2. **Contact Form Script:**
   - Create another new project
   - Copy the code from `google-apps-script-contact.js`
   - Deploy as Web App with "Anyone" access
   - Copy the Web App URL

### Step 2: Configure Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

   ```
   GOOGLE_SCRIPT_ENROLLMENT_URL = https://script.google.com/macros/s/YOUR_ENROLLMENT_SCRIPT_ID/exec
   GOOGLE_SCRIPT_CONTACT_URL = https://script.google.com/macros/s/YOUR_CONTACT_SCRIPT_ID/exec
   ```

4. Make sure to add these for **Production**, **Preview**, and **Development** environments
5. Redeploy your application after adding the variables

### Step 3: Verify Deployment

1. The API routes are automatically deployed at:
   - `/api/enrollment` - for enrollment form submissions
   - `/api/contact` - for contact form submissions

2. Test the forms in production to ensure they work correctly

## Local Development

For local development, you can:

1. Create a `.env.local` file in the root directory:
   ```env
   GOOGLE_SCRIPT_ENROLLMENT_URL=https://script.google.com/macros/s/YOUR_ENROLLMENT_SCRIPT_ID/exec
   GOOGLE_SCRIPT_CONTACT_URL=https://script.google.com/macros/s/YOUR_CONTACT_SCRIPT_ID/exec
   ```

2. Use Vercel CLI to run locally:
   ```bash
   npm install -g vercel
   vercel dev
   ```

   This will start a local server that mimics Vercel's environment.

## Troubleshooting

### Forms still not working in production

1. **Check environment variables:**
   - Verify they're set in Vercel dashboard
   - Ensure they're added for the correct environment (Production/Preview)
   - Redeploy after adding variables

2. **Check API routes:**
   - Visit `/api/enrollment` or `/api/contact` directly
   - Should return a 405 error (Method not allowed) for GET requests
   - This confirms the routes are deployed

3. **Check browser console:**
   - Look for CORS errors (should be none now)
   - Check network tab for API call status
   - Verify responses are JSON

4. **Check Vercel function logs:**
   - Go to Vercel dashboard → Functions tab
   - Check logs for errors
   - Look for environment variable issues

### Google Apps Script errors

1. **Verify deployment settings:**
   - Execute as: "Me"
   - Who has access: "Anyone" (or "Anyone with Google account")
   - Make sure it's deployed as a Web App

2. **Test Google Apps Script directly:**
   - Use a tool like Postman or curl to test the Google Apps Script URL
   - Should return JSON response

## Architecture Benefits

1. **Security:** Google Apps Script URLs are not exposed in client-side code
2. **Reliability:** Proper error handling and response parsing
3. **CORS:** No CORS issues since requests go through same-origin API routes
4. **Debugging:** Better error messages and logging
5. **Maintainability:** Centralized configuration via environment variables

## Files Changed

- `api/enrollment.ts` - New serverless function for enrollment form
- `api/contact.ts` - New serverless function for contact form
- `src/components/EnrollmentForm.tsx` - Updated to use API route
- `src/components/Contact.tsx` - Updated to use API route
- `vercel.json` - Updated to include API routes configuration
- `.env.example` - Added for environment variable documentation
