export function App() {
  console.log("APP CALLED");

  return (
    <>
      <h1>Todo App</h1>
      <main>

        {/* TodoList component */}
        <section>
          <h2>Todo List</h2>
          <ul>
            <li>Learn Java</li>
            <li>Learn React</li>
            <li>Learn Kotlin</li>
          </ul>
        </section>

        {/* TodoInput component */}
        <section>
          <h2>Todo Input</h2>

          <form>

            {/* TEXT */}
            <label htmlFor="todo">Todo</label>
            <input id="todo" type="text"/>

            {/* PRIO */}
            <label htmlFor="priority">Priority</label>
            <select id="priority">
              <option value="low">low</option>
              <option value="normal">normal</option>
              <option value="high">high</option>
            </select>

            <button type="submit">Add Todo</button>

          </form>

        </section>

      </main>
    </>
  )

}
