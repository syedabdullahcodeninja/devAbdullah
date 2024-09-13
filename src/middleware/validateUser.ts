import { Request, Response, NextFunction } from "express";

export async function validateCreateUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { name, email, password } = req.body;

    if (!name || typeof name !== "string") {
      res.status(400).json({ error: "Name is required and must be a string." });
      return;
    }
    if (name.length < 3) {
      res
        .status(400)
        .json({ error: "Name must be at least 3 characters long." });
      return;
    }

    if (!email || typeof email !== "string") {
      res
        .status(400)
        .json({ error: "Email is required and must be a string." });
      return;
    }
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: "Invalid email format." });
      return;
    }

    if (!password || typeof password !== "string") {
      res
        .status(400)
        .json({ error: "Password is required and must be a string." });
      return;
    }
    if (password.length < 6) {
      res
        .status(400)
        .json({ error: "Password must be at least 6 characters long." });
      return;
    }

    next();
  } catch (error) {
    console.error("Validation error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function validateUpdateUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { name, email } = req.body;

    if (!name || typeof name !== "string") {
      res.status(400).json({ error: "Name is required and must be a string." });
      return;
    }
    if (name.length < 3) {
      res
        .status(400)
        .json({ error: "Name must be at least 3 characters long." });
      return;
    }

    if (!email || typeof email !== "string") {
      res
        .status(400)
        .json({ error: "Email is required and must be a string." });
      return;
    }
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: "Invalid email format." });
      return;
    }

    next();
  } catch (error) {
    console.error("Validation error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function validatePatchUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { name, email, password } = req.body;

    if (name !== undefined) {
      if (typeof name !== "string") {
        res.status(400).json({ error: "Name must be a string." });
        return;
      }
      if (name.length < 3) {
        res
          .status(400)
          .json({ error: "Name must be at least 3 characters long." });
        return;
      }
    }

    if (email !== undefined) {
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!emailRegex.test(email)) {
        res.status(400).json({ error: "Invalid email format." });
        return;
      }
    }

    if (password !== undefined) {
      if (typeof password !== "string") {
        res.status(400).json({ error: "Password must be a string." });
        return;
      }
      if (password.length < 6) {
        res
          .status(400)
          .json({ error: "Password must be at least 6 characters long." });
        return;
      }
    }

    next();
  } catch (error) {
    console.error("Validation error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
