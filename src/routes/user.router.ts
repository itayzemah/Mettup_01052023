import express, { Request, Response } from "express";
import { User } from "../dao/user";
import { UserService } from "../services/userService/user.service";

export function createUserRouter(userService: UserService) {
  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {
      return res.json(await userService.getAll());
    } catch {
      return res.status(404).send("User not found");
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      const user = req.body satisfies User;
      const newUser = await userService.addUser(user);
      return res.status(201).json(newUser);
    } catch {
      return res.sendStatus(400);
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await userService.getUserById(userId);
      return res.json(user);
    } catch {
      return res.status(404).send("User not found");
    }
  });

  return router;
}
