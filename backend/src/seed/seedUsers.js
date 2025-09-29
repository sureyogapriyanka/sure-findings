const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const connectDB = require('../config/db');

// Demo users data
const demoUsers = [
    {
        username: 'Bhetapudi.Manasa',
        email: 'bhetapudi.manasa@example.com',
        password: '231FA07036',
        role: 'user'
    },
    {
        username: 'Sure.Yoga Priyanka',
        email: 'sure.yoga.priyanka@example.com',
        password: '231FA07046',
        role: 'user'
    }
];

const seedUsers = async () => {
    try {
        // Connect to database
        await connectDB();

        // Hash passwords
        const usersWithHashedPasswords = await Promise.all(
            demoUsers.map(async (user) => {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(user.password, salt);
                return {
                    ...user,
                    password: hashedPassword
                };
            })
        );

        // Remove existing users
        await User.deleteMany({});
        console.log('Existing users removed');

        // Insert demo users
        const users = await User.insertMany(usersWithHashedPasswords);
        console.log('Demo users added:', users.length);

        process.exit(0);
    } catch (error) {
        console.error('Error seeding users:', error);
        process.exit(1);
    }
};

seedUsers();