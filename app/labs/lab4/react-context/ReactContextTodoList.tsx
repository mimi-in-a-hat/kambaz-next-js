"use client";

import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useTodos, Todo } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodos();
  const [todo, setTodo] = useState<Todo>({ id: "-1", title: "" });

  return (
    <div className="w-25" id="wd-context-todo-list">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm
          todo={todo}
          setTodo={setTodo}
          addTodo={addTodo}
          updateTodo={updateTodo}
        />
        {todos.map((t) => (
          <TodoItem
            key={t.id}
            todo={t}
            deleteTodo={deleteTodo}
            setTodo={setTodo}
          />
        ))}
      </ListGroup>
    </div>
  );
}
