import PostsComponent from './components/PostsComponent'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-3">
            React Query + Tailwind Demo
          </h1>
          <p className="text-xl text-indigo-100">
            Fetching posts from JSONPlaceholder API
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <PostsComponent />
      </main>
    </div>
  )
}