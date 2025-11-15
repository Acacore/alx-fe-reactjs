// 


// src/components/RecipeDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => String(r.id) === String(id))
  );

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate("/")}>Back to list</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* show more fields if present */}
      <p>Ingredients: {recipe.ingredients?.join(", ")}</p>
      <p>Instructions: {recipe.instructions}</p>

      {/* Edit form (could be inline or open via modal) */}
      <h3>Edit</h3>
      <EditRecipeForm initialRecipe={recipe} onSuccess={() => {}} />

      {/* Delete button */}
      <DeleteRecipeButton
        recipeId={recipe.id}
        onDelete={() => navigate("/")}
      />
    </div>
  );
};

export default RecipeDetails;
