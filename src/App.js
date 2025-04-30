import React, { useState, useEffect } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recipes'));
    if (stored) setRecipes(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes([recipe, ...recipes]);
  };

  return (
    <div className="app">
      <h1>🍳 Recipe Book</h1>
      <RecipeForm onAdd={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
