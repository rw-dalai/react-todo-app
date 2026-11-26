import {z} from "zod";

export type Priority = "low" | "normal" | "high";

export type Todo = {
  id: number,
  text: string,
  priority: Priority
}

// FORM: Schema says what is valid
export const todoSchema = z.object({
  text: z.string().trim().min(3, "At least 3 characters are required"),
  priority: z.enum(["low", "normal", "high"]),
});

// FORM: the type comes from the schema
export type TodoFormData = z.infer<typeof todoSchema>;
