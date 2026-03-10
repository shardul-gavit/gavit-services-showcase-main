/**
 * Google Apps Script - Career / Internship Form → Google Sheet
 *
 * 1. Open your spreadsheet: https://docs.google.com/spreadsheets/d/1k3u6qZZkaZxgAZZ8O8FfFG70p_gQ4_ZqXG7tgQjziRY/edit
 * 2. Extensions → Apps Script
 * 3. Replace any code in Code.gs with this file's content
 * 4. Save, then Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL and set it as GOOGLE_SCRIPT_CAREER_APPLY_URL in Vercel (or .env)
 */

const SHEET_NAME = 'Sheet1'; // change if you use a different sheet name

/**
 * GET is called when the Web app URL is opened in a browser.
 * Form submissions use POST (doPost), so this just returns a short message.
 */
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      success: true,
      message: 'Career form endpoint. Use POST to submit application data.',
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    // When run from the editor, e is undefined. Only real POST requests from the web app have e.
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: 'No data received. Use the deployed Web app URL with a POST request.' }, 400);
    }
    const body = JSON.parse(e.postData.contents);
    if (!body) {
      return jsonResponse({ success: false, error: 'No data received' }, 400);
    }

    const sheet = getSheet();
    if (!sheet) {
      return jsonResponse({ success: false, error: 'Spreadsheet not found' }, 500);
    }

    const headers = [
      'Timestamp',
      'Position Type',
      'Preferred Departments',
      'Department Other',
      'Full Name',
      'Email',
      'Mobile',
      'Current City',
      'LinkedIn',
      'Portfolio',
      'Highest Qualification',
      'Degree/Course',
      'College/University',
      'Year Passing',
      'Key Skills',
      'Technical Skills',
      'Has Experience',
      'Experience Details',
      'Has Sales Experience',
      'Why Join BDA',
      'Career Goals',
      'Available Start Date',
      'Preferred Duration',
      'Work Preference',
      'Resume File Name',
      'Declaration',
      'Applicant Name',
      'Declaration Date'
    ];

    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    }

    const departments = Array.isArray(body.preferredDepartments)
      ? body.preferredDepartments.join(', ')
      : (body.preferredDepartments || '');
    const departmentOther = body.departmentOther || '';

    const row = [
      body.timestamp || new Date().toISOString(),
      body.positionType || '',
      departments,
      departmentOther,
      body.fullName || '',
      body.email || '',
      body.mobile || '',
      body.currentCity || '',
      body.linkedIn || '',
      body.portfolio || '',
      body.highestQualification || '',
      body.degreeCourse || '',
      body.collegeUniversity || '',
      body.yearPassing || '',
      body.keySkills || '',
      body.technicalSkills || '',
      body.hasExperience || '',
      body.experienceDetails || '',
      body.hasSalesExperience || '',
      body.whyJoinBDA || '',
      body.careerGoals || '',
      body.availableStartDate || '',
      body.preferredDuration || '',
      body.workPreference || '',
      body.resumeFileName || '',
      body.declaration ? 'Yes' : 'No',
      body.applicantName || '',
      body.declarationDate || ''
    ];

    sheet.appendRow(row);
    return jsonResponse({ success: true, message: 'Application submitted successfully' }, 200);
  } catch (err) {
    console.error(err);
    return jsonResponse(
      { success: false, error: err.message || 'Server error' },
      500
    );
  }
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) return null;
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
  return sheet;
}

function jsonResponse(obj, statusCode) {
  const code = statusCode || 200;
  const output = ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}
