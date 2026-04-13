"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// todo type
export interface Todo {
  id: string;
  title: string;
}

// context state interface
interface TodosContextState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
}

// create context
const TodosContext = createContext<TodosContextState | undefined>(undefined);

// provider component
export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, { ...todo, id: new Date().getTime().toString() }]);
  };

  const updateTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const value: TodosContextState = {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
  };

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
};

// custom hook
export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};
