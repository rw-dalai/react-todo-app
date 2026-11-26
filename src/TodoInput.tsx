import {useState} from "react";

type TodoInputProps = {
  onAdd: (text: string) => void
}

export function TodoInput({ onAdd }: TodoInputProps) {
  console.log("TODO INPUT CALLED");

  const [text, setText] = useState("");

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    onAdd(text);
    setText("");
  }

  return (
    <section>
      <h2>Todo Input</h2>

      <form onSubmit={handleSubmit}>

        {/* TEXT */}
        <label htmlFor="todo">Todo</label>
        <input id="todo" type="text" value={text} onChange={(e) => setText(e.target.value)}/>

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
