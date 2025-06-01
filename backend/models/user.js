const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true  // Removes whitespace from both ends
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,  // Converts email to lowercase
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']  // Email validation
    },
    password: {
        type: String,
        required: true,
        minlength: 6  // Minimum password length
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);