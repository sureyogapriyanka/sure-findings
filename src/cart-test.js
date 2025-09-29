// Test cart functionality
const testCart = async () => {
    console.log('🚀 Testing cart functionality...\n');

    try {
        // Test 1: Check if cart endpoint is accessible
        console.log('Test 1: Checking cart endpoint accessibility...');
        const cartResponse = await fetch('http://localhost:5002/api/cart', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Y2ZkNGIxZjNjZGI1NTBjNDYxNjg1ZiIsImlhdCI6MTc1ODQ2NjUxNywiZXhwIjoxNzU4NTUyOTE3fQ.b8bHXLAaFv3VK3R7IknxJVAAoXQMArceuuMpgDgZh_Q'
            }
        });

        const cartData = await cartResponse.json();

        if (cartData.success) {
            console.log('✅ Cart endpoint accessible');
            console.log(`   Cart items: ${cartData.data.items ? cartData.data.items.length : 0}\n`);
        } else {
            console.log('❌ Cart endpoint not accessible');
            console.log(`   Error: ${cartData.message}\n`);
        }

        // Test 2: Test adding item to cart
        console.log('Test 2: Testing adding item to cart...');
        const addToCartResponse = await fetch('http://localhost:5002/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Y2ZkNGIxZjNjZGI1NTBjNDYxNjg1ZiIsImlhdCI6MTc1ODQ2NjUxNywiZXhwIjoxNzU4NTUyOTE3fQ.b8bHXLAaFv3VK3R7IknxJVAAoXQMArceuuMpgDgZh_Q'
            },
            body: JSON.stringify({
                productId: '1',
                quantity: 1
            })
        });

        const addToCartData = await addToCartResponse.json();

        if (addToCartData.success) {
            console.log('✅ Item added to cart successfully');
            console.log(`   Cart items: ${addToCartData.data.items ? addToCartData.data.items.length : 0}\n`);
        } else {
            console.log('❌ Failed to add item to cart');
            console.log(`   Error: ${addToCartData.message}\n`);
        }

        console.log('🎉 Cart functionality test completed!');

    } catch (error) {
        console.error('💥 Cart test failed:', error);
    }
};

// Run the test
testCart();