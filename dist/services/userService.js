"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor() {
        this.users = [
            {
                id: 1,
                name: "John Doe",
                email: "john.doe@example.com",
                password: "password123",
                isDisabled: false,
                createdDate: new Date("2023-01-01"),
                updatedDate: new Date("2023-01-01"),
            },
            {
                id: 2,
                name: "Jane Smith",
                email: "jane.smith@example.com",
                password: "password456",
                isDisabled: false,
                createdDate: new Date("2023-02-01"),
                updatedDate: new Date("2023-02-01"),
            },
        ];
    }
    getAllUsers() {
        return this.users;
    }
    getUserById(id) {
        return this.users.find((user) => user.id === id);
    }
    createUser(user) {
        const newUser = Object.assign(Object.assign({}, user), { id: this.users.length + 1, createdDate: new Date(), updatedDate: new Date() });
        this.users.push(newUser);
        return newUser;
    }
    updateUser(id, updatedUser) {
        const userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex > -1) {
            const existingUser = this.users[userIndex];
            this.users[userIndex] = Object.assign(Object.assign(Object.assign({}, existingUser), updatedUser), { updatedDate: new Date() });
            return this.users[userIndex];
        }
        return undefined;
    }
    deleteUser(id) {
        const userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex > -1) {
            this.users.splice(userIndex, 1);
            return true;
        }
        return false;
    }
}
exports.UserService = UserService;
