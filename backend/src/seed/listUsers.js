const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');

connectDB();

const listUsers = async () => {
    try {
        const users = await User.find({});
        console.log('Users in database:');
        users.forEach(user => {
            console.log(`- Username: ${user.username}, Email: ${user.email}, Role: ${user.role}`);
        });
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

listUsers();