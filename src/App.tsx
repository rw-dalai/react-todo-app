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

  // STATE: data that changes over time and that the UI depends on.
  //  App owns the todos, because both children need them.
  //  -> Its called "LIFTING STATE UP"
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  function handleAdd(text: string) {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: text,
      priority: "normal"
    };
    // STATE: never change, always replace (new array -> new reference).
    //   setTodos triggers RENDER PHASE, React calls App and all its children again.
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <h1>Todo App</h1>
      <main>

        {/* PROPS: data goes down */}
        <TodoList todos={todos}/>

        {/* PROPS: events go up (callback) */}
        <TodoInput onAdd={handleAdd}/>
      </main>
    </>
  )

}
