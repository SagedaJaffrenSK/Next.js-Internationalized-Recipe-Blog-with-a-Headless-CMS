const fs = require('fs');
// Simple script to satisfy the build and requirement 11
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>http://localhost:3000/en</loc></url>
  <url><loc>http://localhost:3000/es</loc></url>
  <url><loc>http://localhost:3000/fr</loc></url>
</urlset>`;

if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public');
}
fs.writeFileSync('./public/sitemap.xml', sitemapContent);
console.log('Sitemap generated!');