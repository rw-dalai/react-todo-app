export function TodoInput() {
  console.log("TODO INPUT CALLED");

  return (
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
  );
}
