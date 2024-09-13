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
exports.validateCreateTodo = validateCreateTodo;
exports.validateUpdateTodo = validateUpdateTodo;
exports.validatePatchTodo = validatePatchTodo;
function validateCreateTodo(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, userId, isCompleted } = req.body;
            if (!title || typeof title !== 'string' || title.length < 3) {
                res.status(400).json({ error: 'Title must be a string with at least 3 characters.' });
                return;
            }
            if (!userId || typeof userId !== 'number') {
                res.status(400).json({ error: 'Invalid user ID.' });
                return;
            }
            if (typeof isCompleted !== 'boolean') {
                res.status(400).json({ error: 'isCompleted must be a boolean value.' });
                return;
            }
            next();
        }
        catch (error) {
            console.error('Validation error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
function validateUpdateTodo(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, isCompleted } = req.body;
            if (title && (typeof title !== 'string' || title.length < 3)) {
                res.status(400).json({ error: 'Title must be a string with at least 3 characters.' });
                return;
            }
            if (isCompleted !== undefined && typeof isCompleted !== 'boolean') {
                res.status(400).json({ error: 'isCompleted must be a boolean value.' });
                return;
            }
            next();
        }
        catch (error) {
            console.error('Validation error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
function validatePatchTodo(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, isCompleted } = req.body;
            if (title !== undefined && (typeof title !== 'string' || title.length < 3)) {
                res.status(400).json({ error: 'Title must be a string with at least 3 characters.' });
                return;
            }
            if (isCompleted !== undefined && typeof isCompleted !== 'boolean') {
                res.status(400).json({ error: 'isCompleted must be a boolean value.' });
                return;
            }
            next();
        }
        catch (error) {
            console.error('Validation error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
