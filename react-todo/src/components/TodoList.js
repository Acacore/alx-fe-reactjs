import { useState } from 'react'

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a Todo App', completed: false },
  { id: 3, text: 'Write Tests', completed: false },
]

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)
  const [inputValue, setInputValue] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false }
    ])
    setInputValue('')
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
