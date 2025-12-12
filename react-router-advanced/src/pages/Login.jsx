import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim()) {
      login(username)
      navigate('/profile')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 bg-white rounded-2xl shadow-2xl p-10">
      <h2 className="text-4xl font-bold text-center mb-8">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Enter username (e.g. john)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:scale-105 transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}
