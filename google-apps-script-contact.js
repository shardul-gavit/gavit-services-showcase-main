/**
 * Google Apps Script Web App for Contact/Enquiry Form
 * 
 * INSTRUCTIONS TO DEPLOY:
 * 1. Go to https://script.google.com/
 * 2. Click "New Project"
 * 3. Replace the default code with this entire file
 * 4. Update the SPREADSHEET_ID constant with your Google Sheet ID
 * 5. Click "Deploy" > "New deployment"
 * 6. Select type: "Web app"
 * 7. Execute as: "Me"
 * 8. Who has access: "Anyone" (or "Anyone with Google account" if you want to restrict)
 * 9. Click "Deploy"
 * 10. Copy the Web App URL and add it as an environment variable in Vercel:
 *     GOOGLE_SCRIPT_CONTACT_URL = "YOUR_WEB_APP_URL"
 * 
 * GOOGLE SHEET SETUP:
 * - Create a Google Sheet with the following columns in row 1:
 *   A: Timestamp
 *   B: First Name
 *   C: Last Name
 *   D: Email
 *   E: Phone
 *   F: Service Interest
 *   G: Message
 * - Copy the Sheet ID from the URL (between /d/ and /edit)
 * - Update SPREADSHEET_ID below
 */

// Replace with your Google Sheet ID
// Get it from the URL: https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
const SPREADSHEET_ID = '1jSdMTR0zBnEHHRccryZc15CmL55F5r7b5J1P2cr7Ggg';
const SHEET_NAME = 'Contact_Enquiries';

// Email configuration - Change this to your email address
const RECIPIENT_EMAIL = 'gaviteservice26@gmail.com';

/**
 * Handle POST request from contact form
 * This is called by the Vercel serverless function proxy
 */
function doPost(e) {
  try {
    // Validate that we have post data
    if (!e.postData || !e.postData.contents) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'No data received'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'Service Interest',
        'Message'
      ]);
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }
    
    // Prepare row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.service || '',
      data.message || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Send email notification
    try {
      const fullName = (data.firstName || '') + ' ' + (data.lastName || '');
      const subject = `New Contact Form Submission - ${data.service || 'General Inquiry'}`;
      
      const emailBody = `
New contact form submission received:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${fullName.trim()}
Email: ${data.email || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
Service Interest: ${data.service || 'Not specified'}

Message:
${data.message || 'No message provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted on: ${timestamp.toLocaleString()}

This is an automated notification from your website contact form.
      `.trim();
      
      MailApp.sendEmail({
        to: RECIPIENT_EMAIL,
        subject: subject,
        body: emailBody
      });
    } catch (emailError) {
      // Log email error but don't fail the submission
      console.error('Email sending failed:', emailError);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Contact form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET request (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'OK',
      message: 'Contact form endpoint is active'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

