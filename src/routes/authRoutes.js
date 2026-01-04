const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { createUser, findUserByEmail } = require("../models/userModel");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(name, email, hashedPassword);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Server error" });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Profile accessed",
    user: req.user
  });
});

module.exports = router;
