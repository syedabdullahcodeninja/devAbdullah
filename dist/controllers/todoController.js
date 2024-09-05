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
exports.TodoController = void 0;
class TodoController {
  constructor(todoService) {
    this.todoService = todoService;
  }
  getAllTodos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const todos = yield this.todoService.getAllTodos();
        res.json(todos);
      } catch (error) {
        res.status(500).send("Server error");
      }
    });
  }
  getTodoById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const todoId = parseInt(req.params.id);
        const todo = yield this.todoService.getTodoById(todoId);
        if (todo) {
          res.json(todo);
        } else {
          res.status(404).send("Todo not found");
        }
      } catch (error) {
        res.status(500).send("Server error");
      }
    });
  }
  createTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const newTodo = yield this.todoService.createTodo(req.body);
        res.status(201).json(newTodo);
      } catch (error) {
        res.status(500).send("Server error");
      }
    });
  }
  updateTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const todoId = parseInt(req.params.id);
        const updatedTodo = yield this.todoService.updateTodo(todoId, req.body);
        if (updatedTodo) {
          res.json(updatedTodo);
        } else {
          res.status(404).send("Todo not found");
        }
      } catch (error) {
        res.status(500).send("Server error");
      }
    });
  }
  patchTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const todoId = parseInt(req.params.id);
        const updatedTodo = yield this.todoService.updateTodo(todoId, req.body);
        if (updatedTodo) {
          res.json(updatedTodo);
        } else {
          res.status(404).send("Todo not found");
        }
      } catch (error) {
        res.status(500).send("Server error");
      }
    });
  }
  deleteTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const todoId = parseInt(req.params.id);
        const success = yield this.todoService.deleteTodo(todoId);
        if (success) {
          res.status(200).send({ message: "Todo deleted" });
        } else {
          res.status(404).send("Todo not found");
        }
      } catch (error) {
        res.status(500).send("Server error");
      }
    });
  }
}
exports.TodoController = TodoController;
