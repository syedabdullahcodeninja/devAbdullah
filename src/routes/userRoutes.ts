import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { UserService } from '../services/userService';
import { TodoService } from '../services/todoService';

const router = Router();

// Initialize services
const userService = new UserService();
const todoService = new TodoService();

// Initialize the controller with the services
const userController = new UserController(userService, todoService);

// User Routes
router.get('/users', userController.getAllUsers.bind(userController));
router.get('/users/:id', userController.getUserById.bind(userController));
router.post('/users', userController.createUser.bind(userController));
router.put('/users/:id', userController.updateUser.bind(userController));
router.patch('/users/:id', userController.patchUser.bind(userController));
router.delete('/users/:id', userController.deleteUser.bind(userController));

// Todo Routes for a User
router.get('/users/:id/todos', userController.getAllTodosByUserId.bind(userController));
router.get('/users/:id/todos/:todoId', userController.getTodoByUserId.bind(userController));

export default router;
