import React, { useState } from "react";
import { useTodos } from "../Context/TodoContext";

const AddTaskForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="add details"
        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium"
      >
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;