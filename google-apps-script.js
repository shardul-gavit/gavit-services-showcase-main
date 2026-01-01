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
 * 10. Copy the Web App URL and paste it in src/components/EnrollmentForm.tsx
 *     Replace: const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
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

// Replace with your Google Sheet ID
// Get it from the URL: https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
const SPREADSHEET_ID = '1cTORBwThG8d5BObtHdrEC1z-IMVMawPybklYevUTBNk';
const SHEET_NAME = 'Student_Enrollments';

/**
 * Handle POST request from enrollment form
 */
function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      const newSheet = SpreadsheetApp.openById(SPREADSHEET_ID).insertSheet(SHEET_NAME);
      newSheet.appendRow([
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
      ]);
      // Format header row
      const headerRange = newSheet.getRange(1, 1, 1, 14);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }
    
    // Get the sheet (either existing or newly created)
    const targetSheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    
    // Prepare row data
    const timestamp = new Date();
    const rowData = [
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
      data.declaration ? 'Yes' : 'No'
    ];
    
    // Append the data to the sheet
    targetSheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Enrollment submitted successfully'
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
      message: 'Enrollment form endpoint is active'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

