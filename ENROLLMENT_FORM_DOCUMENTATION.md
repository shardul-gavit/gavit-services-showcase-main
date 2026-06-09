# Enrollment Form Documentation

## Overview
The Student Enrollment Form is a modal-based form that opens when users click the "Enroll Now" button on the Technical Certification Programs page. It collects student information and submits it to a Google Sheet via Google Apps Script.

## Location
- **Component**: `src/components/EnrollmentForm.tsx`
- **Integration**: `src/pages/TechnicalCertification.tsx`
- **Google Apps Script**: `google-apps-script.js`
- **Setup Guide**: `ENROLLMENT_FORM_SETUP.md`

## Features

### Form Fields
1. **Full Name** (required, text input)
2. **Email Address** (required, email validation)
3. **Mobile Number** (required, 10-digit validation)
4. **Qualification** (required, dropdown):
   - MBA
   - BBA
   - B.Com
   - Engineering
   - Other
5. **Course Selection** (required, dropdown):
   - HR
   - Payroll
   - Compliance
   - Tally
   - Excel
   - Full Stack
   - Digital Marketing
6. **Training Mode** (required, dropdown):
   - Online
   - Offline
   - Hybrid
7. **Batch Preference** (required, dropdown):
   - Morning
   - Evening
   - Weekend

### Design
- **Color Theme**: Light blue (#3B82F6) to peach/orange (#F97316) gradient
- **Background**: Gradient from blue-50 to orange-50
- **Modal**: Uses Radix UI Dialog component
- **Responsive**: Mobile-friendly design
- **Animations**: Smooth transitions and hover effects

### Functionality
- ✅ Client-side validation (email format, mobile number length)
- ✅ Form submission via fetch API
- ✅ Google Apps Script integration
- ✅ Success message display
- ✅ Auto-reset form after successful submission
- ✅ Auto-close modal after 3 seconds
- ✅ Error handling and display
- ✅ Loading state during submission

## How It Works

### User Flow
1. User clicks "Enroll Now" button on Technical Certification page
2. Modal opens with enrollment form
3. User fills in all required fields
4. User clicks "Submit Enrollment"
5. Form validates input
6. Data is sent to Google Apps Script Web App
7. Google Apps Script saves data to Google Sheet
8. Success message is displayed
9. Form resets and modal closes after 3 seconds

### Technical Flow
```
User Input → Validation → Fetch POST Request → Google Apps Script → Google Sheet
```

## Configuration

### Step 1: Google Sheet Setup
- Create Google Sheet with columns:
  - Timestamp
  - Full Name
  - Email Address
  - Mobile Number
  - Qualification
  - Course Selection
  - Training Mode
  - Batch Preference
- Sheet ID: `1cTORBwThG8d5BObtHdrEC1z-IMVMawPybklYevUTBNk`
- Sheet Name: `Student_Enrollments`

### Step 2: Google Apps Script
- Deploy `google-apps-script.js` as Web App
- Set execution as "Me"
- Set access to "Anyone" (or "Anyone with Google account")
- Copy the Web App URL

### Step 3: Update Component
In `src/components/EnrollmentForm.tsx`, update:
```typescript
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
```
Replace with your actual Web App URL from Step 2.

## Integration Points

### Technical Certification Page
The form is integrated in `src/pages/TechnicalCertification.tsx`:
```typescript
const [enrollmentOpen, setEnrollmentOpen] = useState(false);

// Button click handler
<Button onClick={() => setEnrollmentOpen(true)}>
  Enroll Now
</Button>

// Form component
<EnrollmentForm open={enrollmentOpen} onOpenChange={setEnrollmentOpen} />
```

## Data Structure

### Form Data Object
```typescript
{
  fullName: string;
  email: string;
  mobile: string;
  qualification: string;
  course: string;
  trainingMode: string;
  batchPreference: string;
  timestamp: string; // Added automatically
}
```

### Google Sheet Row Format
Each submission creates a new row:
```
[Timestamp, Full Name, Email, Mobile, Qualification, Course, Training Mode, Batch Preference]
```

## Error Handling

### Client-Side Validation
- Empty field check
- Email format validation (regex)
- Mobile number validation (10 digits only)
- Error messages displayed in red alert box

### Server-Side
- Google Apps Script handles data persistence
- Errors logged in Apps Script execution logs
- Form assumes success if no exception thrown (no-cors mode)

## Styling Details

### Colors
- Primary: `from-blue-600 to-orange-500` (gradient)
- Background: `from-blue-50 to-orange-50` (gradient)
- Success: Green (`text-green-600`)
- Error: Red (`text-red-600`)
- Borders: `border-blue-200` / `border-blue-800` (dark mode)

### Components Used
- `Dialog` from `@/components/ui/dialog`
- `Input` from `@/components/ui/input`
- `Select` from `@/components/ui/select`
- `Button` from `@/components/ui/button`
- `Label` from `@/components/ui/label`

## Future Enhancements (Optional)
- [ ] Add file upload for resume/documents
- [ ] Add CAPTCHA for spam prevention
- [ ] Add email confirmation to student
- [ ] Add admin notification email
- [ ] Add form analytics/tracking
- [ ] Add multi-step form for better UX
- [ ] Add form field persistence (localStorage)
- [ ] Add duplicate submission prevention

## Troubleshooting

### Form not submitting
- Check Google Apps Script URL is correct
- Verify Web App is deployed and accessible
- Check browser console for errors

### Data not saving
- Verify Sheet ID in Google Apps Script
- Check Sheet name matches exactly
- Review Apps Script execution logs

### Validation errors
- Ensure all fields are filled
- Check email format (must contain @)
- Verify mobile is exactly 10 digits

## Notes
- Form uses `no-cors` mode for Google Apps Script compatibility
- Success is assumed if no error is thrown (can't verify response in no-cors)
- Form automatically resets and closes after successful submission
- All form fields are required
- Mobile number automatically strips non-digits

## Last Updated
- Created: [Current Date]
- Component: `src/components/EnrollmentForm.tsx`
- Integration: `src/pages/TechnicalCertification.tsx`
- Google Script: `google-apps-script.js`

