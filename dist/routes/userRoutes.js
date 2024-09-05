"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userService_1 = require("../services/userService");
const todoService_1 = require("../services/todoService");
const router = (0, express_1.Router)();
// Initialize services
const userService = new userService_1.UserService();
const todoService = new todoService_1.TodoService();
// Initialize the controller with the services
const userController = new userController_1.UserController(
  userService,
  todoService
);
// User Routes
router.get("/users", userController.getAllUsers.bind(userController));
router.get("/users/:id", userController.getUserById.bind(userController));
router.post("/users", userController.createUser.bind(userController));
router.put("/users/:id", userController.updateUser.bind(userController));
router.patch("/users/:id", userController.patchUser.bind(userController));
router.delete("/users/:id", userController.deleteUser.bind(userController));
// Todo Routes for a User
router.get(
  "/users/:id/todos",
  userController.getAllTodosByUserId.bind(userController)
);
router.get(
  "/users/:id/todos/:todoId",
  userController.getTodoByUserId.bind(userController)
);
exports.default = router;
