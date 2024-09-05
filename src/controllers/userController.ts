import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { TodoService } from '../services/todoService';

export class UserController {
    private userService: UserService;
    private todoService: TodoService;

    constructor(userService: UserService, todoService: TodoService) {
        this.userService = userService;
        this.todoService = todoService;
    }

    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.userService.getUserById(parseInt(req.params.id));
            if (user) {
                res.json(user);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const newUser = await this.userService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const updatedUser = await this.userService.updateUser(parseInt(req.params.id), req.body);
            if (updatedUser) {
                res.json(updatedUser);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    async patchUser(req: Request, res: Response): Promise<void> {
        try {
            const updatedUser = await this.userService.patchUser(parseInt(req.params.id), req.body);
            if (updatedUser) {
                res.json(updatedUser);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const success = await this.userService.deleteUser(parseInt(req.params.id));
            if (success) {
              res.status(200).json({ message: 'User deleted' });
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    async getAllTodosByUserId(req: Request, res: Response): Promise<void> {
        try {
            const userId = parseInt(req.params.id);
            const todos = await this.todoService.getAllTodosByUserId(userId);
            if (todos.length > 0) {
                res.json(todos);
            } else {
                res.status(404).send('Todos not found for the user');
            }
        } catch (error) {
            console.error('Error fetching user todos:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    async getTodoByUserId(req: Request, res: Response): Promise<void> {
        try {
            const userId = parseInt(req.params.id);
            const todoId = parseInt(req.params.todoId);
            const todo = await this.todoService.getTodoByUserId(userId, todoId);
            if (todo) {
                res.json(todo);
            } else {
                res.status(404).send('Todo not found for the user');
            }
        } catch (error) {
            console.error('Error fetching user todo by ID:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}
