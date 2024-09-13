import { Request, Response, NextFunction } from 'express';

export function validateQueryParams(req: Request, res: Response, next: NextFunction): void {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
         res.status(400).json({ error: 'Invalid ID parameter.' });
         return;
    }

    next();
}
