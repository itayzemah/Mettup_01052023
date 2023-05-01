import { ToDoDao } from "../../dao/todo";
import { UserService } from "../userService";

export class ToDoService {
  constructor(private todoDao: ToDoDao, private userService: UserService) {}

  getAllByUser(userId: number) {
    const user = this.userService.getUserById(userId);
    if (!user) {
      throw new Error("User does not exist");
    }
    return this.todoDao.getAllByUser(userId);
  }
  getById(userId: number) {
    this.todoDao.getById(userId);
  }
}
