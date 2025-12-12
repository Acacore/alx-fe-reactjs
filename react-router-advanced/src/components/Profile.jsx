import { Routes, Route, NavLink, Outlet } from 'react-router-dom'
import ProfileDetails from '../pages/Profile/ProfileDetails'
import ProfileSettings from '../pages/Profile/ProfileSettings'

export default function Profile() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-10">My Profile</h1>

      {/* Navigation Tabs */}
      <div className="flex gap-8 justify-center mb-10 text-xl">
        <NavLink
          to="/profile"
          end
          className={({ isActive }) =>
            isActive
              ? 'text-indigo-600 font-bold border-b-4 border-indigo-600 pb-2'
              : 'text-gray-600 hover:text-indigo-600 pb-2'
          }
        >
          Details
        </NavLink>
        <NavLink
          to="/profile/settings"
          className={({ isActive }) =>
            isActive
              ? 'text-indigo-600 font-bold border-b-4 border-indigo-600 pb-2'
              : 'text-gray-600 hover:text-indigo-600 pb-2'
          }
        >
          Settings
        </NavLink>
      </div>

      {/* Nested Routes Content */}
      <div className="bg-white rounded-2xl shadow-2xl p-10">
        <Routes>
          <Route index element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  )
}
