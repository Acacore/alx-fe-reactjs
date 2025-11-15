import { create } from 'zustand';
import { nanoid } from "nanoid";

const useRecipeStore = create(set => (
  {

    recipes: [],
    // addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),


    // Add a recipe. If newRecipe has no id, give it one.
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        { id: newRecipe.id ?? nanoid(), ...newRecipe },
      ],
    })),


  // Update an existing recipe by id. updatedRecipe must include id.
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      ),
    })),


    // Delete a recipe by id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),


  }

  


));

export default useRecipeStore