# 🚀 Deployment Instructions - VPS

## 📦 Files Ready
- **dist.zip** (27 MB) - Compressed production build
- Location: `d:\CLIENTES\Cones de Coração\WEB DOWN\v15 dia das maes\web-modeler-magic-main\dist.zip`

## 📂 Folder Structure
```
dist/
├── index.html          (Main HTML entry point)
├── favicon.ico         (Site favicon)
├── robots.txt          (SEO robots file)
├── placeholder.svg     (Placeholder image)
└── assets/             (All static assets - images, CSS, JS)
    ├── *.webp          (Image files)
    ├── *.jpg           (Image files)
    ├── *.css           (Stylesheets)
    └── *.js            (JavaScript bundles)
```

## 🔧 VPS Deployment Steps

1. **Upload to VPS:**
   ```bash
   scp dist.zip user@your-vps.com:/var/www/html/
   ```

2. **Extract on VPS:**
   ```bash
   cd /var/www/html
   unzip dist.zip
   rm dist.zip
   ```

3. **Set Permissions:**
   ```bash
   chmod -R 755 dist/
   chown -R www-data:www-data dist/
   ```

4. **Configure Web Server:**
   - Point your domain root to `/var/www/html/dist`
   - Ensure `index.html` is served for all routes (SPA configuration)

5. **Nginx Example:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/html/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

6. **Apache Example (.htaccess):**
   ```apache
   <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
   </IfModule>
   ```

## ✅ What's Included
- ✅ Spanish version (/es) - Complete
- ✅ English version (/en) - Complete with new "win" carousel
- ✅ All images and assets
- ✅ Responsive design for mobile/desktop
- ✅ Production-optimized build (minified, gzipped)

## 📊 Build Info
- Build Date: April 6, 2026
- Total Size: 30 MB (uncompressed), 27 MB (compressed)
- Includes: 488 Spanish images + 110+ English images
- All assets embedded and optimized
