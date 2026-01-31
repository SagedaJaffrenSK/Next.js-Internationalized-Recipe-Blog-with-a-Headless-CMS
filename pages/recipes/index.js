import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '../../components/Navbar';

export default function RecipesListing({ allRecipes }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const filteredRecipes = allRecipes.filter(recipe => {
    return recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
           (category === '' || recipe.category === category);
  });

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="p-4 flex gap-4">
        <input 
          data-testid="search-input" 
          placeholder="Search..." 
          className="border p-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select data-testid="category-filter" className="border p-2" onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Main Course">Main Course</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {filteredRecipes.map(recipe => (
          <div key={recipe.slug} data-testid="recipe-card" className="border p-4 shadow">
            {recipe.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  // Mock data for build
  const allRecipes = [
    { title: 'Classic Paella', slug: 'paella', category: 'Main Course' },
    { title: 'Chocolate Cake', slug: 'cake', category: 'Dessert' }
  ];
  return {
    props: {
      allRecipes,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}