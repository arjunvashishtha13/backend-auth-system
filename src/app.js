const express = require("express");
const app = express();
require("./config/db");

app.use(express.json());

// Debug middleware to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

const authRoutes = require("./routes/authRoutes");
console.log("Auth routes loaded:", authRoutes);

app.use("/api/auth", authRoutes);
console.log("Auth routes mounted at /api/auth");

// Test route to verify routing works
app.get("/api/test", (req, res) => {
  res.json({ message: "Test route works!" });
});

app.get("/", (req, res) => {
  res.send("Backend running");
});

module.exports = app;
