import express from "express";
import userRoutes from "./routes/userRoutes";
import todoRoutes from "./routes/todoRoutes";
import { PrismaClient } from "@prisma/client"; 

const app = express();
const prisma = new PrismaClient(); 

app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", todoRoutes);

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await prisma.$connect(); 
    console.log("Connected to the database");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to connect to the database:", err);
    process.exit(1); 
  }
};

startServer();
