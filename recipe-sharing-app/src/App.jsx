import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from "./components/RecipeDetails";



function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/add" element={<AddRecipeForm />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
      {/* add other routes as needed */}
    </Routes>
  </BrowserRouter>

  )
}

export default App
