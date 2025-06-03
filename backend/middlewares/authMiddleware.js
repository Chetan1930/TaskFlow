const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Expecting: Bearer <token>
  if (!token) return res.status(401).json({ message: "Access denied: No token provided" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
module.exports = requireAuth;
