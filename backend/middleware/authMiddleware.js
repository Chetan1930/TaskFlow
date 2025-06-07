const jwt = require("jsonwebtoken");
const User = require("../models/user"); // ✅ Only needed if your route uses user data
const JWT_SECRET = process.env.JWT_SECRET;

const requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // ✅ still attach decoded info
    next();
  } catch (err) {
    console.error("JWT error:", err.message);
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = requireAuth;
