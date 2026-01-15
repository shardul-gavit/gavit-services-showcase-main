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

/******************** CORE ********************/
function handleEnrollment(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid enrollment data received');
  }

  const sheet = getOrCreateSheet();

  const timestamp = new Date();

  // Save to sheet
  sheet.appendRow([
    timestamp,
    data.name || '',
    data.profession || '',
    data.contactNumber || '',
    data.emailId || '',
    data.gender || '',
    data.state || '',
    data.city || '',
    data.qualification || '',
    data.collegeUniversity || '',
    data.courseStream || '',
    data.selectCourse || '',
    data.hearAboutUs || '',
    data.declaration === true || data.declaration === 'true' ? 'Yes' : 'No'
  ]);

  sendAdminEmail(data, timestamp);
  sendStudentEmail(data);
}

/******************** EMAILS ********************/
function sendAdminEmail(data, timestamp) {
  if (!data) return;

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
    (data.declaration === true || data.declaration === 'true' ? 'Yes' : 'No') +
    '\n\n━━━━━━━━━━━━━━━━━━━━━━\n' +
    'Submitted on: ' + timestamp.toLocaleString();

  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: '🎓 New Student Enrollment',
    body: body,
    name: 'Gavit E-Services'
  });
}

function sendStudentEmail(data) {
  if (!data || !data.emailId) return;

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
}

/******************** HTTP ********************/
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('No POST data received');
    }

    const data = JSON.parse(e.postData.contents);
    handleEnrollment(data);

    return jsonResponse({ success: true, message: 'Enrollment saved' });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

function doGet(e) {
  try {
    // Health check
    if (!e || !e.parameter || !e.parameter.submit) {
      return ContentService.createTextOutput(
        'Student Enrollment API is running'
      );
    }

    // Only save when submit=true
    const data = {};
    for (var key in e.parameter) {
      data[key] = e.parameter[key];
    }

    handleEnrollment(data);
    return ContentService.createTextOutput('Enrollment submitted successfully');
  } catch (err) {
    return ContentService.createTextOutput(err.message);
  }
}

/******************** UTIL ********************/
function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      'Timestamp',
      'Name',
      'Profession',
      'Contact Number',
      'Email ID',
      'Gender',
      'State',
      'City',
      'Qualification',
      'College / University',
      'Course Stream',
      'Selected Course',
      'Hear About Us',
      'Declaration'
    ]);
  }
  return sheet;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
