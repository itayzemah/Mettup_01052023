import { ToDo } from "./todo.type";

export interface ToDoDao {
  getAllByUser(userId: string): Promise<ToDo[]>;
  getById(id: number): Promise<ToDo | null>;
  create(todo: ToDo): Promise<ToDo>;
  bind(todoId: number, userId: number): Promise<ToDo>;
}
