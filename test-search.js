// Test file to debug search functionality
const fs = require('fs');

// Read the products file
const productsData = fs.readFileSync('./products.js', 'utf8');

// Extract the products array from the file
const productsMatch = productsData.match(/const products = \[([\s\S]*?)\];/);
if (!productsMatch) {
    console.log('Could not find products array');
    process.exit(1);
}

// For testing, let's manually create a small sample of products
const testProducts = [
    {
        id: '1001',
        name: 'iPhone 15 Pro',
        description: 'The iPhone 15 Pro features a titanium design with a 6.1-inch Super Retina XDR display.',
        price: 99999.99,
        category: 'electronics',
        brand: 'Apple'
    },
    {
        id: '1002',
        name: 'Sony WH-1000XM5',
        description: 'Industry-leading noise canceling wireless headphones.',
        price: 329.99,
        category: 'electronics',
        brand: 'Sony'
    },
    {
        id: '4001',
        name: 'Wilson Evolution Basketball',
        description: 'Top-rated indoor basketball with a soft feel and excellent grip.',
        price: 59.99,
        category: 'sports',
        brand: 'Wilson'
    }
];

// Search function (same as in products.js)
const searchProducts = (query) => {
    try {
        // Search in local products by name
        const searchResults = testProducts.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.brand.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );

        return searchResults;
    } catch (error) {
        console.error('Error searching products:', error);
        return [];
    }
};

// Test the search function
console.log('Testing search functionality...\n');

const testQueries = ['iPhone', 'Sony', 'basketball', 'electronics', 'xyz'];

testQueries.forEach(query => {
    console.log(`Searching for: "${query}"`);
    const results = searchProducts(query);
    console.log(`Found ${results.length} results:`);
    results.forEach(product => {
        console.log(`  - ${product.name} (${product.brand}) - ${product.category}`);
    });
    console.log('');
});