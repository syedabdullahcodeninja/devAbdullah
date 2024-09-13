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
exports.UserService = void 0;
class UserService {
    constructor() {
        this.users = [
            {
                id: 1,
                name: "Syed Abdullah",
                email: "syed.abdullah@example.com",
                password: "password123",
                isDisabled: false,
                createdDate: new Date("2024-09-04"),
                updatedDate: new Date("2024-09-04"),
            },
            {
                id: 2,
                name: "Rana Waqas",
                email: "rana.waqas@example.com",
                password: "password456",
                isDisabled: false,
                createdDate: new Date("2024-09-04"),
                updatedDate: new Date("2024-09-04"),
            },
        ];
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                setTimeout(() => resolve(this.users), 100);
            });
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const user = this.users.find((user) => user.id === id);
                setTimeout(() => resolve(user), 100);
            });
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const newUser = Object.assign(Object.assign({}, user), { id: this.users.length + 1, createdDate: new Date(), updatedDate: new Date() });
                this.users.push(newUser);
                setTimeout(() => resolve(newUser), 100);
            });
        });
    }
    updateUser(id, updatedUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const userIndex = this.users.findIndex((user) => user.id === id);
                if (userIndex > -1) {
                    this.users[userIndex] = Object.assign(Object.assign(Object.assign({}, this.users[userIndex]), updatedUser), { updatedDate: new Date() });
                    setTimeout(() => resolve(this.users[userIndex]), 100);
                }
                else {
                    setTimeout(() => resolve(undefined), 100);
                }
            });
        });
    }
    patchUser(id, partialUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                console.log("Patching user with ID:", id);
                console.log("Partial user data:", partialUser);
                const userIndex = this.users.findIndex((user) => user.id === id);
                if (userIndex === -1) {
                    console.log("User not found with ID:", id);
                    setTimeout(() => resolve(undefined), 100);
                    return;
                }
                console.log("User before patch:", this.users[userIndex]);
                this.users[userIndex] = Object.assign(Object.assign(Object.assign({}, this.users[userIndex]), partialUser), { updatedDate: new Date() });
                console.log("User after patch:", this.users[userIndex]);
                setTimeout(() => resolve(this.users[userIndex]), 100);
            });
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const userIndex = this.users.findIndex((user) => user.id === id);
                if (userIndex > -1) {
                    this.users.splice(userIndex, 1);
                    setTimeout(() => resolve(true), 100);
                }
                else {
                    setTimeout(() => resolve(false), 100);
                }
            });
        });
    }
}
exports.UserService = UserService;
