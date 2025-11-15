// src/recipeStore.js
import { create } from 'zustand';
import { nanoid } from 'nanoid';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // === RECIPES ===
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: nanoid(), ...recipe }],
    })),

  updateRecipe: (updated) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updated.id ? { ...r, ...updated } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // === SEARCH ===
  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const term = searchTerm.toLowerCase().trim();

    const filtered = recipes.filter((recipe) => {
      const title = (recipe.title || '').toLowerCase();
      const desc = (recipe.description || '').toLowerCase();
      const ingredients = (recipe.ingredients || []).join(' ').toLowerCase();
      return title.includes(term) || desc.includes(term) || ingredients.includes(term);
    });

    set({ filteredRecipes: filtered });
  },

  // === FAVORITES ===
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // Prevent duplicates
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // === RECOMMENDATIONS ===
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    if (favorites.length === 0) {
      set({ recommendations: [] });
      return;
    }

    // Recommend recipes with matching ingredients from favorites
    const favoriteRecipes = favorites.map((id) =>
      recipes.find((r) => r.id === id)
    ).filter(Boolean);

    const commonIngredients = favoriteRecipes
      .flatMap((r) => r.ingredients || [])
      .reduce((acc, ing) => {
        acc[ing] = (acc[ing] || 0) + 1;
        return acc;
      }, {});

    const recommendations = recipes
      .filter((recipe) => !favorites.includes(recipe.id))
      .filter((recipe) => {
        const recipeIngs = recipe.ingredients || [];
        return recipeIngs.some((ing) => commonIngredients[ing] > 0);
      })
      .slice(0, 3); // Top 3

    set({ recommendations });
  },
}));