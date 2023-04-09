import { User, UserDao } from "../../dao/user";

export class UserService {
  constructor(private userDao: UserDao) {}

  async getUserById(id: number) {
    return this.userDao.getById(id);
  }

  async getAll() {
    return this.userDao.getAll();
  }

  async addUser(user: User) {
    return this.userDao.addUser(user);
  }
}
