Recipe Blog Platform
A high-performance, multilingual recipe blog built with Next.js, Tailwind CSS, and Contentful CMS. This project demonstrates advanced frontend architecture, including Static Site Generation (SSG), localized routing, and containerized deployment.

🚀 Features
Static Site Generation (SSG): All recipe pages and the homepage are pre-rendered at build time for optimal SEO and performance.

Multilingual Support (i18n): Full support for English, Spanish, and French with localized routing (e.g., /en, /es, /fr).

Dynamic Sitemap: Automatically generated sitemap.xml including all localized alternative URLs.

Newsletter Integration: A functional subscription form with client-side validation and success state handling.

Responsive Design: A mobile-first UI built with Tailwind CSS that supports high-resolution image optimization.

Print Optimization: Custom CSS media queries to ensure recipes are print-friendly by hiding navigation and UI elements.

🛠️ Tech Stack
Framework: Next.js 15+ (Pages Router)

Styling: Tailwind CSS

Internationalization: next-i18next

Deployment: Docker & Docker Compose

CMS: Contentful (or equivalent)

🐳 Docker Setup
The application is fully containerized. To run the project locally:

Environment Variables: Create a .env.local based on .env.example.

Build and Run:

Bash
docker-compose up --build -d
Healthcheck: The container includes a built-in healthcheck to ensure the service is live. Verify status with:

Bash
docker ps
📋 Solution Architecture
Static Site Generation
We utilize getStaticProps to fetch recipe data from the CMS at build time. This ensures the fastest possible Time to First Byte (TTFB) and allows the site to be hosted on any static provider or CDN.

Internationalization Strategy
Using next-i18next, we implemented a middleware-based localized routing system. This allows for:

Language detection via browser headers.

Localized sub-paths (e.g., /es/recipes/lasagna).

SEO-optimized hreflang tags in the sitemap.

Testing & Quality Assurance
The project includes mandatory data-testid attributes on critical components (Recipe Cards, Newsletter Form, Language Switcher) to facilitate automated end-to-end testing.