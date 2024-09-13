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
exports.validateHeaders = validateHeaders;
function validateHeaders(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { authorization } = req.headers;
        if (!authorization) {
            res.status(400).json({ error: 'Authorization header is missing.' });
            return;
        }
        if (!authorization.startsWith('Bearer ')) {
            res.status(400).json({ error: 'Invalid authorization format. Expected "Bearer [token]".' });
            return;
        }
        next();
    });
}
// I am not using any authorization in the system until now, so this middleware will not be used.
