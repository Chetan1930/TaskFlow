const { config } = require('dotenv');
const express = require('express');
const connection = require('./db/connection');
const app = express();
const routes = require('./routes/index');
const cors=require('cors');

// Load environment variables
config();
app.use(express.urlencoded({extended:true}));
// Database connection
connection().catch(err => {
  console.error('Failed to connect to database:', err);
  process.exit(1);
});

app.use(cors());
// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing form data

// Routes
app.use('/api',routes);

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