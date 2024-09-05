import { Request, Response } from 'express';
import { TodoService } from '../services/todoService';

export class TodoController {
    private todoService: TodoService;

    constructor(todoService: TodoService) {
        this.todoService = todoService;
    }

    async getAllTodos(req: Request, res: Response): Promise<void> {
        try {
            const todos = await this.todoService.getAllTodos();
            res.json(todos);
        } catch (error) {
            res.status(500).send('Server error');
        }
    }

    async getTodoById(req: Request, res: Response): Promise<void> {
        try {
            const todoId = parseInt(req.params.id); 
            const todo = await this.todoService.getTodoById(todoId);
            if (todo) {
                res.json(todo);
            } else {
                res.status(404).send('Todo not found');
            }
        } catch (error) {
            res.status(500).send('Server error');
        }
    }

    async createTodo(req: Request, res: Response): Promise<void> {
        try {
            const newTodo = await this.todoService.createTodo(req.body);
            res.status(201).json(newTodo);
        } catch (error) {
            res.status(500).send('Server error');
        }
    }

    async updateTodo(req: Request, res: Response): Promise<void> {
        try {
            const todoId = parseInt(req.params.id); 
            const updatedTodo = await this.todoService.updateTodo(todoId, req.body);
            if (updatedTodo) {
                res.json(updatedTodo);
            } else {
                res.status(404).send('Todo not found');
            }
        } catch (error) {
            res.status(500).send('Server error');
        }
    }

    async patchTodo(req: Request, res: Response): Promise<void> {
        try {
            const todoId = parseInt(req.params.id); 
            const updatedTodo = await this.todoService.updateTodo(todoId, req.body);
            if (updatedTodo) {
                res.json(updatedTodo);
            } else {
                res.status(404).send('Todo not found');
            }
        } catch (error) {
            res.status(500).send('Server error');
        }
    }

    async deleteTodo(req: Request, res: Response): Promise<void> {
        try {
            const todoId = parseInt(req.params.id); 
            const success = await this.todoService.deleteTodo(todoId);
            if (success) {
                res.status(200).send({ message: 'Todo deleted' });
            } else {
                res.status(404).send('Todo not found');
            }
        } catch (error) {
            res.status(500).send('Server error');
        }
    }
}
