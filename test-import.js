// Test to check if products are imported correctly
import localProducts from './products.js';

console.log('Products imported successfully');
console.log('Total products:', localProducts.length);

// Check first few products
console.log('First 3 products:');
localProducts.slice(0, 3).forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - ${product.category}`);
});

export { localProducts };