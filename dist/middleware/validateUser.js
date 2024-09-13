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
exports.validateCreateUser = validateCreateUser;
exports.validateUpdateUser = validateUpdateUser;
exports.validatePatchUser = validatePatchUser;
function validateCreateUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, password } = req.body;
            //  checking email uniqueness
            // const isEmailUnique = await checkEmailUniqueness(email);
            // if (!isEmailUnique) {
            //     return res.status(400).json({ error: 'Email already in use.' });
            // }
            console.log('Name:', name); // Log the name to see its value
            if (!name) {
                res.status(400).json({ error: 'Name is missing.' });
                return;
            }
            if (typeof name !== 'string' || name.length < 3) {
                res.status(400).json({ error: 'Name must be a string with at least 3 characters.' });
                return;
            }
            if (!email) {
                res.status(400).json({ error: 'Email is missing.' });
                return;
            }
            if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
                res.status(400).json({ error: 'Invalid email format.' });
                return;
            }
            if (!password) {
                res.status(400).json({ error: 'Password is missing.' });
                return;
            }
            if (password.length < 6) {
                res.status(400).json({ error: 'Password must be at least 6 characters long.' });
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
function validateUpdateUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email } = req.body;
            if (!name) {
                res.status(400).json({ error: 'Name is missing.' });
                return;
            }
            if (typeof name !== 'string' || name.length < 3) {
                res.status(400).json({ error: 'Name must be a string with at least 3 characters.' });
                return;
            }
            if (!email) {
                res.status(400).json({ error: 'Email is missing.' });
                return;
            }
            if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
                res.status(400).json({ error: 'Invalid email format.' });
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
function validatePatchUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, password } = req.body;
            if (typeof name !== 'string' || name.length < 3) {
                res.status(400).json({ error: 'Name must be a string with at least 3 characters.' });
                return;
            }
            if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
                res.status(400).json({ error: 'Invalid email format.' });
                return;
            }
            if (password.length < 6) {
                res.status(400).json({ error: 'Password must be at least 6 characters long.' });
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
