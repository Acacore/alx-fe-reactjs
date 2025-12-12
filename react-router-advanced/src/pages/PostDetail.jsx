import { useParams, Link } from 'react-router-dom'

export default function PostDetail() {
  const { postId } = useParams()

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/blog" className="text-indigo-600 hover:underline mb-6 inline-block">Back to Blog</Link>
      <div className="bg-white rounded-2xl shadow-2xl p-12">
        <h1 className="text-5xl font-bold mb-6">Blog Post #{postId}</h1>
        <div className="prose prose-lg max-w-none">
          <p>This is a dynamic blog post with ID: <strong>{postId}</strong></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  )
}
