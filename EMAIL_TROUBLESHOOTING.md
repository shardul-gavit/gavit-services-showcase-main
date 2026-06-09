# Email Automation Troubleshooting Guide

## Issue: Form data saves to sheet but email is not received

If your contact form is saving data to Google Sheets successfully but you're not receiving emails, follow these steps:

## Step 1: Check Script Permissions

The script needs permission to send emails on your behalf.

1. Go to https://script.google.com/
2. Open your contact form script project
3. Click on the script to run it manually
4. When prompted, click "Review Permissions"
5. Select your Google account
6. Click "Advanced" → "Go to [Project Name] (unsafe)"
7. Click "Allow" to grant email sending permissions

## Step 2: Verify Email Code in Deployed Script

Make sure your deployed script includes the email sending code:

1. Open your script in Google Apps Script editor
2. Check that the `doPost` function includes:
   ```javascript
   MailApp.sendEmail({
     to: RECIPIENT_EMAIL,
     subject: subject,
     body: emailBody
   });
   ```
3. Verify `RECIPIENT_EMAIL` is set to: `gaviteservice26@gmail.com`

## Step 3: Check Execution Logs

Check if there are any errors when the script runs:

1. In Google Apps Script, click "Executions" in the left sidebar
2. Look at recent executions
3. Click on a recent execution to see details
4. Check if there are any error messages related to email sending

## Step 4: Test Email Sending Directly

Create a test function to verify email sending works:

1. In Google Apps Script editor, add this test function:
   ```javascript
   function testEmail() {
     MailApp.sendEmail({
       to: 'gaviteservice26@gmail.com',
       subject: 'Test Email from Script',
       body: 'This is a test email to verify email sending works.'
     });
   }
   ```
2. Save the script
3. Select `testEmail` from the function dropdown
4. Click the Run button (▶)
5. Authorize permissions if prompted
6. Check your email - you should receive the test email

## Step 5: Check Spam/Junk Folder

Sometimes emails from automated scripts go to spam:

1. Check your spam/junk folder for emails from `gaviteservice26@gmail.com`
2. If found, mark them as "Not Spam"
3. Add the sender to your contacts/whitelist

## Step 6: Verify Email Address

Double-check the recipient email address:

1. Make sure `RECIPIENT_EMAIL` in the script is exactly: `gaviteservice26@gmail.com`
2. Verify this email address is correct and accessible
3. Try sending a test email to this address manually to confirm it works

## Step 7: Redeploy the Script

After making any changes, redeploy:

1. Click "Deploy" → "Manage deployments"
2. Click the edit icon (pencil) next to your deployment
3. Click "Deploy" to create a new version
4. Test the form again

## Common Issues

### Issue: "Authorization required"
**Solution**: Run the script manually once to authorize email permissions

### Issue: "Invalid email address"
**Solution**: Verify the email address format is correct

### Issue: "Mail service not available"
**Solution**: Check Google Apps Script status page, or wait and try again

### Issue: Email code is missing from deployed script
**Solution**: Copy the full code from `google-apps-script-contact.js` and redeploy

## Quick Fix: Add Better Error Logging

To see what's happening with email sending, you can temporarily modify the script to log errors:

```javascript
// Send email notification
try {
  const fullName = (data.firstName || '') + ' ' + (data.lastName || '');
  const subject = `New Contact Form Submission - ${data.service || 'General Inquiry'}`;
  
  const emailBody = `...`; // Your email body code
  
  MailApp.sendEmail({
    to: RECIPIENT_EMAIL,
    subject: subject,
    body: emailBody
  });
  
  // Log success
  console.log('Email sent successfully to:', RECIPIENT_EMAIL);
} catch (emailError) {
  // Log detailed error
  console.error('Email sending failed:', emailError);
  console.error('Error details:', JSON.stringify(emailError));
  
  // Still save to sheet even if email fails
}
```

Then check the execution logs to see what error is occurring.


