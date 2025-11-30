import { useState } from 'react'

import './App.css'
import "./index.css";
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <UserProfile />
    </div>
      
  
  )
}

export default App
