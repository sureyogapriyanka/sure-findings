import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Package, Truck, MapPin, Clock, CheckCircle, User, Phone } from 'lucide-react';
import { Button } from '../components/ui/button.jsx';
import { useAuth } from '../hooks/useAuth.js';
import * as storage from '../lib/storage.js';

const Tracking = () => {
    const [location, setLocation] = useLocation();
    const { user } = useAuth();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [trackingSteps, setTrackingSteps] = useState([]);

    // Extract order ID from URL
    const urlParams = new URLSearchParams(location.split('?')[1]);
    const orderId = urlParams.get('order');

    useEffect(() => {
        if (!orderId) {
            setLoading(false);
            return;
        }

        const loadOrder = async () => {
            try {
                setLoading(true);
                // Use the storage service to get orders
                const storedData = await storage.getStorageData();
                if (storedData && storedData.orders) {
                    const foundOrder = storedData.orders.find(o => o.id === orderId);
                    if (foundOrder) {
                        setOrder(foundOrder);
                        generateTrackingSteps(foundOrder);
                    }
                }
            } catch (error) {
                console.error('Error loading order:', error);
            } finally {
                setLoading(false);
            }
        };

        loadOrder();
    }, [orderId]);

    const generateTrackingSteps = (order) => {
        const steps = [
            {
                id: 'order-placed',
                title: 'Order Placed',
                description: 'Your order has been placed successfully',
                icon: <Package className="h-5 w-5" />,
                date: order.createdAt,
                completed: true
            },
            {
                id: 'processing',
                title: 'Processing',
                description: 'We are preparing your order for shipment',
                icon: <Package className="h-5 w-5" />,
                date: order.processingDate || new Date(new Date(order.createdAt).getTime() + 24 * 60 * 60 * 1000).toISOString(),
                completed: order.status !== 'pending'
            },
            {
                id: 'shipped',
                title: 'Shipped',
                description: 'Your order has been shipped',
                icon: <Truck className="h-5 w-5" />,
                date: order.shippedDate || new Date(new Date(order.createdAt).getTime() + 2 * 24 * 60 * 60 * 1000).toISOString(),
                completed: ['shipped', 'out for delivery', 'delivered'].includes(order.status.toLowerCase())
            },
            {
                id: 'out-for-delivery',
                title: 'Out for Delivery',
                description: 'Your order is out for delivery',
                icon: <MapPin className="h-5 w-5" />,
                date: order.outForDeliveryDate || new Date(new Date(order.createdAt).getTime() + 3 * 24 * 60 * 60 * 1000).toISOString(),
                completed: ['out for delivery', 'delivered'].includes(order.status.toLowerCase())
            },
            {
                id: 'delivered',
                title: 'Delivered',
                description: 'Your order has been delivered successfully',
                icon: <CheckCircle className="h-5 w-5" />,
                date: order.deliveredDate || order.estimatedDeliveryDate || new Date(new Date(order.createdAt).getTime() + 4 * 24 * 60 * 60 * 1000).toISOString(),
                completed: order.status.toLowerCase() === 'delivered'
            }
        ];

        setTrackingSteps(steps);
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Pending';
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getCurrentStepIndex = () => {
        if (!order) return -1;
        const status = order.status.toLowerCase();
        switch (status) {
            case 'pending': return 0;
            case 'processing': return 1;
            case 'shipped': return 2;
            case 'out for delivery': return 3;
            case 'delivered': return 4;
            default: return 0;
        }
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="text-center bg-white p-8 rounded-2xl shadow-xl border border-orange-100 max-w-md w-full mx-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
                        <Package className="h-8 w-8 text-orange-600" />
                    </div>
                    <h1 className="text-2xl font-bold mb-4 text-gray-800">Please sign in to track your order</h1>
                    <Link href="/login">
                        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                            Sign In
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="text-center bg-white p-8 rounded-2xl shadow-xl border border-orange-100 max-w-md w-full mx-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                    <h1 className="text-2xl font-bold mb-4 text-gray-800">Loading tracking information...</h1>
                </div>
            </div>
        );
    }

    if (!orderId || !order) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="text-center bg-white p-8 rounded-2xl shadow-xl border border-orange-100 max-w-md w-full mx-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
                        <Package className="h-8 w-8 text-orange-600" />
                    </div>
                    <h1 className="text-2xl font-bold mb-4 text-gray-800">Order not found</h1>
                    <p className="text-gray-600 mb-6">The order you're trying to track could not be found.</p>
                    <Link href="/orders">
                        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                            View All Orders
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const currentStepIndex = getCurrentStepIndex();

    return (
        <div className="max-w-4xl mx-auto px-4 py-6 bg-gradient-to-br from-orange-50 to-amber-50 min-h-screen">
            <div className="mb-8">
                <Link href="/orders" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4">
                    <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Orders
                </Link>
                <h1 className="text-3xl font-bold text-gray-900">Track Your Order</h1>
                <p className="text-gray-600">Order ID: <span className="font-mono font-bold">{order.id}</span></p>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-md border border-orange-100 p-6 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Order #{order.id}</h2>
                        <p className="text-gray-600">Placed on {formatDate(order.createdAt)}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-orange-700">
                            ₹{order.total?.toLocaleString('en-IN')}
                        </p>
                        <p className="text-sm text-gray-600">
                            {order.items?.length || 0} item{order.items?.length !== 1 ? 's' : ''}
                        </p>
                    </div>
                </div>
            </div>

            {/* Tracking Progress */}
            <div className="bg-white rounded-2xl shadow-md border border-orange-100 p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Tracking Progress</h3>
                <div className="relative">
                    {/* Progress line */}
                    <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-orange-200 transform -translate-x-1/2"></div>

                    {/* Steps */}
                    <div className="space-y-8">
                        {trackingSteps.map((step, index) => {
                            const isCompleted = step.completed;
                            const isCurrent = index === currentStepIndex;

                            return (
                                <div key={step.id} className="relative flex items-start">
                                    <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 ${isCompleted
                                        ? 'bg-orange-500 border-orange-500 text-white'
                                        : isCurrent
                                            ? 'bg-white border-orange-500 text-orange-500'
                                            : 'bg-white border-gray-300 text-gray-400'
                                        }`}>
                                        {isCompleted ? (
                                            <CheckCircle className="h-5 w-5" />
                                        ) : (
                                            step.icon
                                        )}
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <h4 className={`font-bold ${isCompleted ? 'text-orange-700' : isCurrent ? 'text-orange-600' : 'text-gray-500'
                                            }`}>
                                            {step.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                                        <p className="text-gray-500 text-xs mt-2">
                                            {formatDate(step.date)}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Delivery Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Shipping Address */}
                <div className="bg-white rounded-2xl shadow-md border border-orange-100 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-orange-600" />
                        Delivery Address
                    </h3>
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                        <p className="text-gray-700 whitespace-pre-line">
                            {order.shippingAddress}
                        </p>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-md border border-orange-100 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <User className="h-5 w-5 mr-2 text-orange-600" />
                        Contact Information
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <Phone className="h-5 w-5 text-orange-600 mr-3" />
                            <span className="text-gray-700">+91 98765 43210</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="h-5 w-5 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-700">support@surefindings.com</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Button variant="outline" className="w-full">
                            Contact Support
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tracking;