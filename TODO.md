# TODO: Fix Portfolio Site for Vercel Deployment

## Step 1: Move Portfolio Files to Root Directory
- [x] Move portfolio/index.html to root/index.html
- [x] Move portfolio/script.js to root/script.js
- [x] Move portfolio/style.css to root/style.css
- [x] Move portfolio/images/ folder to root/images/

## Step 2: Update index.html
- [x] Change href="../no-popups.css" to href="no-popups.css"
- [x] Remove 'netlify' attribute from contact form
- [x] Change form action to Formspree URL (use placeholder YOUR_FORMSPREE_ID)

## Step 3: Update script.js
- [x] Change fetch URL from '/' to Formspree endpoint

## Step 4: Clean Up
- [x] Delete netlify.toml

## Step 5: Formspree Setup (User Action)
- [ ] Sign up at https://formspree.io/
- [ ] Create a new form
- [ ] Get the form ID (looks like https://formspree.io/f/YOUR_ID)
- [ ] Replace YOUR_FORMSPREE_ID in index.html with the actual ID

## Step 6: Redeploy to Vercel
- [ ] Commit and push changes to your repository
- [ ] Vercel should auto-redeploy or trigger a new deployment
- [ ] Test the site and contact form
