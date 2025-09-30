import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Package, Truck, CheckCircle, Clock, Search, CreditCard, QrCode, Wallet, TruckIcon, ChevronLeft } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select.jsx';
import { Badge } from '../components/ui/badge.jsx';
import * as storage from '../lib/storage.js';

const Orders = () => {
  const [location, setLocation] = useLocation();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPeriod, setFilterPeriod] = useState('all');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Check if there's a new order parameter
  const urlParams = new URLSearchParams(location.split('?')[1]);
  const newOrderId = urlParams.get('new');

  // Load orders from storage
  useEffect(() => {
    const loadOrders = async () => {
      try {
        setLoading(true);
        // Use the storage service to get orders consistently
        const storedData = await storage.getStorageData();
        if (storedData && storedData.orders) {
          setOrders(storedData.orders);
        } else {
          // Fallback to localStorage direct access
          const rawData = localStorage.getItem('ecommerce_app_data');
          const parsedData = rawData ? JSON.parse(rawData) : {};
          const orders = parsedData.orders || [];
          setOrders(orders);
        }
      } catch (error) {
        // Fallback to localStorage direct access
        try {
          const rawData = localStorage.getItem('ecommerce_app_data');
          const parsedData = rawData ? JSON.parse(rawData) : {};
          const orders = parsedData.orders || [];
          setOrders(orders);
        } catch (fallbackError) {
          setOrders([]);
        }
      } finally {
        setLoading(false);
      }
    };

    loadOrders();

    // Add event listener for storage changes
    const handleStorageChange = () => {
      loadOrders();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Filter orders based on search and filter criteria
  const filteredOrders = (() => {
    let ordersList = [...orders];

    // Filter by search query
    if (searchQuery) {
      ordersList = ordersList.filter(order =>
        (order.id && order.id.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (order.items && order.items.some(item =>
          item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())
        ))
      );
    }

    // Filter by time period
    if (filterPeriod !== 'all') {
      const now = new Date();
      const filterDate = new Date();

      switch (filterPeriod) {
        case 'last-30-days':
          filterDate.setDate(now.getDate() - 30);
          break;
        case 'last-3-months':
          filterDate.setMonth(now.getMonth() - 3);
          break;
        case 'last-6-months':
          filterDate.setMonth(now.getMonth() - 6);
          break;
        case 'last-year':
          filterDate.setFullYear(now.getFullYear() - 1);
          break;
        default:
          filterDate.setFullYear(1970); // Show all
      }

      ordersList = ordersList.filter(order => {
        const orderDate = new Date(order.date || order.createdAt);
        return orderDate >= filterDate;
      });
    }

    return ordersList;
  })();

  const formatPrice = (price) => {
    // Handle case where price might be undefined or null
    if (price === undefined || price === null) {
      return '₹0.00';
    }

    // Handle case where price is not a number
    if (isNaN(price)) {
      return '₹0.00';
    }

    try {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
      }).format(price);
    } catch (error) {
      return '₹0.00';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    try {
      return new Date(dateString).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  const formatDeliveryDate = (dateString) => {
    if (!dateString) return 'Delivery date not available';
    try {
      const today = new Date();
      const deliveryDate = new Date(dateString);

      // If delivery is today
      if (deliveryDate.toDateString() === today.toDateString()) {
        return 'Arriving today';
      }

      // If delivery is tomorrow
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      if (deliveryDate.toDateString() === tomorrow.toDateString()) {
        return 'Arriving tomorrow';
      }

      // Otherwise show the date
      return `Arriving by ${formatDate(dateString)}`;
    } catch (error) {
      return 'Delivery date not available';
    }
  };

  const getStatusColor = (status) => {
    switch (status ? status.toLowerCase() : '') {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status ? status.toLowerCase() : '') {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'processing':
        return <Package className="h-4 w-4" />;
      case 'shipped':
      case 'out for delivery':
        return <Truck className="h-4 w-4" />;
      case 'delivered':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getPaymentMethodIcon = (method) => {
    switch (method) {
      case 'card':
        return <CreditCard className="h-4 w-4" />;
      case 'upi':
        return <QrCode className="h-4 w-4" />;
      case 'wallet':
        return <Wallet className="h-4 w-4" />;
      case 'cod':
        return <TruckIcon className="h-4 w-4" />;
      default:
        return <CreditCard className="h-4 w-4" />;
    }
  };

  const getPaymentMethodName = (method) => {
    switch (method) {
      case 'card':
        return 'Credit/Debit Card';
      case 'upi':
        return 'UPI';
      case 'wallet':
        return 'Wallet';
      case 'cod':
        return 'Cash on Delivery';
      default:
        return 'Payment';
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl border border-orange-100 max-w-md w-full mx-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
            <Package className="h-8 w-8 text-orange-600" />
          </div>
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Please sign in to view your orders</h1>
          <Link href="/sure-findings/">
            <Button variant="outline" className="mb-6">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Home
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
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Loading your orders...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 bg-gradient-to-br from-orange-50 to-amber-50 min-h-screen">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Orders</h1>
        <p className="text-gray-600">Track and manage your order history</p>
      </div>

      {/* New Order Success Message */}
      {newOrderId && (
        <div className="max-w-2xl mx-auto mb-8 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-200 transform transition-all hover:scale-[1.01]">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Order Placed Successfully!</h2>
              <p className="text-green-100">Thank you for your purchase</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-600 mb-5">Your order has been received and is being processed. You'll receive shipping confirmation soon.</p>
              <div className="bg-gray-50 rounded-xl p-4 inline-block mb-5 w-full max-w-xs">
                <p className="text-sm text-gray-500 mb-1">Order ID</p>
                <p className="font-mono font-bold text-lg text-gray-800">{newOrderId}</p>
              </div>
              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              >
                View Order Details Below
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Order Filters */}
      <div className="bg-white rounded-xl shadow-md border border-orange-100 p-5 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-64">
            <Select value={filterPeriod} onValueChange={setFilterPeriod}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-30-days">Last 30 days</SelectItem>
                <SelectItem value="last-3-months">Last 3 months</SelectItem>
                <SelectItem value="last-6-months">Last 6 months</SelectItem>
                <SelectItem value="last-year">Last year</SelectItem>
                <SelectItem value="all">All orders</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search orders by product or order ID"
              className="pl-10 py-3 rounded-xl border border-orange-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-md border border-orange-100">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 mb-6">
            <Package className="h-10 w-10 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No orders yet</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            You haven't placed any orders yet. Start shopping to see your orders here.
          </p>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
            <Link href="/sure-findings/">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {[...filteredOrders].reverse().map((order) => (
            <div key={order.id} className="bg-white rounded-2xl shadow-md border border-orange-100 overflow-hidden transition-all hover:shadow-lg">
              <div className="p-5 border-b border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <h3 className="text-xl font-bold text-gray-900">Order #{order.id}</h3>
                      <Badge variant="secondary" className={getStatusColor(order.status)}>
                        <span className="flex items-center">
                          {getStatusIcon(order.status)}
                          <span className="ml-1 font-medium">{order.status || 'Unknown'}</span>
                        </span>
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {formatDate(order.date || order.createdAt)}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="flex items-center text-sm text-gray-600 bg-white px-3 py-1 rounded-full border border-orange-200">
                      <span className="flex items-center">
                        {getPaymentMethodIcon(order.paymentMethod)}
                        <span className="ml-1">{getPaymentMethodName(order.paymentMethod)}</span>
                      </span>
                    </div>
                    <div className="text-xl font-bold text-orange-700">{formatPrice(order.total)}</div>
                  </div>
                </div>
                {order.estimatedDeliveryDate && (
                  <div className="mt-3 pt-3 border-t border-orange-200">
                    <p className="text-sm">
                      <span className="font-medium text-gray-700">Estimated Delivery: </span>
                      <span className="text-green-600 font-medium">
                        {formatDeliveryDate(order.estimatedDeliveryDate)}
                      </span>
                    </p>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h4 className="font-bold text-lg text-gray-800 mb-3">Items</h4>
                    <div className="space-y-4">
                      {order.items && order.items.map((item, index) => (
                        <div key={item.id || index} className="flex items-center gap-4 p-3 rounded-xl border border-orange-100 hover:bg-orange-50 transition-colors">
                          <img
                            src={item.image || '/placeholder.jpg'}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg border border-gray-200 bg-white"
                            onError={(e) => {
                              e.target.src = '/placeholder.jpg';
                            }}
                          />
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900">{item.name || 'Unknown Item'}</h5>
                            <p className="text-sm text-gray-600 mt-1">
                              Qty: {item.quantity || 0} × {formatPrice(item.price)}
                            </p>
                          </div>
                          <div className="font-bold text-gray-900">
                            {item.quantity && item.price ? formatPrice(item.quantity * item.price) : 'N/A'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-3">Shipping Address</h4>
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                      <p className="text-gray-700 whitespace-pre-line">
                        {order.shippingAddress || 'No address provided'}
                      </p>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/sure-findings/tracking?order=${order.id}`}>
                          Track Package
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;