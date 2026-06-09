# Connect Internship Form to Google Spreadsheet

Your form submits to the sheet:  
**https://docs.google.com/spreadsheets/d/1k3u6qZZkaZxgAZZ8O8FfFG70p_gQ4_ZqXG7tgQjziRY/edit**

## Step 1: Add the script to your spreadsheet

1. Open the spreadsheet (link above).
2. Go to **Extensions → Apps Script**.
3. Delete any existing code in `Code.gs`.
4. Open the file **`scripts/career-apply-google-apps-script.gs`** in this project, copy all its content, and paste it into the Apps Script editor.
5. Click **Save** (disk icon or Ctrl+S).

## Step 2: Deploy as a web app

1. In the Apps Script editor, click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Description:** e.g. "Career form handler"
   - **Execute as:** **Me** (your Google account)
   - **Who has access:** **Anyone**
4. Click **Deploy**.
5. The first time, Google will ask you to **Authorize access** – sign in and allow the script to access your spreadsheet.
6. After deployment, copy the **Web app URL** (looks like  
   `https://script.google.com/macros/s/AKfycbz.../exec`).

## Step 3: Set the URL in your app

Your site uses this URL via the **Vercel** serverless API (no CORS issues).

**Web app URL (set this as `GOOGLE_SCRIPT_CAREER_APPLY_URL`):**
```
https://script.google.com/macros/s/AKfycbwoCcMwTgBimW-nH7FTY1SjH8PwtKAKIk7rKXfpoqi7N7v6bi_1lCmm7ek4-nmJSpBoEQ/exec
```

- If you use **Vercel**:  
  - Project → **Settings → Environment Variables**  
  - Add: **`GOOGLE_SCRIPT_CAREER_APPLY_URL`** = the Web app URL above.  
  - Redeploy the project so the new variable is applied.

- If you run **locally**:  
  - Create or edit **`.env.local`** in the project root.  
  - Add:  
    `GOOGLE_SCRIPT_CAREER_APPLY_URL=https://script.google.com/macros/s/AKfycbwoCcMwTgBimW-nH7FTY1SjH8PwtKAKIk7rKXfpoqi7N7v6bi_1lCmm7ek4-nmJSpBoEQ/exec`  
  - Restart the dev server.

## Step 4: Confirm the sheet layout

The script writes to the **first sheet** in your spreadsheet (or the sheet named **Sheet1**). The first row will be used as headers:

| Timestamp | Position Type | Preferred Departments | Department Other | Full Name | Email | Mobile | ... |
|-----------|---------------|------------------------|------------------|-----------|-------|--------|-----|

Each form submission is appended as a new row. You can rename the sheet or change `SHEET_NAME` in the script if you use a different sheet name.

## Troubleshooting

- **"Server configuration error"** after submit  
  - `GOOGLE_SCRIPT_CAREER_APPLY_URL` is missing or wrong. Check the env variable and that the Web app URL ends with `/exec`.

- **Script error / no new rows**  
  - In Apps Script: **Executions** (clock icon). Check the latest run for errors.  
  - Ensure "Who has access" is **Anyone** so your server can call the Web app.

- **Resume file**  
  - Only the **resume file name** is stored in the sheet (base64 is not written to the sheet). To store files, you’d need extra logic (e.g. save to Drive and put the link in the sheet).
