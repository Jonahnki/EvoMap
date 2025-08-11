# Deployment Guide

## Overview
This guide covers deploying EvoMap to various platforms including Vercel, Netlify, and GitHub Pages.

## Quick Deploy Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload build/ folder to Netlify or connect GitHub repo
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

## Environment Configuration

### Production Environment Variables
```bash
REACT_APP_API_URL=https://api.evomap.dev
REACT_APP_DEMO_MODE=false
REACT_APP_ANALYTICS=true
GENERATE_SOURCEMAP=false
```

### Build Optimization
- Enable tree shaking
- Minimize bundle size
- Optimize images and assets
- Configure CDN for static assets

## Performance Monitoring
- Set up error tracking (Sentry)
- Monitor Core Web Vitals
- Track user interactions
- Monitor API response times

## Security Considerations
- Enable HTTPS
- Configure CSP headers
- Sanitize user inputs
- Validate file uploads
