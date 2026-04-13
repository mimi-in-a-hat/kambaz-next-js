import { Button, ListGroupItem } from "react-bootstrap";
import { Todo } from "./todosContext";

export default function TodoItem({
  todo,
  deleteTodo,
  setTodo,
}: {
  todo: Todo;
  deleteTodo: (id: string) => void;
  setTodo: (todo: Todo) => void;
}) {
  return (
    <ListGroupItem key={todo.id} className="p-0">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex">
          <Button
            variant="danger"
            className="me-2"
            onClick={() => deleteTodo(todo.id)}
            id="wd-delete-todo-click"
          >
            Delete
          </Button>
          <Button
            variant="primary"
            className="me-2"
            onClick={() => setTodo(todo)}
            id="wd-set-todo-click"
          >
            Edit
          </Button>
        </div>
        <span className="ms-2">{todo.title}</span>
      </div>
    </ListGroupItem>
  );
}
