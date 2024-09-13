import { Router } from "express";
import { TodoController } from "../controllers/todoController";
import { TodoService } from "../services/todoService";
import {
  validateCreateTodo,
  validateUpdateTodo,
  validatePatchTodo,
} from "../middleware/validateTodo";
import { validateQueryParams } from "../middleware/validateQueryParams";

const router = Router();

const todoService = new TodoService();
const todoController = new TodoController(todoService);

router.get("/todos", todoController.getAllTodos.bind(todoController));
router.get(
  "/todos/:id",
  validateQueryParams,
  todoController.getTodoById.bind(todoController)
);
router.post(
  "/todos",
  validateCreateTodo,
  todoController.createTodo.bind(todoController)
);
router.put(
  "/todos/:id",
  validateQueryParams,
  validateUpdateTodo,
  todoController.updateTodo.bind(todoController)
);
router.patch(
  "/todos/:id",
  validateQueryParams,
  validatePatchTodo,
  todoController.patchTodo.bind(todoController)
);
router.delete(
  "/todos/:id",
  validateQueryParams,
  todoController.deleteTodo.bind(todoController)
);

export default router;
