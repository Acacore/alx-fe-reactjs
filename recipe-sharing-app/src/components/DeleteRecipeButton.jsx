// src/components/DeleteRecipeButton.jsx
import React from "react";
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    const confirmed = window.confirm("Delete this recipe? This cannot be undone.");
    if (!confirmed) return;
    deleteRecipe(recipeId);
    if (onDelete) onDelete();
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
