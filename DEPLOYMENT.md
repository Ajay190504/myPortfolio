# Static Site Deployment Guide

This guide will help you deploy your portfolio website as a static site.

## Prerequisites

1. **Form Service**: Set up a form service for the contact form
   - [Formspree](https://formspree.io/) (Free tier available)
   - [Netlify Forms](https://docs.netlify.com/forms/setup/) (Free with Netlify)
   - [Getform](https://getform.io/) (Free tier available)

2. **Resume File**: Place your resume PDF in the `client/public/` folder

## Step 1: Set up Form Service

### Option A: Formspree
1. Go to [formspree.io](https://formspree.io/) and create an account
2. Create a new form
3. Copy your form ID (it will look like `xrgjzqrg`)
4. Update the contact form in `client/src/components/contact-section.tsx`:
   ```javascript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

### Option B: Netlify Forms
1. Add `name="contact"` to your form element
2. Netlify will automatically detect and handle the form

## Step 2: Prepare Resume File

1. Copy your resume PDF to `client/public/Ajay_Waghmare_Resume.pdf`
2. The file will be accessible at `/Ajay_Waghmare_Resume.pdf` in your deployed site

## Step 3: Build the Static Site

```bash
npm run build:static
```

This will create a `dist/public` folder with your static site.

## Step 4: Deploy to Your Preferred Platform

### Option A: Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build:static`
4. Set publish directory: `dist/public`
5. Deploy!

### Option B: Vercel
1. Push your code to GitHub
2. Import your repository to Vercel
3. Set build command: `npm run build:static`
4. Set output directory: `dist/public`
5. Deploy!

### Option C: GitHub Pages
1. Build your site: `npm run build:static`
2. Push the `dist/public` folder to a `gh-pages` branch
3. Enable GitHub Pages in your repository settings

### Option D: Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase: `firebase init hosting`
3. Set public directory: `dist/public`
4. Build and deploy: `npm run build:static && firebase deploy`

## Step 5: Update Contact Form

After setting up your form service, update the contact form URL in:
`client/src/components/contact-section.tsx`

Replace `YOUR_FORM_ID` with your actual form ID.

## Environment Variables (Optional)

If you want to use environment variables for the form URL:

1. Create `.env` file in the root:
   ```
   VITE_FORMSPREE_ID=your_form_id_here
   ```

2. Update the contact form to use:
   ```javascript
   const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
   ```

## Custom Domain

After deployment, you can add a custom domain through your hosting provider's settings.

## Troubleshooting

- **Form not working**: Check your form service configuration
- **Resume not downloading**: Ensure the PDF is in `client/public/`
- **Build errors**: Make sure all dependencies are installed with `npm install`

## Performance Tips

- Optimize images before adding them to the project
- Consider using a CDN for large files
- Enable compression on your hosting provider
- Use lazy loading for images and components 