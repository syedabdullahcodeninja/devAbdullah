"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = require("../controllers/todoController");
const todoService_1 = require("../services/todoService");
const router = (0, express_1.Router)();
// Initialize the service
const todoService = new todoService_1.TodoService();
// Initialize the controller with the service
const todoController = new todoController_1.TodoController(todoService);
// Todo Routes
router.get("/todos", todoController.getAllTodos.bind(todoController));
router.get("/todos/:id", todoController.getTodoById.bind(todoController));
router.post("/todos", todoController.createTodo.bind(todoController));
router.put("/todos/:id", todoController.updateTodo.bind(todoController));
router.patch("/todos/:id", todoController.patchTodo.bind(todoController));
router.delete("/todos/:id", todoController.deleteTodo.bind(todoController));
exports.default = router;
