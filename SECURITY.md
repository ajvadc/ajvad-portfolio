# Security Policy

## Overview
This document outlines the security measures implemented in the Ajvad Cheniyath Portfolio and guidelines for responsible disclosure of vulnerabilities.

## Security Measures Implemented

### 1. **Content Security Policy (CSP)**
Added via meta tags to prevent Cross-Site Scripting (XSS) attacks:
- Restricts execution of inline scripts
- Limits external resource loading

### 2. **Subresource Integrity (SRI)**
All external CDN resources include integrity hashes:
- Font Awesome CDN: Protected with SRI hash
- Prevents compromised CDN from injecting malicious code
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/..." 
      integrity="sha512-..." crossorigin="anonymous">
```

### 3. **Link Security**
All external links include security attributes:
```html
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">
```
- `target="_blank"`: Opens in new tab
- `rel="noopener noreferrer"`: Prevents:
  - Window.opener access (security risk)
  - Referrer information leakage

### 4. **Referrer Policy**
Strict referrer policy prevents sensitive information leakage:
```html
<meta name="referrer" content="strict-origin-when-cross-origin">
```

### 5. **MIME Type Protection**
Prevents MIME-sniffing attacks:
```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
```

### 6. **Permissions Policy**
Disables unnecessary browser features:
```html
<meta http-equiv="Permissions-Policy" 
      content="geolocation=(), microphone=(), camera=()">
```

### 7. **Email Protection**
Personal email address is not directly exposed in HTML to prevent:
- Spam and phishing attacks
- Email harvesting by bots
- User tracking

### 8. **Script Loading**
JavaScript files use the `defer` attribute:
- Improves page load performance
- Ensures DOM is ready before script execution

## Vulnerability Disclosure

If you discover a security vulnerability in this portfolio, please email: **[contact form on portfolio]** instead of publicly disclosing it.

**Do NOT:**
- Create public issues for security vulnerabilities
- Disclose the vulnerability publicly before it's fixed
- Attempt to access data you're not authorized to access

**Do:**
- Provide detailed information about the vulnerability
- Allow reasonable time for patching (14 days minimum)
- Act in good faith

## Best Practices for Users

1. **Always use HTTPS** when accessing this portfolio
2. **Don't share personal credentials** in contact forms
3. **Verify links** before clicking, especially in emails
4. **Report suspicious activity** immediately

## Security Updates

Security updates are prioritized and deployed as soon as possible. Check the [CHANGELOG.md](CHANGELOG.md) for security-related updates.

## Dependencies Security

- Regular dependency audits: `npm audit`
- Updates for known vulnerabilities
- Minimal external dependencies to reduce attack surface

## Browser Security

This portfolio is optimized for modern browsers with security features:
- HTML5 Security
- HTTPS enforcement (recommended via hosting provider)
- Secure cookies (when applicable)

## Compliance

This portfolio follows:
- OWASP Top 10 security guidelines
- GDPR privacy requirements (no tracking)
- ADA accessibility standards

## Hosting Security

When deployed, configure your host with:
- HTTPS/TLS 1.2+
- Security headers (can be set via `.htaccess` or hosting config)
- Regular backups
- DDoS protection

### Example `.htaccess` (for Apache servers):
```apache
# Security Headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# HTTPS Redirect
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

## Last Updated
February 16, 2026

## Questions?
For security-related questions, reach out through your LinkedIn profile.
