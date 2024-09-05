import { Router } from "express";
import { TodoController } from "../controllers/todoController";
import { TodoService } from "../services/todoService";

const router = Router();

// Initialize the service
const todoService = new TodoService();

// Initialize the controller with the service
const todoController = new TodoController(todoService);

// Todo Routes
router.get("/todos", todoController.getAllTodos.bind(todoController));
router.get("/todos/:id", todoController.getTodoById.bind(todoController));
router.post("/todos", todoController.createTodo.bind(todoController));
router.put("/todos/:id", todoController.updateTodo.bind(todoController));
router.patch("/todos/:id", todoController.patchTodo.bind(todoController));
router.delete("/todos/:id", todoController.deleteTodo.bind(todoController));

export default router;
