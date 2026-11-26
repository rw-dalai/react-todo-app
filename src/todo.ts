export type Priority = "low" | "normal" | "high";

export type Todo = {
  id: number,
  text: string,
  priority: Priority
}
