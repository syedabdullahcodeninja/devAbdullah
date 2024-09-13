"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userService, todoService) {
        this.userService = userService;
        this.todoService = todoService;
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userService.getAllUsers();
                res.json(users);
            }
            catch (error) {
                res.status(500).send("Internal Server Error");
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.getUserById(parseInt(req.params.id));
                if (user) {
                    res.json(user);
                }
                else {
                    res.status(404).send("User not found");
                }
            }
            catch (error) {
                res.status(500).send("Internal Server Error");
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield this.userService.createUser(req.body);
                res.status(201).json(newUser);
            }
            catch (error) {
                res.status(500).send("Internal Server Error");
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield this.userService.updateUser(parseInt(req.params.id), req.body);
                if (updatedUser) {
                    res.json(updatedUser);
                }
                else {
                    res.status(404).send("User not found");
                }
            }
            catch (error) {
                res.status(500).send("Internal Server Error");
            }
        });
    }
    patchUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield this.userService.patchUser(parseInt(req.params.id), req.body);
                if (updatedUser) {
                    res.json(updatedUser);
                }
                else {
                    res.status(404).send("User not found");
                }
            }
            catch (error) {
                res.status(500).send("Internal Server Error");
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const success = yield this.userService.deleteUser(parseInt(req.params.id));
                if (success) {
                    res.status(200).json({ message: "User deleted" });
                }
                else {
                    res.status(404).send("User not found");
                }
            }
            catch (error) {
                res.status(500).send("Internal Server Error");
            }
        });
    }
    getAllTodosByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = parseInt(req.params.id);
                const todos = yield this.todoService.getAllTodosByUserId(userId);
                if (todos.length > 0) {
                    res.json(todos);
                }
                else {
                    res.status(404).send("Todos not found for the user");
                }
            }
            catch (error) {
                console.error("Error fetching user todos:", error);
                res.status(500).send("Internal Server Error");
            }
        });
    }
    getTodoByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = parseInt(req.params.id);
                const todoId = parseInt(req.params.todoId);
                const todo = yield this.todoService.getTodoByUserId(userId, todoId);
                if (todo) {
                    res.json(todo);
                }
                else {
                    res.status(404).send("Todo not found for the user");
                }
            }
            catch (error) {
                console.error("Error fetching user todo by ID:", error);
                res.status(500).send("Internal Server Error");
            }
        });
    }
}
exports.UserController = UserController;
