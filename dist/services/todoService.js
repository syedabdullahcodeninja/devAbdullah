"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
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
        createdDate: new Date("2024-09-04"),
        updatedDate: new Date("2024-09-04"),
      },
      {
        id: 2,
        title: "Walk the dog",
        userId: 1,
        isCompleted: true,
        createdDate: new Date("2024-09-04"),
        updatedDate: new Date("2024-09-04"),
      },
    ];
  }
  getAllTodos() {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((resolve) => {
        setTimeout(() => resolve(this.todos), 100);
      });
    });
  }
  getAllTodosByUserId(userId) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        return new Promise((resolve) => {
          setTimeout(() => {
            const userTodos = this.todos.filter(
              (todo) => todo.userId === userId
            );
            resolve(userTodos);
          }, 100);
        });
      } catch (error) {
        console.error("Error fetching todos by user ID:", error);
        throw new Error("Failed to fetch todos by user ID");
      }
    });
  }
  getTodoByUserId(userId, todoId) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        return new Promise((resolve) => {
          setTimeout(() => {
            const todo = this.todos.find(
              (todo) => todo.id === todoId && todo.userId === userId
            );
            resolve(todo);
          }, 100);
        });
      } catch (error) {
        console.error("Error fetching todo by user ID:", error);
        throw new Error("Failed to fetch todo by user ID");
      }
    });
  }
  getTodoById(id) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        return new Promise((resolve) => {
          setTimeout(() => {
            const todo = this.todos.find((todo) => todo.id === id);
            resolve(todo);
          }, 100);
        });
      } catch (error) {
        console.error("Error fetching todo by ID:", error);
        throw new Error("Failed to fetch todo by ID");
      }
    });
  }
  createTodo(todo) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((resolve) => {
        setTimeout(() => {
          const newTodo = Object.assign(Object.assign({}, todo), {
            id: this.todos.length + 1,
            createdDate: new Date(),
            updatedDate: new Date(),
          });
          this.todos.push(newTodo);
          resolve(newTodo);
        }, 100);
      });
    });
  }
  updateTodo(id, updatedTodo) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((resolve) => {
        setTimeout(() => {
          const todoIndex = this.todos.findIndex((todo) => todo.id === id);
          if (todoIndex > -1) {
            const existingTodo = this.todos[todoIndex];
            this.todos[todoIndex] = Object.assign(
              Object.assign(Object.assign({}, existingTodo), updatedTodo),
              { updatedDate: new Date() }
            );
            resolve(this.todos[todoIndex]);
          } else {
            resolve(undefined);
          }
        }, 100);
      });
    });
  }
  deleteTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((resolve) => {
        setTimeout(() => {
          const todoIndex = this.todos.findIndex((todo) => todo.id === id);
          if (todoIndex > -1) {
            this.todos.splice(todoIndex, 1);
            resolve(true);
          } else {
            resolve(false);
          }
        }, 100);
      });
    });
  }
}
exports.TodoService = TodoService;
