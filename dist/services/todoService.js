"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    constructor() {
        this.todos = [
            {
                id: 1,
                title: "Buy groceries",
                userId: 1,
                isCompleted: false,
                createdDate: new Date("2023-01-01"),
                updatedDate: new Date("2023-01-01"),
            },
            {
                id: 2,
                title: "Walk the dog",
                userId: 1,
                isCompleted: true,
                createdDate: new Date("2023-01-02"),
                updatedDate: new Date("2023-01-02"),
            },
        ];
    }
    getAllTodos() {
        return this.todos;
    }
    getTodoById(id) {
        return this.todos.find((todo) => todo.id === id);
    }
    createTodo(todo) {
        const newTodo = Object.assign(Object.assign({}, todo), { id: this.todos.length + 1, createdDate: new Date(), updatedDate: new Date() });
        this.todos.push(newTodo);
        return newTodo;
    }
    updateTodo(id, updatedTodo) {
        const todoIndex = this.todos.findIndex((todo) => todo.id === id);
        if (todoIndex > -1) {
            const existingTodo = this.todos[todoIndex];
            this.todos[todoIndex] = Object.assign(Object.assign(Object.assign({}, existingTodo), updatedTodo), { updatedDate: new Date() });
            return this.todos[todoIndex];
        }
        return undefined;
    }
    deleteTodo(id) {
        const todoIndex = this.todos.findIndex((todo) => todo.id === id);
        if (todoIndex > -1) {
            this.todos.splice(todoIndex, 1);
            return true;
        }
        return false;
    }
}
exports.TodoService = TodoService;
