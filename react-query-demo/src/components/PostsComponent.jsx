// src/components/PostsComponent.jsx
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export default function PostsComponent() {
  const {
    data: posts = [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,           
    cacheTime: 1000 * 60 * 10,          
    refetchOnWindowFocus: false,        
    keepPreviousData: true,             
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Posts {posts.length > 0 && `(${posts.length})`}
        </h2>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-3"
        >
          <svg className={`w-5 h-5 ${isFetching ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M19 9l-3.5 3.5M5 15l3.5-3.5" />
          </svg>
          {isFetching ? 'Refreshing...' : 'Refresh Posts'}
        </button>
      </div>

      {isLoading && (
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-indigo-600 border-t-transparent"></div>
          <p className="mt-6 text-2xl text-gray-600">Loading posts...</p>
        </div>
      )}

      {isError && (
        <div className="text-center py-20">
          <p className="text-3xl font-bold text-red-600 mb-4">Error!</p>
          <p className="text-xl text-gray-700">{error.message}</p>
        </div>
      )}

      {isFetching && !isLoading && (
        <div className="bg-indigo-100 border-l-4 border-indigo-600 text-indigo-800 p-4 rounded-lg text-center font-medium">
          Background refresh in progress...
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 12).map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {post.userId}
              </div>
              <span className="text-sm text-gray-500">Post #{post.id}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 leading-relaxed line-clamp-4">
              {post.body}
            </p>
          </article>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-12 text-lg">
        Showing first 12 posts • Data cached for 10 minutes • No extra network calls on revisit!
      </p>
    </div>
  )
}