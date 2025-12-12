import TodoList from './components/TodoList'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">
          My Todo List
        </h1>
        <TodoList />
      </div>
    </div>
  )
}