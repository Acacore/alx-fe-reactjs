import { create } from 'zustand';
import { nanoid } from 'nanoid';

/**
 * Global recipe store using Zustand.
 * Manages the list of recipes and provides actions to add, update, delete, and set recipes.
 */
export const useRecipeStore = create((set) => ({
  // State: Array of recipe objects
  recipes: [],

  // Action: Replace the entire recipes array (e.g., for loading from storage or API)
  setRecipes: (newRecipesArray) =>
    set({ recipes: newRecipesArray }),

  // Action: Add a new recipe. Generates a unique ID if not provided.
  addRecipe: (newRecipeData) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        {
          // Use provided ID or generate a new one using nanoid
          id: newRecipeData.id ?? nanoid(),
          // Spread all other recipe fields (title, description, etc.)
          ...newRecipeData,
        },
      ],
    })),

  // Action: Update an existing recipe by ID. Supports partial updates.
  updateRecipe: (updatedRecipeData) =>
    set((state) => ({
      recipes: state.recipes.map((existingRecipe) =>
        // If this is the recipe we want to update
        existingRecipe.id === updatedRecipeData.id
          ? { ...existingRecipe, ...updatedRecipeData } // Merge old + new data
          : existingRecipe // Otherwise, keep it unchanged
      ),
    })),

  // Action: Delete a recipe by its ID
  deleteRecipe: (recipeIdToDelete) =>
    set((state) => ({
      recipes: state.recipes.filter(
        (existingRecipe) => existingRecipe.id !== recipeIdToDelete
      ),
    })),
}));