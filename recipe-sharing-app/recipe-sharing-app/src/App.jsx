import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddRecipeForm from './components/AddRecipeForm'
import useRecipeStore from './components/RecipeList'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="">
    <AddRecipeForm/>
    <useRecipeStore/>
    
   </div>
  )
}

export default App
