import { Request, Response } from "express";
import { UserService } from "../services/userService";

const userService = new UserService();

export class UserController {
  static getAllUsers(req: Request, res: Response): void {
    const users = userService.getAllUsers();
    res.json(users);
  }

  static getUserById(req: Request, res: Response): void {
    const user = userService.getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  }

  static createUser(req: Request, res: Response): void {
    const newUser = userService.createUser(req.body);
    res.status(201).json(newUser);
  }

  static updateUser(req: Request, res: Response): void {
    const updatedUser = userService.updateUser(req.params.id, req.body);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send("User not found");
    }
  }

  static patchUser(req: Request, res: Response): void {
    const updatedUser = userService.updateUser(req.params.id, req.body);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send("User not found");
    }
  }

  static deleteUser(req: Request, res: Response): void {
    const success = userService.deleteUser(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).send("User not found");
    }
  }

  static getUserTodos(req: Request, res: Response): void {
    // This would normally involve another service call
    res.json({ message: "Fetch all todos for user" });
  }

  static getUserTodoById(req: Request, res: Response): void {
    // This would normally involve another service call
    res.json({ message: "Fetch a specific todo for user" });
  }
}
