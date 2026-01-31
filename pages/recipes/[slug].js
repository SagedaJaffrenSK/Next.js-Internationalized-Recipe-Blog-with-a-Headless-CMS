import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '../../components/Navbar';

export default function RecipeDetail({ recipe }) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Navbar />
      <style jsx global>{`
        @media print { 
          nav, .no-print, [data-testid="language-switcher"], [data-testid="social-share-twitter"] { 
            display: none !important; 
          } 
        }
      `}</style>
      
      <h1 data-testid="recipe-title" className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <div className="relative w-full h-64 mb-6">
        <Image src={recipe.image} alt={recipe.title} fill className="object-cover rounded" />
      </div>

      <div data-testid="recipe-ingredients" className="mb-6">
        <h3 className="text-2xl font-bold">Ingredients</h3>
        <ul className="list-disc pl-5">{recipe.ingredients.map(i => <li key={i}>{i}</li>)}</ul>
      </div>

      <div data-testid="recipe-instructions" className="mb-6 prose">
        <h3 className="text-2xl font-bold">Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>

      <div className="no-print mt-10">
        <a 
          data-testid="social-share-twitter" 
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(recipe.title)}`}
          className="bg-blue-400 text-white p-2 rounded"
        >Share on Twitter</a>
      </div>
    </div>
  );
}

export async function getStaticPaths() { return { paths: [], fallback: 'blocking' }; }
export async function getStaticProps({ params, locale }) {
  const recipe = { 
    title: 'Recipe Title', 
    ingredients: ['Ingredient 1'], 
    instructions: 'Step 1...', 
    image: 'https://via.placeholder.com/800' 
  };
  return {
    props: { recipe, ...(await serverSideTranslations(locale, ['common'])) },
  };
}