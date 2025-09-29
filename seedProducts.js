const mongoose = require('mongoose');
const products = require('./products');
const Product = require('./models/Product');

// Database connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/sure_findings_ecommerce', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const seedProducts = async () => {
    try {
        // Connect to database
        await connectDB();
        console.log('Connected to database');

        // Clear existing products
        await Product.deleteMany({});
        console.log('Cleared existing products');

        // Insert all products
        const insertedProducts = await Product.insertMany(products);
        console.log(`Created ${insertedProducts.length} products`);

        console.log('Product seeding completed');

        // Close database connection
        await mongoose.connection.close();
        console.log('Database connection closed');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding products:', error);
        process.exit(1);
    }
};

seedProducts();