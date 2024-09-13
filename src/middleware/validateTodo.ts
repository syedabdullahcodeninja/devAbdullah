import { Request, Response, NextFunction } from 'express';

export async function validateCreateTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { title, userId, isCompleted } = req.body;

        if (!title || typeof title !== 'string' || title.length < 3) {
             res.status(400).json({ error: 'Title must be a string with at least 3 characters.' });
             return;

        }

        if (typeof userId !== 'number' || isNaN(userId)) {
             res.status(400).json({ error: 'Invalid user ID. It must be a number.' });
             return;

        }

        if (typeof isCompleted !== 'boolean') {
             res.status(400).json({ error: 'isCompleted must be a boolean value.' });
             return;

        }

        next();
    } catch (error) {
        console.error('Validation error:', error);
         res.status(500).json({ error: 'Internal Server Error' });
         return;

    }
}

export async function validateUpdateTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
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
    } catch (error) {
        console.error('Validation error:', error);
         res.status(500).json({ error: 'Internal Server Error' });
         return;

    }
}

export async function validatePatchTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
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
    } catch (error) {
        console.error('Validation error:', error);
         res.status(500).json({ error: 'Internal Server Error' });
         return;
    }
}
