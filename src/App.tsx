import {TodoList} from "./TodoList.tsx";
import {TodoInput} from "./TodoInput.tsx";

export function App() {
  console.log("APP CALLED");

  return (
    <>
      <h1>Todo App</h1>
      <main>
        <TodoList/>
        <TodoInput/>
      </main>
    </>
  )

}
