const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json()); // Parse JSON request body

// Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
