import React from 'react'
import { useTodos } from '../Context/TodoContext'
import AddTaskForm from '../components/AddTaskForm'

const All = () => {
  const { todos, toggleTodo } = useTodos();

  return (
    <div>
      <AddTaskForm />
      <div className="space-y-2">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={!todo.active}
              onChange={() => toggleTodo(todo.id)}
              className="w-4 h-4"
            />
            <span className={!todo.active ? "line-through text-gray-500" : ""}>
              {todo.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default All