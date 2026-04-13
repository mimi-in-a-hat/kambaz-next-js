"use client";

import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TodoForm from "../react-context/TodoForm";
import TodoItem from "../react-context/TodoItem";
import { useTodoStore, Todo } from "./useTodoStore";

export default function ZustandTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodoStore();
  const [todo, setTodo] = useState<Todo>({ id: "-1", title: "" });

  return (
    <div className="w-25" id="wd-zustand-todo-list">
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
