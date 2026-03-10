# Quick Setup Guide - Forms Data Collection

Your Google Sheet is ready: `1cTORBwThG8d5BObtHdrEC1z-IMVMawPybklYevUTBNk`

## Current Status

✅ **Enrollment Form Script**: Already configured with your spreadsheet ID  
✅ **Contact Form Script**: Now configured with your spreadsheet ID  

## What You Need To Do Next

### Step 1: Set Up Your Google Sheet

In your Google Sheet (https://docs.google.com/spreadsheets/d/1cTORBwThG8d5BObtHdrEC1z-IMVMawPybklYevUTBNk/edit), you need two tabs:

#### Tab 1: `Student_Enrollments` (for E-Learning form)
Create a sheet/tab named exactly: **Student_Enrollments**

Add these headers in Row 1:
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

#### Tab 2: `Contact_Enquiries` (for Contact form)
Create a sheet/tab named exactly: **Contact_Enquiries**

Add these headers in Row 1:
- A1: `Timestamp`
- B1: `First Name`
- C1: `Last Name`
- D1: `Email`
- E1: `Phone`
- F1: `Service Interest`
- G1: `Message`

---

### Step 2: Deploy Enrollment Form Script

1. Go to https://script.google.com/
2. Click **"New Project"**
3. Delete the default code
4. Open the file `google-apps-script.js` from your project folder
5. Copy ALL the code and paste it into the Apps Script editor
6. Click **"Save"** (or press Ctrl+S)
7. Click **"Deploy"** → **"New deployment"**
8. Click the ⚙️ gear icon next to "Select type"
9. Select **"Web app"**
10. Configure:
    - **Description**: "Student Enrollment Form"
    - **Execute as**: "Me"
    - **Who has access**: "Anyone" (important!)
11. Click **"Deploy"**
12. **Authorize** when prompted:
    - Click "Review permissions"
    - Select your Google account
    - Click "Advanced" → "Go to [Project Name] (unsafe)"
    - Click "Allow"
13. **COPY the Web App URL** (looks like: `https://script.google.com/macros/s/AKfycby.../exec`)

---

### Step 3: Deploy Contact Form Script

1. Go to https://script.google.com/
2. Click **"New Project"** (this is a separate project from Step 2)
3. Delete the default code
4. Open the file `google-apps-script-contact.js` from your project folder
5. Copy ALL the code and paste it into the Apps Script editor
6. Click **"Save"** (or press Ctrl+S)
7. Click **"Deploy"** → **"New deployment"**
8. Click the ⚙️ gear icon next to "Select type"
9. Select **"Web app"**
10. Configure:
    - **Description**: "Contact Form"
    - **Execute as**: "Me"
    - **Who has access**: "Anyone" (important!)
11. Click **"Deploy"**
12. **Authorize** when prompted:
    - Click "Review permissions"
    - Select your Google account
    - Click "Advanced" → "Go to [Project Name] (unsafe)"
    - Click "Allow"
13. **COPY the Web App URL** (this will be different from Step 2)

---

### Step 4: Update Your Code

After you have both Web App URLs, update the form components:

#### Update Enrollment Form:
1. Open `src/components/EnrollmentForm.tsx`
2. Find this line (around line 29):
   ```typescript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with the URL from **Step 2**
4. Save the file

#### Update Contact Form:
1. Open `src/components/Contact.tsx`
2. Find this line (around line 10):
   ```typescript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with the URL from **Step 3**
4. Save the file

---

### Step 5: Test

1. Run your development server: `npm run dev`
2. Test the Contact form:
   - Go to the contact section
   - Fill out and submit the form
   - Check your Google Sheet's `Contact_Enquiries` tab - you should see the data
3. Test the Enrollment form:
   - Go to the E-Learning page
   - Click "Enroll Now"
   - Fill out and submit the form
   - Check your Google Sheet's `Student_Enrollments` tab - you should see the data

---

## Troubleshooting

**Error: "Google Apps Script URL not configured"**
- Make sure you copied the full Web App URL
- Check for any extra spaces before/after the URL
- Ensure the URL is in quotes: `"https://script.google.com/..."`

**Data not appearing in Google Sheets**
- Verify the tab names are exactly: `Student_Enrollments` and `Contact_Enquiries` (case-sensitive)
- Check that "Who has access" is set to "Anyone" in the deployment settings
- Check the Google Apps Script execution log: View → Execution log

**Script authorization issues**
- Make sure you authorized the script when prompted
- If authorization fails, try: Deploy → Manage deployments → Edit → Authorize access

---

## Summary

✅ Your spreadsheet is configured  
✅ Scripts are ready to deploy  
⏳ You need to:
   1. Create the two tabs in your Google Sheet
   2. Deploy both Google Apps Scripts (separate projects)
   3. Copy the Web App URLs
   4. Update the URLs in `EnrollmentForm.tsx` and `Contact.tsx`

Once done, both forms will collect data into your Google Sheet! 🎉

