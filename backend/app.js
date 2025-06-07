const { config } = require('dotenv');
config();
const express = require('express');
const authenticateUser  = require('./middleware/authMiddleware');
const connection = require('./db/connection');
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const app = express();
const routes = require('./routes/index');
const cors=require('cors');

// Load environment variables
app.use(express.urlencoded({extended:true}));
// Database connection
connection().catch(err => {
  console.error('Failed to connect to database:', err);
  process.exit(1);
});

app.use(cors({
  origin: "http://localhost:5173", // React app origin
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
// Middleware
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/auth',routes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server startup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});