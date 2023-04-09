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
