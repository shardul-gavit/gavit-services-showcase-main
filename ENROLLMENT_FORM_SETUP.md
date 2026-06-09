# Student Enrollment Form Setup Guide

This guide will help you set up the Student Enrollment Form with Google Sheets integration.

## Prerequisites

1. A Google account
2. Access to Google Sheets
3. Access to Google Apps Script

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name the first sheet as `Student_Enrollments`
4. Add the following headers in row 1 (columns A-H):
   - A1: `Timestamp`
   - B1: `Full Name`
   - C1: `Email Address`
   - D1: `Mobile Number`
   - E1: `Qualification`
   - F1: `Course Selection`
   - G1: `Training Mode`
   - H1: `Batch Preference`
5. Format the header row (make it bold, colored, etc.)
6. Copy the Sheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Copy the part between `/d/` and `/edit`
   - Example: If URL is `https://docs.google.com/spreadsheets/d/1cTORBwThG8d5BObtHdrEC1z-IMVMawPybklYevUTBNk/edit`
   - Sheet ID is: `1cTORBwThG8d5BObtHdrEC1z-IMVMawPybklYevUTBNk`

## Step 2: Deploy Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click **"New Project"**
3. Delete the default `myFunction` code
4. Copy the entire content from `google-apps-script.js` file
5. Paste it into the Apps Script editor
6. Update the `SPREADSHEET_ID` constant with your Sheet ID:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_SHEET_ID_HERE';
   ```
7. Click **"Save"** (Ctrl+S or Cmd+S)
8. Click **"Deploy"** > **"New deployment"**
9. Click the gear icon ⚙️ next to "Select type"
10. Select **"Web app"**
11. Configure:
    - **Description**: "Student Enrollment Form Handler"
    - **Execute as**: "Me"
    - **Who has access**: "Anyone" (or "Anyone with Google account" for restricted access)
12. Click **"Deploy"**
13. **IMPORTANT**: Authorize the script when prompted:
    - Click "Authorize access"
    - Select your Google account
    - Click "Advanced" > "Go to [Project Name] (unsafe)"
    - Click "Allow"
14. Copy the **Web App URL** (it will look like: `https://script.google.com/macros/s/AKfycby.../exec`)

## Step 3: Configure the Form Component

1. Open `src/components/EnrollmentForm.tsx`
2. Find this line:
   ```typescript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with your actual Web App URL from Step 2
4. Save the file

## Step 4: Test the Form

1. Start your development server
2. Navigate to the Technical Certification page
3. Click the **"Enroll Now"** button
4. Fill out the form with test data
5. Submit the form
6. Check your Google Sheet - you should see a new row with the submitted data

## Troubleshooting

### Form not submitting
- Check browser console for errors
- Verify the Google Apps Script URL is correct
- Ensure the Web App is deployed and accessible

### Data not appearing in Google Sheet
- Check that the Sheet ID is correct in the Apps Script
- Verify the sheet name matches exactly: `Student_Enrollments`
- Check Apps Script execution logs: View > Executions

### CORS errors
- Google Apps Script Web Apps should work with `no-cors` mode
- If issues persist, check the deployment settings

### Authorization errors
- Make sure you authorized the script in Step 2
- Re-deploy if authorization was skipped

## Form Fields

The form collects:
- **Full Name** (required)
- **Email Address** (required, validated)
- **Mobile Number** (required, 10 digits)
- **Qualification** (MBA, BBA, B.Com, Engineering, Other)
- **Course Selection** (HR, Payroll, Compliance, Tally, Excel, Full Stack, Digital Marketing)
- **Training Mode** (Online, Offline, Hybrid)
- **Batch Preference** (Morning, Evening, Weekend)

## Color Theme

The form uses a light blue & peach gradient theme:
- Primary: Blue (#3B82F6 / blue-600)
- Secondary: Orange/Peach (#F97316 / orange-500)
- Background: Gradient from blue-50 to orange-50

## Security Notes

- The form uses `no-cors` mode which means we can't verify the response
- Google Apps Script handles server-side validation
- Consider adding rate limiting in Google Apps Script for production
- For sensitive data, restrict Web App access to "Anyone with Google account"

