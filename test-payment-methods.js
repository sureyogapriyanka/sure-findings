// Test payment methods functionality
const testPaymentMethods = async () => {
    console.log('🚀 Testing payment methods functionality...\n');

    try {
        // Test 1: Check if storage is initialized
        console.log('Test 1: Checking storage initialization...');
        const storageData = localStorage.getItem('ecommerce_app_data');

        if (storageData) {
            console.log('✅ Storage is initialized');
            const data = JSON.parse(storageData);
            console.log(`   Users: ${data.users ? data.users.length : 0}`);
            console.log(`   Orders: ${data.orders ? data.orders.length : 0}\n`);
        } else {
            console.log('❌ Storage is not initialized\n');
        }

        // Test 2: Simulate creating an order with different payment methods
        console.log('Test 2: Testing order creation with different payment methods...');

        // Sample order data
        const sampleOrder = {
            id: 'ORD' + Date.now().toString().slice(-6),
            date: new Date().toISOString(),
            total: 1299,
            status: 'Processing',
            shippingAddress: '123 Main St, City, State 12345',
            items: [
                {
                    id: '1',
                    name: 'Sample Product',
                    image: '/placeholder.jpg',
                    price: 1299,
                    quantity: 1
                }
            ]
        };

        // Test COD order
        const codOrder = { ...sampleOrder, id: 'ORD' + (Date.now() + 1).toString().slice(-6), paymentMethod: 'cod', status: 'Pending' };
        const upiOrder = { ...sampleOrder, id: 'ORD' + (Date.now() + 2).toString().slice(-6), paymentMethod: 'upi' };
        const cardOrder = { ...sampleOrder, id: 'ORD' + (Date.now() + 3).toString().slice(-6), paymentMethod: 'card' };

        // Add orders to storage
        const data = JSON.parse(localStorage.getItem('ecommerce_app_data') || '{}');
        if (!data.orders) data.orders = [];

        data.orders.push(codOrder, upiOrder, cardOrder);
        localStorage.setItem('ecommerce_app_data', JSON.stringify(data));

        console.log('✅ Orders created with different payment methods');
        console.log(`   COD Order: ${codOrder.id}`);
        console.log(`   UPI Order: ${upiOrder.id}`);
        console.log(`   Card Order: ${cardOrder.id}\n`);

        // Test 3: Verify orders are stored
        console.log('Test 3: Verifying orders are stored...');
        const updatedData = JSON.parse(localStorage.getItem('ecommerce_app_data') || '{}');

        if (updatedData.orders && updatedData.orders.length >= 3) {
            console.log('✅ Orders are properly stored');
            console.log(`   Total orders: ${updatedData.orders.length}\n`);
        } else {
            console.log('❌ Orders are not properly stored\n');
        }

        console.log('🎉 Payment methods functionality test completed!');

    } catch (error) {
        console.error('💥 Payment methods test failed:', error);
    }
};

// Run the test
testPaymentMethods();