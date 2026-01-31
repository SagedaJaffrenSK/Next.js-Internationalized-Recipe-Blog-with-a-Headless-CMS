const EXTERNAL_DATA_URL = 'https://your-site-url.com';

function generateSiteMap(recipes) {
  const locales = ['en', 'es', 'fr'];
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url><loc>${EXTERNAL_DATA_URL}</loc></url>
     ${recipes.flatMap((recipe) => 
       locales.map((locale) => `
       <url>
           <loc>${EXTERNAL_DATA_URL}/${locale}/recipes/${recipe.slug}</loc>
       </url>
     `)).join('')}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  const recipes = [{ slug: 'classic-paella' }]; // Replace with CMS fetch
  const sitemap = generateSiteMap(recipes);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function SiteMap() {}