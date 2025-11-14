import { useState } from 'react'
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { useRecipeStore } from './components/recipeStore';

import './App.css'

function App() {
  const recipes = useRecipeStore(state => state.recipes);
  const [count, setCount] = useState(0);              

  return (
    <div>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App
