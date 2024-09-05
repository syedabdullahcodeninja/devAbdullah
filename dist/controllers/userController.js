"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService_1 = require("../services/userService");
const userService = new userService_1.UserService();
class UserController {
    static getAllUsers(req, res) {
        const users = userService.getAllUsers();
        res.json(users);
    }
    static getUserById(req, res) {
        const user = userService.getUserById(req.params.id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).send("User not found");
        }
    }
    static createUser(req, res) {
        const newUser = userService.createUser(req.body);
        res.status(201).json(newUser);
    }
    static updateUser(req, res) {
        const updatedUser = userService.updateUser(req.params.id, req.body);
        if (updatedUser) {
            res.json(updatedUser);
        }
        else {
            res.status(404).send("User not found");
        }
    }
    static patchUser(req, res) {
        const updatedUser = userService.updateUser(req.params.id, req.body);
        if (updatedUser) {
            res.json(updatedUser);
        }
        else {
            res.status(404).send("User not found");
        }
    }
    static deleteUser(req, res) {
        const success = userService.deleteUser(req.params.id);
        if (success) {
            res.status(204).send();
        }
        else {
            res.status(404).send("User not found");
        }
    }
    static getUserTodos(req, res) {
        // This would normally involve another service call
        res.json({ message: "Fetch all todos for user" });
    }
    static getUserTodoById(req, res) {
        // This would normally involve another service call
        res.json({ message: "Fetch a specific todo for user" });
    }
}
exports.UserController = UserController;
