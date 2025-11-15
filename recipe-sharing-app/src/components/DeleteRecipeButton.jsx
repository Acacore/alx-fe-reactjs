import React from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
  const confirmed = window.confirm(
    'Are you sure you want to delete this recipe? This action cannot be undone.'
  );
  if (!confirmed) return;

  deleteRecipe(recipeId);

  if (onDelete) onDelete();
};

  return (
    <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;