import {type TodoFormData, todoSchema} from "./todo.ts";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

// PROPS: the input of a component, like the parameters of a function (always an object!)
type TodoInputProps = {
  onAdd: (todo: TodoFormData) => void // onAdd is typed as a function!
}

export function TodoInput({ onAdd }: TodoInputProps) {
  console.log("TODO INPUT CALLED");

  // FORM: React Hook Form holds the values of the form, we need no useState
  const { register, formState, reset, handleSubmit } = useForm<TodoFormData>({
    // FORM: Zod says WHAT is valid, mode says WHEN we validate
    resolver: zodResolver(todoSchema),
    // mode: "onBlur",
    mode: "onTouched",
    defaultValues: { text: "", priority: "normal" }
  })

  // FORM: only called if the data is valid
  function onSubmit(todo: TodoFormData) {
    onAdd(todo);
    reset();
  }

  return (
    <section>
      <h2>Todo Input</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* --- TEXT --- */}
        <label htmlFor="todo">Todo</label>
        {/* FORM: register connects the input element to the React Hook Form */}
        <input id="todo" type="text" {...register("text")}/>
        {formState.errors.text && <p>{formState.errors.text.message}</p>}

        {/* --- PRIO --- */}
        <label htmlFor="priority">Priority</label>
        <select id="priority" {...register("priority")}>
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
