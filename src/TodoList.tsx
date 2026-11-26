import type {Todo} from "./todo.ts";

// PROPS: the input of a component, like the parameters of a function (always an object!)
type TodoProps = {
  todos: Todo[],
  // showEmpty: boolean
  // ..
}

export function TodoList({ todos }: TodoProps) {
  console.log("TODO LIST CALLED", todos);

  // RENDER: conditional rendering, an early return for the special case
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
        {/* RENDER: map turns every todo into one <li>, the key tells React which item is which */}
        {todos.map(todo => <li key={todo.id}>{todo.text} - {todo.priority}</li>)}
      </ul>
    </section>
  );
}
