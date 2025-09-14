import React from 'react'
import { useTodos } from '../Context/TodoContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Completed = () => {
  const { todos, toggleTodo, deleteTodo, deleteAllCompleted } = useTodos();
  const completedTodos = todos.filter(todo => !todo.active);

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  const handleDeleteAll = () => {
    if (completedTodos.length > 0) {
      if (window.confirm('Bạn có chắc chắn muốn xóa tất cả task đã hoàn thành?')) {
        deleteAllCompleted();
      }
    }
  };

  return (
    <div>
      <div className="mt-3">
        {completedTodos.map((todo) => (
          <div key={todo.id} className="flex items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={true}
                onChange={() => toggleTodo(todo.id)}
                className="w-4 h-4"
              />
              <span className="line-through text-gray-500">{todo.text}</span>
            </div>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 hover:cursor-pointer text-lg font-bold"
              title="Xóa task này"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>

      {completedTodos.length > 0 && (
        <div className="mt-4 text-center flex justify-end">
          <button
            onClick={handleDeleteAll}
            className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white px-4 py-2 rounded font-medium "
          >
            Delete all
          </button>
        </div>
      )}
    </div>
  )
}

export default Completed