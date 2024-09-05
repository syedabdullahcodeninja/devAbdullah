"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todoService_1 = require("../services/todoService");
const todoService = new todoService_1.TodoService();
class TodoController {
    static getAllTodos(req, res) {
        const todos = todoService.getAllTodos();
        res.json(todos);
    }
    static getTodoById(req, res) {
        const todo = todoService.getTodoById(req.params.id);
        if (todo) {
            res.json(todo);
        }
        else {
            res.status(404).send("Todo not found");
        }
    }
    static createTodo(req, res) {
        const newTodo = todoService.createTodo(req.body);
        res.status(201).json(newTodo);
    }
    static updateTodo(req, res) {
        const updatedTodo = todoService.updateTodo(req.params.id, req.body);
        if (updatedTodo) {
            res.json(updatedTodo);
        }
        else {
            res.status(404).send("Todo not found");
        }
    }
    static patchTodo(req, res) {
        const updatedTodo = todoService.updateTodo(req.params.id, req.body);
        if (updatedTodo) {
            res.json(updatedTodo);
        }
        else {
            res.status(404).send("Todo not found");
        }
    }
    static deleteTodo(req, res) {
        const success = todoService.deleteTodo(req.params.id);
        if (success) {
            res.status(204).send();
        }
        else {
            res.status(404).send("Todo not found");
        }
    }
}
exports.TodoController = TodoController;
