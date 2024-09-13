"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQueryParams = validateQueryParams;
function validateQueryParams(req, res, next) {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
        res.status(400).json({ error: 'Invalid ID parameter.' });
        return;
    }
    next();
}
