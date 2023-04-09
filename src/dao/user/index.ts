import { User } from "./user.type";

export interface UserDao {
  getAll(): Promise<User[]>;
  getById(id: number): Promise<User | null>;
  addUser(user: User): Promise<User>;
}

export * from "./user.type";
export { KnexUserDao } from "./user.dao";
