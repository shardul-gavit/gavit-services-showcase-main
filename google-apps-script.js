/**
 * Google Apps Script Web App for Student Enrollment Form
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
 *     GOOGLE_SCRIPT_ENROLLMENT_URL = "YOUR_WEB_APP_URL"
 * 
 * GOOGLE SHEET SETUP:
 * - Create a Google Sheet with the following columns in row 1:
 *   A: Timestamp
 *   B: Name
 *   C: Profession
 *   D: Contact Number
 *   E: Email ID
 *   F: Gender
 *   G: State
 *   H: City
 *   I: Qualification
 *   J: College/University Name
 *   K: Course/Stream
 *   L: Select Course
 *   M: How did you hear about us?
 *   N: Declaration
 * - Copy the Sheet ID from the URL (between /d/ and /edit)
 * - Update SPREADSHEET_ID below
 */

/******************** CONFIG ********************/
const SPREADSHEET_ID = '1C-sKPSFg_HA1rLI-ELYM4gu9i8TRrBxdkyM-uaquEt4';
const SHEET_NAME = 'Student_Enrollments';
const ADMIN_EMAIL = 'gaviteservice26@gmail.com';

// Expected column headers (must match exactly)
const EXPECTED_HEADERS = [
  'Timestamp',
  'Name',
  'Profession',
  'Contact Number',
  'Email ID',
  'Gender',
  'State',
  'City',
  'Qualification',
  'College/University Name',
  'Course/Stream',
  'Select Course',
  'How did you hear about us?',
  'Declaration'
];

/******************** CORE ********************/
function handleEnrollment(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid enrollment data received');
  }

  const sheet = getOrCreateSheet();
  ensureHeaders(sheet);

  const timestamp = new Date();

  // Save to sheet - ensure order matches EXPECTED_HEADERS
  sheet.appendRow([
    timestamp,
    (data.name || '').toString().trim(),
    (data.profession || '').toString().trim(),
    (data.contactNumber || '').toString().trim(),
    (data.emailId || '').toString().trim(),
    (data.gender || '').toString().trim(),
    (data.state || '').toString().trim(),
    (data.city || '').toString().trim(),
    (data.qualification || '').toString().trim(),
    (data.collegeUniversity || '').toString().trim(),
    (data.courseStream || '').toString().trim(),
    (data.selectCourse || '').toString().trim(),
    (data.hearAboutUs || '').toString().trim(),
    data.declaration === true || data.declaration === 'true' || data.declaration === 'Yes' ? 'Yes' : 'No'
  ]);

  sendAdminEmail(data, timestamp);
  sendStudentEmail(data);
}

/******************** EMAILS ********************/
function sendAdminEmail(data, timestamp) {
  if (!data) return;

  try {
    const body =
      'New Student Enrollment Received\n\n' +
      '━━━━━━━━━━━━━━━━━━━━━━\n\n' +
      'Name: ' + (data.name || 'N/A') + '\n' +
      'Email: ' + (data.emailId || 'N/A') + '\n' +
      'Contact: ' + (data.contactNumber || 'N/A') + '\n' +
      'Profession: ' + (data.profession || 'N/A') + '\n\n' +
      'Course Details:\n' +
      'Selected Course: ' + (data.selectCourse || 'N/A') + '\n' +
      'Qualification: ' + (data.qualification || 'N/A') + '\n' +
      'College: ' + (data.collegeUniversity || 'N/A') + '\n\n' +
      'Location:\n' +
      (data.city || '') + ', ' + (data.state || '') + '\n\n' +
      'Declaration: ' +
      (data.declaration === true || data.declaration === 'true' || data.declaration === 'Yes' ? 'Yes' : 'No') +
      '\n\n━━━━━━━━━━━━━━━━━━━━━━\n' +
      'Submitted on: ' + timestamp.toLocaleString();

    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      subject: '🎓 New Student Enrollment',
      body: body,
      name: 'Gavit E-Services'
    });
  } catch (emailError) {
    // Log email error but don't fail the submission
    console.error('Failed to send admin email:', emailError);
  }
}

function sendStudentEmail(data) {
  if (!data || !data.emailId) return;

  try {
    const email = data.emailId.toString().trim();
    if (!email || email.indexOf('@') === -1) return;

    const body =
      'Dear ' + (data.name || 'Student') + ',\n\n' +
      'Thank you for enrolling with Gavit E-Services!\n\n' +
      'We have successfully received your enrollment for:\n' +
      '"' + (data.selectCourse || 'your selected course') + '"\n\n' +
      'Our team will contact you shortly with further details.\n\n' +
      'Regards,\n' +
      'Gavit E-Services Team\n\n' +
      '---\nThis is an automated email. Please do not reply.';

    MailApp.sendEmail({
      to: email,
      subject: 'Enrollment Confirmation – Gavit E-Services',
      body: body,
      name: 'Gavit E-Services'
    });
  } catch (emailError) {
    // Log email error but don't fail the submission
    console.error('Failed to send student email:', emailError);
  }
}

/******************** HTTP ********************/
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('No POST data received');
    }

    const data = JSON.parse(e.postData.contents);
    handleEnrollment(data);

    return jsonResponse({ success: true, message: 'Enrollment saved successfully' });
  } catch (err) {
    console.error('Error in doPost:', err);
    return jsonResponse({ 
      success: false, 
      error: err.message || 'Failed to process enrollment'
    });
  }
}

function doGet(e) {
  try {
    // Health check
    if (!e || !e.parameter || !e.parameter.submit) {
      return ContentService.createTextOutput(
        JSON.stringify({
          status: 'OK',
          message: 'Student Enrollment API is running',
          timestamp: new Date().toISOString()
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Only save when submit=true
    const data = {};
    for (var key in e.parameter) {
      if (key !== 'submit') {
        data[key] = e.parameter[key];
      }
    }

    handleEnrollment(data);
    return ContentService.createTextOutput('Enrollment submitted successfully');
  } catch (err) {
    console.error('Error in doGet:', err);
    return ContentService.createTextOutput(err.message);
  }
}

/******************** UTIL ********************/
function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  
  return sheet;
}

function ensureHeaders(sheet) {
  const lastRow = sheet.getLastRow();
  
  // If sheet is empty or has no headers, create them
  if (lastRow === 0) {
    sheet.appendRow(EXPECTED_HEADERS);
    formatHeaders(sheet);
    return;
  }
  
  // Check if headers match
  const existingHeaders = sheet.getRange(1, 1, 1, EXPECTED_HEADERS.length).getValues()[0];
  let headersMatch = true;
  
  for (let i = 0; i < EXPECTED_HEADERS.length; i++) {
    if (existingHeaders[i] !== EXPECTED_HEADERS[i]) {
      headersMatch = false;
      break;
    }
  }
  
  // If headers don't match, update them
  if (!headersMatch) {
    sheet.getRange(1, 1, 1, EXPECTED_HEADERS.length).setValues([EXPECTED_HEADERS]);
    formatHeaders(sheet);
  }
}

function formatHeaders(sheet) {
  const headerRange = sheet.getRange(1, 1, 1, EXPECTED_HEADERS.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('#ffffff');
  headerRange.setHorizontalAlignment('center');
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
