import { Request, Response, NextFunction } from "express";

export async function validateHeaders(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(400).json({ error: "Authorization header is missing." });
    return;
  }

  if (!authorization.startsWith("Bearer ")) {
    res.status(400).json({
      error: 'Invalid authorization format. Expected "Bearer [token]".',
    });
    return;
  }

  next();
}

// I am not using any authorization in the system until now, so this middleware will not be used.
