import { useState } from 'react'
import './App.css'
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";


function App() {
  const [count, setCount] = useState(0)

 
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <RegistrationForm />
    </div>
  )

}

export default App
