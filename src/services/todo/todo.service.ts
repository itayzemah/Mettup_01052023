import { ToDoDao } from "../../dao/todo";
import { UserService } from "../userService";

export class ToDoService {
  constructor(private todoDao: ToDoDao, private userService: UserService) {}
}
