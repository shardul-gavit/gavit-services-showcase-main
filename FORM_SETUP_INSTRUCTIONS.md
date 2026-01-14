# Form Setup Instructions

This document provides instructions for setting up both the Contact/Enquiry form and the E-Learning Enrollment form to collect data using Google Apps Script and Google Sheets.

## Prerequisites

1. A Google account (free)
2. Access to Google Sheets
3. Access to Google Apps Script

## Setup Overview

Both forms use the same setup process:
1. Create a Google Sheet to store the data
2. Deploy a Google Apps Script as a Web App
3. Update the form component with the Web App URL

---

## Contact/Enquiry Form Setup

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Contact Enquiries" or similar
4. Name the first sheet as `Contact_Enquiries`
5. Add the following headers in row 1 (columns A-G):
   - A1: `Timestamp`
   - B1: `First Name`
   - C1: `Last Name`
   - D1: `Email`
   - E1: `Phone`
   - F1: `Service Interest`
   - G1: `Message`
6. Format the header row (make it bold, colored, etc.)
7. Copy the Sheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Copy the part between `/d/` and `/edit`

### Step 2: Deploy Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click **"New Project"**
3. Delete the default `myFunction` code
4. Open the file `google-apps-script-contact.js` from this project
5. Copy the entire content and paste it into the Apps Script editor
6. Update the `SPREADSHEET_ID` constant with your Sheet ID:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_SHEET_ID_HERE';
   ```
7. Click **"Save"** (Ctrl+S or Cmd+S)
8. Click **"Deploy"** > **"New deployment"**
9. Click the gear icon ⚙️ next to "Select type"
10. Select **"Web app"**
11. Configure:
    - **Description**: "Contact Form Handler"
    - **Execute as**: "Me"
    - **Who has access**: "Anyone" (or "Anyone with Google account" for restricted access)
12. Click **"Deploy"**
13. **IMPORTANT**: Authorize the script when prompted:
    - Click "Review permissions"
    - Select your Google account
    - Click "Advanced" > "Go to [Project Name] (unsafe)"
    - Click "Allow"
14. Copy the Web App URL (looks like: `https://script.google.com/macros/s/AKfycby.../exec`)

### Step 3: Update Contact Form Component

1. Open `src/components/Contact.tsx`
2. Find the line:
   ```typescript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with the Web App URL you copied in Step 2
4. Save the file

---

## E-Learning Enrollment Form Setup

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Student Enrollments" or similar
4. Name the first sheet as `Student_Enrollments`
5. Add the following headers in row 1 (columns A-N):
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Profession`
   - D1: `Contact Number`
   - E1: `Email ID`
   - F1: `Gender`
   - G1: `State`
   - H1: `City`
   - I1: `Qualification`
   - J1: `College/University Name`
   - K1: `Course/Stream`
   - L1: `Select Course`
   - M1: `How did you hear about us?`
   - N1: `Declaration`
6. Format the header row (make it bold, colored, etc.)
7. Copy the Sheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Copy the part between `/d/` and `/edit`

### Step 2: Deploy Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click **"New Project"**
3. Delete the default `myFunction` code
4. Open the file `google-apps-script.js` from this project
5. Copy the entire content and paste it into the Apps Script editor
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
    - Click "Review permissions"
    - Select your Google account
    - Click "Advanced" > "Go to [Project Name] (unsafe)"
    - Click "Allow"
14. Copy the Web App URL (looks like: `https://script.google.com/macros/s/AKfycby.../exec`)

### Step 3: Update Enrollment Form Component

1. Open `src/components/EnrollmentForm.tsx`
2. Find the line:
   ```typescript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with the Web App URL you copied in Step 2
4. Save the file

---

## Testing

After setup:

1. **Test Contact Form:**
   - Navigate to the contact section on your website
   - Fill out the form and submit
   - Check your Google Sheet to verify the data was saved

2. **Test Enrollment Form:**
   - Navigate to the E-Learning page
   - Click "Enroll Now" or similar button
   - Fill out the enrollment form and submit
   - Check your Google Sheet to verify the data was saved

## Troubleshooting

### Forms show error messages
- Verify that the Web App URL is correctly copied (no extra spaces)
- Check that the Google Apps Script is deployed as a Web App (not just saved)
- Verify that "Who has access" is set to "Anyone" (or "Anyone with Google account")

### Data not appearing in Google Sheets
- Check the Sheet ID in the Google Apps Script matches your sheet
- Verify the sheet name matches (case-sensitive): `Contact_Enquiries` or `Student_Enrollments`
- Check Google Apps Script execution log for errors (View > Execution log)
- Verify the script has permission to access the spreadsheet

### "Script not authorized" errors
- Re-authorize the script: Deploy > Manage deployments > Edit > Authorize access
- Make sure you're using the same Google account for both the script and the sheet

## Security Notes

- The Web App URLs are public, but only the script can write to your sheets
- Consider restricting access to "Anyone with Google account" for additional security
- Regularly review the data in your Google Sheets
- Use separate sheets for contact and enrollment data for better organization

## Support

If you encounter issues:
1. Check the browser console for errors (F12 > Console)
2. Check Google Apps Script execution logs (View > Execution log)
3. Verify all URLs and IDs are correctly copied
4. Ensure you're using the latest version of the scripts from this repository

