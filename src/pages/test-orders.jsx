import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button.jsx';
import * as storage from '../lib/storage.js';

const TestOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadOrders = async () => {
            try {
                const storedData = await storage.getStorageData();
                console.log('Storage data:', storedData);
                if (storedData && storedData.orders) {
                    setOrders(storedData.orders);
                }
            } catch (error) {
                console.error('Error loading orders:', error);
            } finally {
                setLoading(false);
            }
        };

        loadOrders();
    }, []);

    const addTestOrder = async () => {
        const testOrder = {
            id: 'TEST' + Date.now().toString().slice(-6),
            date: new Date().toISOString(),
            total: 1000,
            status: 'pending',
            shippingAddress: 'Test Address, Test City, Test State 123456',
            items: [
                {
                    id: '1',
                    name: 'Test Product',
                    image: '/placeholder.jpg',
                    price: 1000,
                    quantity: 1
                }
            ],
            paymentMethod: 'card'
        };

        try {
            const savedOrder = await storage.createOrder(testOrder);
            console.log('Order created:', savedOrder);
            // Reload orders
            const storedData = await storage.getStorageData();
            if (storedData && storedData.orders) {
                setOrders(storedData.orders);
            }
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Orders Test Page</h1>
            <Button onClick={addTestOrder} className="mb-4">Add Test Order</Button>
            <div>
                <h2 className="text-xl font-semibold mb-2">Orders Count: {orders.length}</h2>
                {orders.length === 0 ? (
                    <p>No orders found</p>
                ) : (
                    <div className="space-y-4">
                        {orders.map(order => (
                            <div key={order.id} className="border p-4 rounded">
                                <p><strong>ID:</strong> {order.id}</p>
                                <p><strong>Date:</strong> {order.date || order.createdAt}</p>
                                <p><strong>Total:</strong> ₹{order.total}</p>
                                <p><strong>Status:</strong> {order.status}</p>
                                <p><strong>Items:</strong> {order.items?.length || 0}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestOrders;