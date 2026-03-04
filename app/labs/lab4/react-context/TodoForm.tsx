import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { Todo } from "./todosContext";

export default function TodoForm({
  todo,
  setTodo,
  addTodo,
  updateTodo,
}: {
  todo: Todo;
  setTodo: (todo: Todo) => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
}) {
  return (
    <ListGroupItem>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div>
          <Button
            variant="success"
            className="me-2"
            onClick={() => addTodo(todo)}
            id="wd-add-todo-click"
          >
            Add
          </Button>
          <Button
            variant="warning"
            className="me-2"
            onClick={() => updateTodo(todo)}
            id="wd-update-todo-click"
          >
            Update
          </Button>
        </div>
        <div className="flex-grow-1 ms-2">
          <FormControl
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </div>
      </div>
    </ListGroupItem>
  );
}
