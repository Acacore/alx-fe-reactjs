// src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:postId', element: <PostDetail /> },
      {
        path: 'profile',
        element: <ProtectedRoute><Profile /></ProtectedRoute>,
        children: [
          { index: true, element: <ProfileDetails /> },
          { path: 'settings', element: <ProfileSettings /> },
        ],
      },
    ],
  },
])

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}