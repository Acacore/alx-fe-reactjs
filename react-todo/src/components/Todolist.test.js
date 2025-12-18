// src/__tests__/TodoList.test.jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoList from '../components/TodoList'

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />)
    expect(screen.getByText('Learn React')).toBeInTheDocument()
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument()
    expect(screen.getByText('Write Tests')).toBeInTheDocument()
  })

  test('adds a new todo', async () => {
    const user = userEvent.setup()
    render(<TodoList />)

    const input = screen.getByPlaceholderText('Add a new todo...')
    const button = screen.getByText('Add')

    await user.type(input, 'New Todo Item')
    await user.click(button)

    expect(screen.getByText('New Todo Item')).toBeInTheDocument()
  })

  test('toggles a todo completion', async () => {
    const user = userEvent.setup()
    render(<TodoList />)

    const todo = screen.getByText('Build a Todo App')
    expect(todo).not.toHaveClass('line-through') // ← Fixed: added missing )

    await user.click(todo)
    expect(todo).toHaveClass('line-through')

    await user.click(todo)
    expect(todo).not.toHaveClass('line-through') // ← Fixed here too
  })

  test('deletes a todo', async () => {
    const user = userEvent.setup()
    render(<TodoList />)

    const deleteButtons = screen.getAllByText('×')
    await user.click(deleteButtons[0])

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument()
  })
})