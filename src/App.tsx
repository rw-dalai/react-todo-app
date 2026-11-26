import {TodoList} from "./TodoList.tsx";
import {TodoInput} from "./TodoInput.tsx";
import type {Todo} from "./todo.ts";
import {useState} from "react";

const initialTodos: Todo[] = [
  // { id: 1, text: "Learn Java" , priority: "normal" },
  // { id: 2, text: "Learn React" , priority: "high" },
  // { id: 3, text: "Learn Kotlin" , priority: "low" },
]

export function App() {
  console.log("APP CALLED");

  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  function handleAdd() {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: "Learn React",
      priority: "normal"
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <h1>Todo App</h1>
      <main>
        <TodoList todos={todos}/>
        <TodoInput/>
      </main>

      <button onClick={handleAdd}>Add Todo</button>
    </>
  )

}
