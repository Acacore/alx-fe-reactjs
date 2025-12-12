import { Link } from 'react-router-dom'
export default function Blog() {
  const posts = Array.from({length: 6}, (_, i) => ({id: i+1, title: `Blog Post #${i+1}`}))
  return (
    <div>
      <h1 className='text-5xl font-bold text-center mb-12'>Blog Posts</h1>
      <div className='grid md:grid-cols-3 gap-8'>
        {posts.map(p => (
          <Link key={p.id} to={`/blog/${p.id}`} className='bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition'>
            <h3 className='text-2xl font-bold mb-3'>{p.title}</h3>
            <p className='text-gray-600'>Click to read</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
