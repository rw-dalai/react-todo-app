import type {Todo} from "./todo.ts";

type TodoProps = {
  todos: Todo[],
}

export function TodoList({ todos }: TodoProps) {
  console.log("TODO LIST CALLED", todos);

  if (todos.length === 0) {
    return (
      <section>
        <h2>Todo List</h2>
        <p>No Todos available</p>
      </section>
    )
  }

  return (
    <section>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.text} - {todo.priority}</li>)}
      </ul>
    </section>
  );
}
