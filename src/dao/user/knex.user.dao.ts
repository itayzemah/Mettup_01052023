import { User, UserDao } from ".";
import { KnexDao } from "../dao";

export class KnexUserDao extends KnexDao implements UserDao {
  async getAll(): Promise<User[]> {
    const db = this.getDbConnection();
    return db("USER").select<User[]>();
  }
  async getById(id: number): Promise<User> {
    const db = this.getDbConnection();
    return db("USER").first<User>().where({ id });
  }
  async addUser(user: User): Promise<User> {
    const db = this.getDbConnection();
    return db("USER")
      .insert(user)
      .returning<User>("id,firstName,lastName,dateOfBirth");
  }
}
