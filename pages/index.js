import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

export default function Home({ featuredRecipes }) {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-6">Featured Recipes</h1>
        <div data-testid="featured-recipes" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredRecipes.map(recipe => (
            <div key={recipe.id} data-testid="recipe-card" className="border p-4 rounded shadow">
              <h2 className="text-2xl font-semibold">{recipe.title}</h2>
            </div>
          ))}
        </div>
        <Newsletter />
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  // Replace with your actual CMS fetch logic
  const featuredRecipes = [{ id: 1, title: 'World Best Lasagna' }, { id: 2, title: 'Authentic Tacos' }];
  return {
    props: {
      featuredRecipes,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}