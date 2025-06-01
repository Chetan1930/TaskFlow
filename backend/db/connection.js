const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGO_URI;  
const connection = async () => {
    try {
        await mongoose.connect(MONGODB_URI);  
        console.log("Database connected successfully");
    } catch(err) {
        console.error("Database hi connect nhi ho rha :", err);  
    }
}

module.exports = connection;