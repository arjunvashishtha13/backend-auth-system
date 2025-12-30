const express = require("express");
const app = express();
require("./config/db");

app.use(express.json());
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Backend running");
});

module.exports = app;
