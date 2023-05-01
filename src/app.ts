import bodyParser from "body-parser";
import express, { Response } from "express";
import { Adapters } from "./init.adapter";
import { createUserRouter } from "./routes";
import { ToDoService } from "./services/todo";
import { UserService } from "./services/userService/user.service";
import { createToDoRouter } from "./routes/todo.router";

export function initApp(adapters: Adapters) {
  const app = express();
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  const userService = new UserService(adapters.userDao);
  const toDoService = new ToDoService(adapters.toDoDao, userService);

  app.get("/", (_req, res: Response) => {
    res.json({ hello: "world" });
  });

  app.use("/user", createUserRouter(userService));
  app.use("/todo", createToDoRouter(toDoService));

  return app;
}
