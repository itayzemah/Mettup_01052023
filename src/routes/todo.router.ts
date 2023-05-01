import express, { Request, Response } from "express";
import { ToDo } from "../dao/todo/todo.type";
import { ToDoService } from "../services/todo";

export function createToDoRouter(toDoService: ToDoService) {
  const router = express.Router();

  router.get("/user/:userId", async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      return res.json(await toDoService.getAllByUser(+userId));
    } catch {
      return res.sendStatus(404);
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      const todo = req.body satisfies ToDo;
      return res.status(201).json();
    } catch {
      return res.sendStatus(400);
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const toDoId = parseInt(req.params.id);
      const toDo = await toDoService.getById(toDoId);
      return res.json(toDo);
    } catch {
      return res.status(404).send("User not found");
    }
  });

  return router;
}
