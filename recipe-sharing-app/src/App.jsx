import { useState } from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddRecipeForm/>
     <RecipeList/>
       
    </>
  )
}

export default App
