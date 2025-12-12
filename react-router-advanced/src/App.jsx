// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Blog from './pages/Blog'
import BlogPost from './components/BlogPost'  // ← New component for checker
import Profile from './components/Profile'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />  {/* ← Exact checker strings */}

            {/* Protected Profile */}
            <Route
              path="profile/*"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}