import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
