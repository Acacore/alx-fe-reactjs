import { useState } from 'react'
import Api from './services/Api'
import Header from '../components/Header'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <Header/>
     <Api/>
        
    </div>
  )
}

export default App
