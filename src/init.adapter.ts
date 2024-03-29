import { ToDoDao } from "./dao/todo";
import { ApiToDoDao } from "./dao/todo/api.todo.dao";
import { KnexToDoDao } from "./dao/todo/knex.todo.dao";
import { KnexUserDao, UserDao } from "./dao/user";

export function initAdapters(): Adapters {
  const userDao = new KnexUserDao();
  const toDoDao = new ApiToDoDao(); //new KnexToDoDao();
  return { userDao, toDoDao };
}
export type Adapters = {
  userDao: UserDao;
  toDoDao: ToDoDao;
};
