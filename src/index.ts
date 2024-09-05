import express from "express";
import userRoutes from "./routes/userRoutes";
import todoRoutes from "./routes/todoRoutes";

const app = express();

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", todoRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
