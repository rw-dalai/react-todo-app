import {useState} from "react";

// PROPS: the input of a component, like the parameters of a function (always an object!)
type TodoInputProps = {
  onAdd: (text: string) => void // onAdd is typed as a function!
}

export function TodoInput({ onAdd }: TodoInputProps) {
  console.log("TODO INPUT CALLED");

  // STATE: the text of the input field.
  //  TodoInput owns it, because only TodoInput needs it.
  const [text, setText] = useState("");

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    // FORM: stops the browser from reloading the page
    event.preventDefault();
    // PROPS: events go up, we call the function of the parent
    onAdd(text);
    setText("");
  }

  return (
    <section>
      <h2>Todo Input</h2>

      <form onSubmit={handleSubmit}>

        {/* --- TEXT --- */}
        <label htmlFor="todo">Todo</label>
        {/* STATE: controlled input, the value comes from state, every change goes to state */}
        <input id="todo" type="text" value={text} onChange={(e) => setText(e.target.value)}/>

        {/* --- PRIO --- */}
        <label htmlFor="priority">Priority</label>
        <select id="priority">
          <option value="low">low</option>
          <option value="normal">normal</option>
          <option value="high">high</option>
        </select>

        {/* --- SUBMIT --- */}
        <button type="submit">Add Todo</button>

      </form>

    </section>
  );
}
