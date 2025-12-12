// src/App.jsx — now super clean
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'
import Profile from './components/Profile'   // ← now from components

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
            <Route path="blog/:postId" element={<PostDetail />} />

            {/* Protected Profile — now uses Profile.jsx with its own nested routes */}
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