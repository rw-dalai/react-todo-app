import {TodoList} from "./TodoList.tsx";
import {TodoInput} from "./TodoInput.tsx";
import type {Todo} from "./todo.ts";

const todos: Todo[] = [
  { id: 1, text: "Learn Java" , priority: "normal" },
  { id: 2, text: "Learn React" , priority: "high" },
  { id: 3, text: "Learn Kotlin" , priority: "low" },
]

export function App() {
  console.log("APP CALLED");

  return (
    <>
      <h1>Todo App</h1>
      <main>
        <TodoList todos={todos}/>
        <TodoInput/>
      </main>
    </>
  )

}
