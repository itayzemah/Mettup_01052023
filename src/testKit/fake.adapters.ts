import { ToDoDao } from "../dao/todo";
import { ToDo } from "../dao/todo/todo.type";
import { User, UserDao } from "../dao/user";

export class FakeUserDao implements UserDao {
  constructor(public users: User[] = []) {}
  async getAll(): Promise<User[]> {
    return this.users;
  }
  async getById(id: number): Promise<User | null> {
    return this.users.find((u) => (u.id = id)) || null;
  }
  async addUser(user: User): Promise<User> {
    const newUser = user;
    newUser.id ??= Math.max(1, ...this.users.map((u) => u.id || 1));
    this.users.push(newUser);
    return newUser;
  }
}

export class FakeToDoDao implements ToDoDao {
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
