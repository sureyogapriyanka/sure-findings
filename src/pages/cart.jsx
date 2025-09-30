import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { useCart } from '../hooks/useCart';
import { useToast } from '../hooks/use-toast.js';

const Cart = () => {
  const { cart, removeItem, updateQuantity } = useCart();
  const [, setLocation] = useLocation();
  const [couponCode, setCouponCode] = useState('');
  const { toast } = useToast();
  const [removingItems, setRemovingItems] = useState(new Set());

  // Filter out items with invalid product data
  const validCartItems = cart.filter(item =>
    (item.product && item.product.price !== undefined && item.product.price !== null && !isNaN(item.product.price)) ||
    (item.name && item.price !== undefined && item.price !== null && !isNaN(item.price)) // For mock API items
  );

  // Calculate totals only for valid items
  const subtotal = validCartItems.reduce((sum, item) => {
    const price = item.product?.price || item.price || 0;
    return sum + (price * item.quantity || 0);
  }, 0);

  const shipping = subtotal > 0 ? (subtotal > 499 ? 0 : 49) : 0;
  const tax = subtotal * 0.18; // 18% tax
  const total = subtotal + shipping + tax;

  const handleCheckout = async () => {
    try {
      // Redirect to checkout page for all cart items
      setLocation('/sure-findings/checkout');
    } catch (error) {
      toast({
        title: "Error Processing Checkout",
        description: "Failed to proceed to checkout. Please try again.",
        variant: "destructive",
        duration: 5000, // 5 seconds
      });
    }
  };

  const handleBuyNow = async (item) => {
    try {
      // Show redirecting message
      toast({
        title: "Redirecting to Secure Checkout 🔄",
        description: (
          <div className="text-center">
            <p className="font-medium">{item.product?.name || item.name}</p>
            <p className="text-sm mt-1">Preparing your order...</p>
            <p className="text-sm mt-1 text-green-600 font-medium">
              {formatPrice((item.product?.price || item.price) * item.quantity)} to be charged
            </p>
          </div>
        ),
        variant: "info",
        duration: 5000, // 5 seconds
      });

      // Redirect to checkout page after a short delay
      setTimeout(() => {
        setLocation('/sure-findings/checkout');
      }, 1500);
    } catch (error) {
      toast({
        title: "Error Processing Order",
        description: "Failed to proceed to checkout. Please try again.",
        variant: "destructive",
        duration: 5000, // 5 seconds
      });
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      // Set loading state for this item
      setRemovingItems(prev => new Set(prev).add(itemId));

      await removeItem(itemId);

      toast({
        title: "Item Removed Successfully! 🗑️",
        description: "Item has been removed from your cart.",
        variant: "success",
        duration: 5000, // 5 seconds
      });
    } catch (error) {
      toast({
        title: "Error Removing Item",
        description: "Failed to remove item from cart. Please try again.",
        variant: "destructive",
        duration: 5000, // 5 seconds
      });
    } finally {
      // Remove loading state for this item
      setRemovingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }
  };

  const formatPrice = (price) => {
    if (price === undefined || price === null || isNaN(price)) {
      return '₹0.00';
    }
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  if (validCartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
        <div className="text-center py-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-orange-800">Your Cart</h1>
          <p className="text-muted-foreground mb-8">Your cart is empty</p>
          <Link href="/sure-findings/home">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-800 via-orange-600 to-orange-800 bg-clip-text text-transparent">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-800">Items ({validCartItems.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {validCartItems.map((item) => (
                <div key={item._id || item.productId} className="flex flex-col sm:flex-row gap-4 p-4 border-b border-orange-100 last:border-b-0">
                  <img
                    src={item.product?.images?.[0] || item.image || 'https://via.placeholder.com/100x100?text=No+Image'}
                    alt={item.product?.name || item.name}
                    className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded-md border border-orange-200 mx-auto sm:mx-0"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/100x100?text=No+Image';
                    }}
                  />
                  <div className="flex-grow">
                    <h3 className="font-medium text-orange-900 text-sm md:text-base">{item.product?.name || item.name || 'Product Name'}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2">{item.product?.brand || 'Brand'}</p>
                    <p className="font-bold text-orange-700 text-sm md:text-base">{formatPrice(item.product?.price || item.price)}</p>

                    <div className="flex flex-wrap items-center mt-3 gap-2">
                      <div className="flex items-center border border-orange-300 rounded-md">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item._id || item.productId, Math.max(1, item.quantity - 1))}
                          className="h-8 w-8 rounded-none border-r border-orange-300"
                        >
                          -
                        </Button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item._id || item.productId, item.quantity + 1)}
                          className="h-8 w-8 rounded-none border-l border-orange-300"
                        >
                          +
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item._id || item.productId)}
                        disabled={removingItems.has(item._id || item.productId)}
                        className="text-red-600 hover:text-red-800 hover:bg-red-50 text-sm"
                      >
                        {removingItems.has(item._id || item.productId) ? (
                          <>
                            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-red-600 mr-1"></div>
                            Removing...
                          </>
                        ) : (
                          'Remove'
                        )}
                      </Button>

                      <Button
                        onClick={() => handleBuyNow(item)}
                        className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-1 px-3 text-xs md:text-sm"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="bg-gradient-to-br from-white to-orange-50 border border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium">{shipping > 0 ? formatPrice(shipping) : 'FREE'}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span className="font-medium">{formatPrice(tax)}</span>
              </div>
              <div className="border-t border-orange-200 pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-orange-700">{formatPrice(total)}</span>
              </div>

              <div className="pt-4">
                <div className="flex flex-col sm:flex-row gap-2 mb-3">
                  <Input
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-grow text-sm"
                  />
                  <Button
                    variant="outline"
                    className="border-orange-300 text-orange-700 hover:bg-orange-50 text-sm"
                    onClick={() => {
                      if (couponCode.trim()) {
                        toast({
                          title: "Coupon Applied",
                          description: `Coupon "${couponCode}" applied successfully!`,
                        });
                      }
                    }}
                  >
                    Apply
                  </Button>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-5 md:py-6 text-base md:text-lg font-semibold"
                >
                  Proceed to Checkout
                </Button>

                <div className="mt-4 text-center">
                  <Link href="/sure-findings/" className="text-orange-600 hover:text-orange-800 font-medium text-sm md:text-base">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;