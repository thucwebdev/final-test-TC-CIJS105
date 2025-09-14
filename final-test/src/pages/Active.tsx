import React from 'react'
import { useTodos } from '../Context/TodoContext'
import AddTaskForm from '../components/AddTaskForm'

const Active = () => {
  const { todos, toggleTodo } = useTodos();
  const activeTodos = todos.filter(todo => todo.active);

  return (
    <div>
      <AddTaskForm />
      <div className="space-y-2">
        {activeTodos.map((todo) => (
          <div key={todo.id} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={false}
              onChange={() => toggleTodo(todo.id)}
              className="w-4 h-4"
            />
            <span>{todo.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Active