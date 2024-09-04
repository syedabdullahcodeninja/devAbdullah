import { Request, Response } from "express";
import { TodoService } from "../services/todoService";

const todoService = new TodoService();

export class TodoController {
  static getAllTodos(req: Request, res: Response): void {
    const todos = todoService.getAllTodos();
    res.json(todos);
  }

  static getTodoById(req: Request, res: Response): void {
    const todo = todoService.getTodoById(req.params.id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).send("Todo not found");
    }
  }

  static createTodo(req: Request, res: Response): void {
    const newTodo = todoService.createTodo(req.body);
    res.status(201).json(newTodo);
  }

  static updateTodo(req: Request, res: Response): void {
    const updatedTodo = todoService.updateTodo(req.params.id, req.body);
    if (updatedTodo) {
      res.json(updatedTodo);
    } else {
      res.status(404).send("Todo not found");
    }
  }

  static patchTodo(req: Request, res: Response): void {
    const updatedTodo = todoService.updateTodo(req.params.id, req.body);
    if (updatedTodo) {
      res.json(updatedTodo);
    } else {
      res.status(404).send("Todo not found");
    }
  }

  static deleteTodo(req: Request, res: Response): void {
    const success = todoService.deleteTodo(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).send("Todo not found");
    }
  }
}
