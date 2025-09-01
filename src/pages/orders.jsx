import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Package, Truck, CheckCircle, Clock, Search } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { updateOrderStatus } from '../lib/storage';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
// import { Separator } from '../components/ui/separator';

const Orders = () => {
  const [location] = useLocation();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPeriod, setFilterPeriod] = useState('last-30-days');
  const [filteredOrders, setFilteredOrders] = useState([]);

  // Check if there's a new order parameter
  const urlParams = new URLSearchParams(location.split('?')[1]);
  const newOrderId = urlParams.get('new');

  useEffect(() => {
    if (user?.orders) {
      let orders = [...user.orders];
      
      // Filter by search query
      if (searchQuery) {
        orders = orders.filter(order => 
          order.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.items.some(item => 
            item.productName.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      }
      
      // Filter by time period
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
      
      orders = orders.filter(order => new Date(order.date) >= filterDate);
      
      setFilteredOrders(orders);
    }
  }, [user?.orders, searchQuery, filterPeriod]);

  // Simulate order status updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (user?.orders) {
        user.orders.forEach(order => {
          if (order.status === 'Processing' && Math.random() < 0.1) {
            updateOrderStatus(order.id, 'Shipped', 'shipped');
          } else if (order.status === 'Shipped' && Math.random() < 0.05) {
            updateOrderStatus(order.id, 'Out for delivery', 'out for delivery');
          } else if (order.status === 'Out for delivery' && Math.random() < 0.03) {
            updateOrderStatus(order.id, 'Delivered', 'delivered');
          }
        });
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [user?.orders]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'out for delivery':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'processing':
        return <Clock className="h-4 w-4" />;
      case 'shipped':
      case 'out for delivery':
        return <Truck className="h-4 w-4" />;
      case 'delivered':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const renderTrackingProgress = (order) => {
    const steps = order.tracking?.steps || [];
    
    return (
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          {steps.map((step, index) => (
            <span key={index} className={step.status === 'completed' || step.status === 'current' ? 'text-primary font-medium' : ''}>
              {step.name}
            </span>
          ))}
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300" 
            style={{ 
              width: `${(steps.filter(s => s.status === 'completed').length / steps.length) * 100}%` 
            }}
          />
        </div>
      </div>
    );
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please sign in to view your orders</h1>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      
      {/* New Order Success Message */}
      {newOrderId && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            <div>
              <h3 className="font-medium text-green-800">Order placed successfully!</h3>
              <p className="text-sm text-green-600">
                Your order has been received and is being processed. You'll receive shipping confirmation soon.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Order Filters */}
      <div className="bg-card rounded-lg shadow-sm border border-border p-4 mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <Select value={filterPeriod} onValueChange={setFilterPeriod}>
            <SelectTrigger className="w-48" data-testid="order-filter-period">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-30-days">Orders placed in last 30 days</SelectItem>
              <SelectItem value="last-3-months">Orders placed in last 3 months</SelectItem>
              <SelectItem value="last-6-months">Orders placed in last 6 months</SelectItem>
              <SelectItem value="last-year">Orders placed in last year</SelectItem>
              <SelectItem value="all">All orders</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex-1 min-w-64 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search your orders"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="order-search"
            />
          </div>
        </div>
      </div>
      
      {/* Orders List */}
      <div className="space-y-6">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-16">
            <Package className="h-24 w-24 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">No orders found</h2>
            <p className="text-muted-foreground mb-8">
              {searchQuery ? 'Try adjusting your search terms' : 'You haven\'t placed any orders yet'}
            </p>
            <Link href="/">
              <Button className="bg-Sure-Findings Store-orange hover:bg-orange-600 text-gray-800">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
              {/* Order Header */}
              <div className="bg-secondary px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">ORDER PLACED</div>
                    <div className="font-medium" data-testid={`order-date-${order.id}`}>
                      {formatDate(order.date)}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">TOTAL</div>
                    <div className="font-medium" data-testid={`order-total-${order.id}`}>
                      {formatPrice(order.total)}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">SHIP TO</div>
                    <div className="font-medium">{user.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground text-xs">
                      ORDER # <span data-testid={`order-number-${order.id}`}>{order.number}</span>
                    </div>
                    <div className="flex justify-end space-x-4 mt-2">
                      <Button variant="ghost" size="sm" data-testid={`view-details-${order.id}`}>
                        View order details
                      </Button>
                      <Button variant="ghost" size="sm" data-testid={`track-package-${order.id}`}>
                        Track package
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Order Status */}
              <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge className={`${getStatusColor(order.status)} mr-2`}>
                        <div className="flex items-center">
                          {getStatusIcon(order.status)}
                          <span className="ml-1">{order.status}</span>
                        </div>
                      </Badge>
                      <span className="text-sm text-muted-foreground" data-testid={`order-status-${order.id}`}>
                        {order.status === 'Delivered' 
                          ? `Delivered ${formatDate(order.deliveryDate || order.date)}`
                          : order.status === 'Out for delivery'
                          ? 'Expected delivery today by 8 PM'
                          : order.status === 'Shipped'
                          ? 'Expected delivery in 2-3 days'
                          : 'Being prepared for shipment'
                        }
                      </span>
                    </div>
                    
                    {/* Tracking Progress */}
                    {order.tracking && order.status !== 'Delivered' && (
                      renderTrackingProgress(order)
                    )}
                  </div>
                  
                  <div className="text-right space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      data-testid={`buy-again-${order.id}`}
                    >
                      Buy it again
                    </Button>
                    {order.status !== 'Delivered' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        data-testid={`cancel-order-${order.id}`}
                      >
                        Cancel order
                      </Button>
                    )}
                  </div>
                </div>
                
                {/* Order Items */}
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Link href={`/product/${item.productId}`}>
                        <img 
                          src={item.image} 
                          alt={item.productName}
                          className="w-20 h-20 object-cover rounded-md cursor-pointer"
                          data-testid={`order-item-image-${order.id}-${index}`}
                        />
                      </Link>
                      <div className="flex-1">
                        <Link href={`/product/${item.productId}`}>
                          <h3 className="font-semibold hover:text-primary cursor-pointer" data-testid={`order-item-name-${order.id}-${index}`}>
                            {item.productName}
                          </h3>
                        </Link>
                        <div className="text-sm text-muted-foreground">
                          {item.options && Object.entries(item.options).map(([key, value]) => (
                            <span key={key} className="mr-4">
                              {key}: {value}
                            </span>
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground">Qty: {item.quantity}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium" data-testid={`order-item-price-${order.id}-${index}`}>
                          {formatPrice(item.price * item.quantity)}
                        </div>
                        <div className="flex space-x-2 mt-2">
                          <Link href={`/product/${item.productId}`}>
                            <Button variant="ghost" size="sm">
                              View product
                            </Button>
                          </Link>
                          {order.status === 'Delivered' && (
                            <Button variant="ghost" size="sm" data-testid={`write-review-${order.id}-${index}`}>
                              Write review
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Load More */}
      {filteredOrders.length > 0 && (
        <div className="text-center mt-8">
          <Button variant="outline" data-testid="load-more-orders">
            Load More Orders
          </Button>
        </div>
      )}
    </div>
  );
};

export default Orders;
