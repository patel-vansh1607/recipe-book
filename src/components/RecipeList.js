import React from 'react';

const RecipeList = ({ recipes }) => {
  if (!recipes.length) return <p>No recipes added yet.</p>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div className="recipe-card" key={index}>
          <h2>{recipe.title}</h2>
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
