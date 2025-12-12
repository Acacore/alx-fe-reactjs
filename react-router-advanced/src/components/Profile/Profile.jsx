import { NavLink, Outlet } from 'react-router-dom'
export default function Profile() {
  return (
    <div className='max-w-5xl mx-auto'>
      <h1 className='text-5xl font-bold text-center mb-10'>My Profile</h1>
      <div className='flex gap-6 mb-10'>
        <NavLink to='/profile' end className={({isActive}) => isActive ? 'text-indigo-600 font-bold' : 'text-gray-600'}>Details</NavLink>
        <NavLink to='/profile/settings' className={({isActive}) => isActive ? 'text-indigo-600 font-bold' : 'text-gray-600'}>Settings</NavLink>
      </div>
      <div className='bg-white rounded-2xl shadow-2xl p-10'>
        <Outlet />
      </div>
    </div>
  )
}
