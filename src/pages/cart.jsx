import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Trash2, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
// import { addToWishlist, removeFromCart as removeFromStorage } from '../lib/storage';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Separator } from '../components/ui/separator';

const Cart = () => {
  const {
    getCartItems,
    updateQuantity,
    removeItem,
    getCartSubtotal,
    getCartTax,
    getCartGrandTotal,
    getCartItemCount
  } = useCart();

  const cartItems = getCartItems();
  const [, setLocation] = useLocation();
  const [savedItems, setSavedItems] = useState([]);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, parseInt(newQuantity));
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleSaveForLater = (item) => {
    // Move item to saved for later
    setSavedItems(prev => [...prev, item]);
    removeItem(item.id);
  };

  const handleMoveToCart = (savedItem) => {
    // Move item back to cart
    setSavedItems(prev => prev.filter(item => item.id !== savedItem.id));
    // Note: In a real implementation, you'd add it back to cart storage
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  if (cartItems.length === 0 && savedItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <ShoppingCart className="h-24 w-24 mx-auto text-gray-400 mb-4" />
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link href="/sure-findings/">
          <Button className="bg-amazon-orange hover:bg-orange-600 text-gray-800">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card rounded-lg shadow-sm border border-border p-6">
                <div className="flex items-start space-x-4">
                  {/* Product Image */}
                  <Link href={`/product/${item.product.id}`}>
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-md cursor-pointer"
                      data-testid={`cart-item-image-${item.id}`}
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1">
                    <Link href={`/product/${item.product.id}`}>
                      <h3 className="font-semibold text-lg mb-1 hover:text-primary cursor-pointer" data-testid={`cart-item-name-${item.id}`}>
                        {item.product.name}
                      </h3>
                    </Link>

                    {/* Options */}
                    {item.options && Object.keys(item.options).length > 0 && (
                      <div className="text-sm text-muted-foreground mb-2">
                        {Object.entries(item.options).map(([key, value]) => (
                          <span key={key} className="mr-4">
                            {key}: {value}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Quantity and Actions */}
                    <div className="flex items-center space-x-4 mb-3">
                      <Select
                        value={item.quantity.toString()}
                        onValueChange={(value) => handleQuantityChange(item.id, value)}
                      >
                        <SelectTrigger className="w-20" data-testid={`quantity-select-${item.id}`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id)}
                        data-testid={`remove-item-${item.id}`}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSaveForLater(item)}
                        data-testid={`save-later-${item.id}`}
                      >
                        <Heart className="h-4 w-4 mr-1" />
                        Save for later
                      </Button>
                    </div>

                    {/* Stock Status */}
                    <div className="text-green-600 text-sm">
                      <span>✓ In Stock</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary" data-testid={`item-total-${item.id}`}>
                      {formatPrice(item.totalPrice)}
                    </div>
                    {item.quantity > 1 && (
                      <div className="text-sm text-muted-foreground">
                        {formatPrice(item.product.price)} each
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Continue Shopping */}
          <div className="text-center mt-6">
            <Link href="/sure-findings/">
              <Button variant="outline">
                ← Continue Shopping
              </Button>
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg shadow-sm border border-border p-6 sticky top-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span>Items ({getCartItemCount()}):</span>
                <span data-testid="cart-subtotal">{formatPrice(getCartSubtotal())}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping & handling:</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Total before tax:</span>
                <span>{formatPrice(getCartSubtotal())}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated tax:</span>
                <span data-testid="cart-tax">{formatPrice(getCartTax())}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Order total:</span>
                <span className="text-primary" data-testid="cart-total">
                  {formatPrice(getCartGrandTotal())}
                </span>
              </div>
            </div>

            {/* Free Shipping Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
              <div className="text-green-700 text-sm">
                ✓ Your order qualifies for FREE Shipping
              </div>
            </div>

            {/* Proceed to Checkout */}
            <Button
              className="w-full bg-amazon-orange hover:bg-orange-600 text-gray-800 font-semibold py-3 mb-3"
              data-testid="proceed-checkout"
              onClick={() => setLocation('/sure-findings/checkout')}
            >
              Proceed to Checkout
            </Button>

            {/* Payment Methods */}
            <div className="text-center text-sm text-muted-foreground">
              <div className="mb-2">We accept:</div>
              <div className="flex justify-center space-x-2 text-2xl">
                <span>💳</span>
                <span>💰</span>
                <span>🏦</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Saved for Later */}
      {savedItems.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Saved for Later</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {savedItems.map((item) => (
              <div key={item.id} className="bg-card rounded-lg shadow-sm border border-border p-4">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold mb-2">{item.product.name}</h3>
                <div className="text-lg font-bold text-primary mb-3">
                  {formatPrice(item.product.price)}
                </div>
                <div className="space-y-2">
                  <Button
                    className="w-full bg-amazon-orange hover:bg-orange-600 text-gray-800 font-medium text-sm"
                    onClick={() => handleMoveToCart(item)}
                  >
                    Move to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-sm"
                    onClick={() => setSavedItems(prev => prev.filter(i => i.id !== item.id))}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
