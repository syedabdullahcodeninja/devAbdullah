import { Router } from "express";
import { UserController } from "../controllers/userController";
import { UserService } from "../services/userService";
import { TodoService } from "../services/todoService";
import { 
    validateCreateUser, 
    validateUpdateUser, 
    validatePatchUser 
} from '../middleware/validateUser';
import { 

    validateQueryParams
    
} from '../middleware/validateQueryParams';


const router = Router();
const userService = new UserService();
const todoService = new TodoService();

const userController = new UserController(userService, todoService);

router.get("/users", userController.getAllUsers.bind(userController));

router.get("/users/:id", validateQueryParams, userController.getUserById.bind(userController));

router.post('/users', validateCreateUser, userController.createUser.bind(userController));

router.post('/users/:id', validateQueryParams, validateUpdateUser, userController.updateUser.bind(userController));

router.patch('/users/:id', validateQueryParams, validatePatchUser, userController.patchUser.bind(userController));

router.delete("/users/:id", validateQueryParams, userController.deleteUser.bind(userController));

router.get("/users/:id/todos", validateQueryParams, userController.getAllTodosByUserId.bind(userController));

router.get("/users/:id/todos/:todoId", validateQueryParams, userController.getTodoByUserId.bind(userController));

export default router;
