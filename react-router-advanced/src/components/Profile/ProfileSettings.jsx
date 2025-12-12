export default function ProfileSettings() {
  return (
    <div>
      <h2 className='text-3xl font-bold mb-6'>Profile Settings</h2>
      <div className='space-y-6'>
        <div>
          <label className='block font-medium mb-2'>Email Notifications</label>
          <input type='checkbox' className='w-6 h-6' defaultChecked />
        </div>
        <div>
          <label className='block font-medium mb-2'>Theme</label>
          <select className='px-4 py-3 border rounded-lg'>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <button className='bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold'>
          Save Changes
        </button>
      </div>
    </div>
  )
}
