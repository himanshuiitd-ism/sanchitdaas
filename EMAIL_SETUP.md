# Portfolio Email Setup Guide

Your portfolio is now fully populated with data from your CV and includes email sending functionality. Follow these steps to enable email notifications.

## Quick Setup (5 minutes)

### Step 1: Enable 2-Step Verification on Google Account
1. Go to [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Scroll down to "How you sign in to Google"
3. Click on "2-Step Verification"
4. Follow the prompts to enable it

### Step 2: Generate an App Password
1. Go to [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Windows Computer" (or your device type)
3. Google will generate a 16-character app password
4. Copy this password (it will include spaces)

### Step 3: Update .env.local
1. Open the `.env.local` file in your project root
2. Replace `your_email@gmail.com` with your actual Gmail address (e.g., `sanchitdass.maths@gmail.com`)
3. Replace `your_16_character_app_password` with the password from Step 2 (keep the spaces as-is)
4. Save the file

Example:
```
GMAIL_EMAIL=sanchitdass.maths@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

### Step 4: Test the Functionality
1. Run `npm run dev` to start the development server
2. Fill out the contact form on your portfolio
3. You should receive an email confirmation immediately
4. You'll also receive the message in your Gmail inbox

## Important Notes

- ⚠️ **Never commit `.env.local` to Git** - It's already in `.gitignore` for security
- The app password is specific to your Gmail account and this application
- Recipients will get two emails:
  - The original sender (visitor) gets an auto-reply confirmation
  - You receive the actual message from the visitor
- If emails don't work, check your Gmail activity to see if there were any login issues

## What Was Implemented

### Content Updates
✅ All CV information integrated into portfolio:
- Education history (2022-present and 2018-2021)
- Featured research publication (Love Wave Propagation paper)
- Academic achievements and awards
- Conference presentations
- Contact information

### Email Infrastructure
✅ API Route: `/api/send-email` handles form submissions
✅ Nodemailer integration with Gmail SMTP
✅ Automated email validation and error handling
✅ Dual-email system: notification to you + confirmation to visitor

### Form Improvements
✅ Real-time validation
✅ Loading states during submission
✅ Success/error message display
✅ Auto-clear form on successful submission
✅ Accessible and styled form fields

## Troubleshooting

### "Failed to send email" Error
1. Verify both `GMAIL_EMAIL` and `GMAIL_APP_PASSWORD` are set correctly in `.env.local`
2. Check that 2-Step Verification is enabled on your Google account
3. Ensure the app password is valid (regenerate if needed)
4. Restart the dev server after updating `.env.local`

### Still getting errors?
1. Check the browser console for specific error messages
2. Check server logs for detailed error information
3. Verify your Gmail account hasn't triggered security alerts

## Next Steps

- Deploy your portfolio when you're ready
- Consider adding more sections (Publications list, Teaching history, etc.)
- You can expand the mini-cards with more achievements as needed
- The portfolio automatically responds to contact form submissions

---

**File Structure for Reference:**
- `.env.local` - Gmail credentials (not committed to Git)
- `src/app/page.tsx` - Main portfolio page with real content
- `src/app/api/send-email/route.ts` - Email API endpoint
