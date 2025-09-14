import { createContext, useContext, useState, type ReactNode } from "react";

export type Todo = {
  id: number;
  text: string;
  active: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  deleteAllCompleted: () => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos phai đuoc su dung trong TodoProvider");
  }
  return context;
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      active: true 
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, active: !todo.active } : todo
      )
    );
  };
  
  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const deleteAllCompleted = () => {
    setTodos(prev => prev.filter(todo => todo.active));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, deleteAllCompleted }}>
      {children}
    </TodoContext.Provider>
  );
};