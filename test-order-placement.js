// Test script to verify order placement functionality
console.log('Testing order placement functionality...');

// Test data
const testOrder = {
    id: 'ORD123456',
    date: new Date().toISOString(),
    total: 1299,
    status: 'Processing',
    shippingAddress: '123 Test Street, Test City, TS 500001',
    items: [
        {
            id: 'item1',
            name: 'Test Product',
            image: '/placeholder.jpg',
            price: 1299,
            quantity: 1
        }
    ],
    paymentMethod: 'upi'
};

// Test localStorage operations
try {
    // Initialize storage if not present
    const STORAGE_KEY = 'ecommerce_app_data';
    if (!localStorage.getItem(STORAGE_KEY)) {
        const defaultData = {
            currentUser: null,
            users: [],
            cart: [],
            wishlist: [],
            orders: [],
            addresses: []
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    }

    // Test creating an order
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const order = {
        id: 'ORD' + Date.now().toString().slice(-6),
        ...testOrder,
        createdAt: new Date().toISOString(),
        status: testOrder.status || 'pending'
    };

    data.orders.push(order);
    data.cart = []; // Clear cart after order creation
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    console.log('Order created successfully:', order);

    // Verify order was saved
    const updatedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const savedOrder = updatedData.orders.find(o => o.id === order.id);

    if (savedOrder) {
        console.log('✓ Order saved to localStorage');
    } else {
        console.log('✗ Failed to save order to localStorage');
    }

    // Verify cart was cleared
    if (updatedData.cart.length === 0) {
        console.log('✓ Cart cleared after order placement');
    } else {
        console.log('✗ Cart not cleared after order placement');
    }

    console.log('Test completed.');
} catch (error) {
    console.error('Test failed:', error);
}