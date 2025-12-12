import { useAuth } from '../../context/AuthContext'
export default function ProfileDetails() {
  const { user } = useAuth()
  return (
    <div>
      <h2 className='text-3xl font-bold mb-6'>Profile Details</h2>
      <div className='space-y-4 text-lg'>
        <p><strong>Username:</strong> {user?.username || 'Guest'}</p>
        <p><strong>Status:</strong> <span className='text-green-600'>Active Member</span></p>
        <p><strong>Member since:</strong> December 2025</p>
      </div>
    </div>
  )
}
