# Deployment Guide

## Overview

XENON AIRDROP ULTIMATE can be deployed to various platforms. This guide covers deployment options and best practices.

---

## Vercel Deployment

### Prerequisites

- GitHub account
- Vercel account
- Repository pushed to GitHub

### Deployment Steps

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select GitHub repository
   - Click "Import"

2. **Configure Settings**
   - Framework: None (Static)
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: ./

3. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Get live URL

### Environment Variables

No environment variables required for static deployment.

### Custom Domain

1. Go to project settings
2. Click "Domains"
3. Add custom domain
4. Update DNS records
5. Verify domain

---

## GitHub Pages Deployment

### Prerequisites

- GitHub account
- Repository with GitHub Pages enabled

### Deployment Steps

1. **Enable GitHub Pages**
   - Go to repository settings
   - Scroll to "GitHub Pages"
   - Select "main" branch
   - Click "Save"

2. **Access Site**
   - URL: `https://username.github.io/repo-name`
   - Wait 1-2 minutes for deployment

### Custom Domain

1. Add CNAME file
2. Update DNS records
3. Verify in settings

---

## Docker Deployment

### Build Docker Image

```bash
# Build image
docker build -t xenon-airdrop:latest .

# Run container
docker run -p 8080:80 xenon-airdrop:latest
```

### Docker Compose

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f
```

### Dockerfile

```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY *.js /usr/share/nginx/html/
COPY *.css /usr/share/nginx/html/
EXPOSE 80
```

---

## Netlify Deployment

### Prerequisites

- GitHub account
- Netlify account

### Deployment Steps

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub
   - Choose repository

2. **Configure Build**
   - Build command: (leave empty)
   - Publish directory: ./
   - Click "Deploy"

3. **Access Site**
   - Get Netlify URL
   - Configure custom domain

---

## AWS S3 + CloudFront

### Prerequisites

- AWS account
- S3 bucket
- CloudFront distribution

### Deployment Steps

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://xenon-airdrop-bucket
   ```

2. **Upload Files**
   ```bash
   aws s3 sync . s3://xenon-airdrop-bucket --delete
   ```

3. **Configure CloudFront**
   - Create distribution
   - Set S3 as origin
   - Configure caching
   - Add custom domain

4. **Enable HTTPS**
   - Request SSL certificate
   - Configure in CloudFront

---

## Self-Hosted Deployment

### Requirements

- Web server (Nginx, Apache)
- Domain name
- SSL certificate

### Nginx Configuration

```nginx
server {
    listen 443 ssl http2;
    server_name xenon-airdrop.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    root /var/www/xenon-airdrop;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
```

### Apache Configuration

```apache
<VirtualHost *:443>
    ServerName xenon-airdrop.com
    DocumentRoot /var/www/xenon-airdrop

    SSLEngine on
    SSLCertificateFile /path/to/cert.pem
    SSLCertificateKeyFile /path/to/key.pem

    <Directory /var/www/xenon-airdrop>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted

        <IfModule mod_rewrite.c>
            RewriteEngine On
            RewriteBase /
            RewriteRule ^index\.html$ - [L]
            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteCond %{REQUEST_FILENAME} !-d
            RewriteRule . /index.html [L]
        </IfModule>
    </Directory>

    # Security headers
    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
</VirtualHost>
```

---

## Performance Optimization

### Caching Strategy

```
# Cache static assets for 1 year
Cache-Control: public, max-age=31536000

# Cache HTML for 1 hour
Cache-Control: public, max-age=3600
```

### Compression

```nginx
gzip on;
gzip_types text/html text/css application/javascript;
gzip_min_length 1000;
```

### CDN Configuration

- Use CDN for static assets
- Configure cache headers
- Enable compression
- Set TTL appropriately

---

## Monitoring & Maintenance

### Uptime Monitoring

- Use UptimeRobot or similar
- Monitor 24/7
- Get alerts on downtime

### Performance Monitoring

- Track load times
- Monitor error rates
- Analyze user behavior

### Security Monitoring

- Check for vulnerabilities
- Monitor SSL certificate
- Review security headers

---

## Backup & Recovery

### Backup Strategy

1. **Code Backup**
   - Git repository
   - GitHub backup
   - Local backup

2. **Data Backup**
   - User exports
   - Database backups
   - Incremental backups

### Recovery Procedure

1. Identify issue
2. Restore from backup
3. Verify functionality
4. Monitor for issues

---

## CI/CD Pipeline

### GitHub Actions

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| 404 errors | Check routing configuration |
| CORS errors | Configure CORS headers |
| Slow loading | Enable caching and compression |
| SSL errors | Verify certificate validity |
| Blank page | Check browser console for errors |

---

## Deployment Checklist

- [ ] Code committed and pushed
- [ ] All tests passing
- [ ] Security headers configured
- [ ] Performance optimized
- [ ] SSL certificate valid
- [ ] Domain configured
- [ ] Monitoring enabled
- [ ] Backup strategy in place
- [ ] Documentation updated
- [ ] Team notified

---

**Last Updated:** June 4, 2024
