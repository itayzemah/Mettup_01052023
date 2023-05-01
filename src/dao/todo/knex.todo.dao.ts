import { ToDoDao } from ".";
import { KnexDao } from "../dao";
import { ToDo } from "./todo.type";

export class KnexToDoDao extends KnexDao implements ToDoDao {
  getAllByUser(userId: number): Promise<ToDo[]> {
    const db = this.getDbConnection();
    return db("TODO").select<ToDo[]>().where({ userId });
  }
  getById(id: number): Promise<ToDo | null> {
    const db = this.getDbConnection();
    return db("TODO").first<ToDo>().where({ id });
  }
  create(todo: ToDo): Promise<ToDo> {
    const db = this.getDbConnection();
    return db("TODO").insert(todo);
  }
  async bind(todoId: number, userId: number): Promise<ToDo> {
    const db = this.getDbConnection();
    const [updated] = await db("TODO")
      .update({ userId })
      .where({ id: todoId })
      .returning("*");
    return updated;
  }
}
