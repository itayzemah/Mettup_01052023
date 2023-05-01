import { ToDoDao } from ".";
import { ToDo } from "./todo.type";

export class ApiToDoDao implements ToDoDao {
  getAllByUser(userId: number): Promise<ToDo[]> {
    throw new Error("Method not implemented.");
  }
  getById(id: number): Promise<ToDo | null> {
    throw new Error("Method not implemented.");
  }
  create(todo: ToDo): Promise<ToDo> {
    throw new Error("Method not implemented.");
  }
  bind(todoId: number, userId: number): Promise<ToDo> {
    throw new Error("Method not implemented.");
  }
}
