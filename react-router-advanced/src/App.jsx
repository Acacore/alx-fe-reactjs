// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'
import Profile from './pages/Profile/Profile'
import ProfileDetails from './pages/Profile/ProfileDetails'
import ProfileSettings from './pages/Profile/ProfileSettings'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:postId" element={<PostDetail />} />

          {/* Protected Profile with Nested Routes */}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route index element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}