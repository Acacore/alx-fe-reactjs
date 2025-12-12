import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-3xl font-bold text-white">
          MyApp
        </NavLink>

        <div className="flex gap-8 items-center">
          <NavLink to="/" className="text-white hover:text-indigo-200 transition">Home</NavLink>
          <NavLink to="/about" className="text-white hover:text-indigo-200 transition">About</NavLink>
          <NavLink to="/blog" className="text-white hover:text-indigo-200 transition">Blog</NavLink>
          <NavLink to="/profile" className="text-white hover:text-indigo-200 transition">Profile</NavLink>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-white font-medium">Hi, {user.username}!</span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white font-semibold transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  )
}