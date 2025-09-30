import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Label } from '../components/ui/label.jsx';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { ChevronLeft, CreditCard, Wallet, QrCode, Truck, ExternalLink, CheckCircle } from 'lucide-react';
import * as storage from '../lib/storage.js';
import { useToast } from '../hooks/use-toast.js';

const Checkout = () => {
  const { cart, clear } = useCart();
  const { user } = useAuth();
  const [location, setLocation] = useLocation();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { toast } = useToast();

  // State for single product checkout
  const [singleProduct, setSingleProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [singleProductData, setSingleProductData] = useState(null);

  // Simple step tracking
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ['Shipping', 'Payment', 'Review', 'Complete'];

  // Parse URL parameters for single product checkout
  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1]);
    const productId = params.get('productId');
    const qty = params.get('quantity');

    if (productId) {
      // This is a single product checkout
      setQuantity(qty ? parseInt(qty) : 1);
      // Get product data from localStorage
      try {
        const productData = JSON.parse(localStorage.getItem('singleProductCheckout') || '{}');
        setSingleProductData(productData);
        // Set flag to indicate single product mode
        setSingleProduct({ id: productId, quantity: qty ? parseInt(qty) : 1 });
      } catch (e) {
        console.error('Error parsing single product data:', e);
        // Fallback to basic data
        setSingleProduct({ id: productId, quantity: qty ? parseInt(qty) : 1 });
      }
    }
  }, [location]);

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  // Populate shipping info from user account
  useEffect(() => {
    if (user) {
      setShippingInfo(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || '',
        // You can add more fields here if you store address info in the user object
      }));
    }
  }, [user]);

  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  const [upiInfo, setUpiInfo] = useState({
    upiId: ''
  });

  // Determine items to checkout (either from cart or single product)
  const checkoutItems = singleProduct
    ? [{
      _id: singleProduct.id,
      productId: singleProduct.id,
      name: singleProductData?.name || 'Product',
      price: singleProductData?.price || 0,
      image: singleProductData?.image || '/placeholder.jpg',
      quantity: singleProduct.quantity,
      product: singleProductData || null
    }]
    : cart;

  // Calculate totals with more careful handling
  const subtotal = checkoutItems.reduce((sum, item) => {
    const price = item.product?.price || item.price || 0;
    const quantity = item.quantity || 0;
    return sum + (price * quantity);
  }, 0);

  const shipping = subtotal > 0 ? (subtotal > 499 ? 0 : 49) : 0;
  const tax = subtotal * 0.18; // 18% tax
  const codFee = paymentMethod === 'cod' ? 20 : 0;
  const total = subtotal + shipping + tax + codFee;

  const handlePlaceOrder = async () => {
    try {
      // Validate shipping info
      if (!shippingInfo.name || !shippingInfo.email || !shippingInfo.phone || !shippingInfo.address) {
        toast({
          title: "Error",
          description: "Please fill in all required shipping information.",
          variant: "destructive",
          duration: 5000, // 5 seconds
        });
        return;
      }

      // Show redirecting message
      toast({
        title: "Processing Order 🔄",
        description: "Please wait while we process your order...",
        variant: "info",
        duration: 5000, // 5 seconds
      });

      // Small delay to show the redirecting message
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Create order object
      const order = {
        id: 'ORD' + Date.now().toString().slice(-6),
        date: new Date().toISOString(),
        total: total,
        status: paymentMethod === 'cod' ? 'Pending' : 'Processing',
        shippingAddress: `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state} ${shippingInfo.zipCode}`,
        items: checkoutItems.map(item => ({
          id: item._id || item.productId,
          name: item.product?.name || item.name || 'Product',
          image: item.product?.images?.[0] || item.image || '/placeholder.jpg',
          price: item.product?.price || item.price || 0,
          quantity: item.quantity
        })),
        paymentMethod: paymentMethod,
        // Add fake delivery date (1-3 days from now)
        estimatedDeliveryDate: new Date(Date.now() + (Math.floor(Math.random() * 3) + 1) * 24 * 60 * 60 * 1000).toISOString()
      };

      // Save order using storage service
      const savedOrder = await storage.createOrder(order);

      // Clear cart using the cart hook if this is a cart checkout
      if (!singleProduct) {
        await clear();
        // Also clear cart in localStorage to ensure it's properly cleared
        await storage.clearCart();
      }

      // Set order details
      setOrderId(savedOrder.id);
      setOrderPlaced(true);

      toast({
        title: "Order Placed Successfully! 🎉",
        description: "Thank you for your purchase. Your order is being processed.",
        variant: "success",
        duration: 5000, // 5 seconds
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to place order. Please try again.",
        variant: "destructive",
        duration: 5000, // 5 seconds
      });
    }
  };

  const handleUpiRedirect = () => {
    setIsRedirecting(true);

    // Create a UPI payment link
    const upiId = upiInfo.upiId || 'merchant@upi';
    const payeeName = 'Sure Findings';
    const amount = total.toFixed(2);
    const transactionNote = `Order Payment for Order #${'ORD' + Date.now().toString().slice(-6)}`;

    // Try multiple UPI intent formats for better compatibility
    const upiIntents = [
      // Standard UPI intent
      `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`,
      // Alternative formats
      `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`,
      `upi://pay?pa=${encodeURIComponent(upiId)}&am=${amount}&pn=${encodeURIComponent(payeeName)}`,
    ];

    // Deep links for specific UPI apps
    const appSpecificLinks = [
      // PhonePe deep link
      `phonepe://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`,
      // Google Pay deep link
      `tez://upi/pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`,
      // Paytm deep link
      `paytmmp://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`,
    ];

    // Try to open the UPI app with fallbacks
    let intentIndex = 0;
    let appLinkIndex = 0;

    const tryNextIntent = () => {
      if (intentIndex < upiIntents.length) {
        const intent = upiIntents[intentIndex];

        // Create a hidden iframe to attempt the redirect
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = intent;
        document.body.appendChild(iframe);

        // Remove the iframe after a short delay
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000);

        // Also try window.open as a fallback
        const newWindow = window.open(intent, '_blank');
        if (newWindow) {
          newWindow.focus();
        }

        intentIndex++;

        // Try next intent after a short delay
        setTimeout(tryNextIntent, 500);
      } else {
        // If standard intents failed, try app-specific deep links
        tryAppSpecificLinks();
      }
    };

    const tryAppSpecificLinks = () => {
      if (appLinkIndex < appSpecificLinks.length) {
        const appLink = appSpecificLinks[appLinkIndex];

        // Try window.open for app-specific links
        const newWindow = window.open(appLink, '_blank');
        if (newWindow) {
          newWindow.focus();
        }

        appLinkIndex++;

        // Try next app link after a short delay
        setTimeout(tryAppSpecificLinks, 500);
      } else {
        // All methods exhausted, show fallback
        setTimeout(() => {
          setIsRedirecting(false);
          // Show options for manual payment
          showPaymentOptions(upiId, payeeName, amount, transactionNote);
        }, 1000);
      }
    };

    const showPaymentOptions = (upiId, payeeName, amount, note) => {
      const message = `
Payment Options:
1. Open your UPI app and send ₹${amount} to ${upiId}
2. Visit https://business.phonepe.com/ to make payment
3. Visit https://www.website.npci.org.in/ for UPI payment options
4. Try again with a different UPI ID

Transaction Details:
- Amount: ₹${amount}
- Payee: ${payeeName}
- Note: ${note}
      `.trim();

      alert(message);

      // Also open PhonePe business page in a new tab
      window.open('https://business.phonepe.com/', '_blank');

      // Open NPCI website as well
      window.open('https://www.website.npci.org.in/', '_blank');
    };

    tryNextIntent();
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  // Simple step navigation
  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (cart.length === 0 && !singleProduct) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
        <div className="text-center py-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-orange-800">Checkout</h1>
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

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 mb-4">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white mb-2">Order Placed Successfully!</h1>
            <p className="text-green-100">Thank you for your purchase</p>
          </div>

          <div className="p-6 text-center">
            <div className="mb-6">
              <p className="text-gray-600 mb-2">Your order confirmation has been sent to your email.</p>
              <div className="bg-gray-50 rounded-lg p-4 inline-block">
                <p className="text-sm text-gray-500 mb-1">Order ID</p>
                <p className="font-mono font-bold text-lg text-gray-800">{orderId}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-3"
                onClick={() => setLocation(`/orders?new=${orderId}`)}
              >
                View Orders
              </Button>
              <Link href="/home">
                <Button variant="outline" className="px-6 py-3">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
      <div className="mb-6">
        {!singleProduct && (
          <Link href="/sure-findings/cart" className="inline-flex items-center text-orange-600 hover:text-orange-800">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Cart
          </Link>
        )}
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-800 via-orange-600 to-orange-800 bg-clip-text text-transparent">Checkout</h1>

      {/* Simplified Progress Bar */}
      <div className="mb-8 bg-white rounded-xl shadow-lg p-4">
        <div className="relative pt-4">
          {/* Progress line */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-orange-200 rounded-full"></div>
          <div
            className="absolute top-6 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep - 1) * 33.33}%` }}
          ></div>

          {/* Step indicators */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber === currentStep;
              const isCompleted = stepNumber < currentStep;

              return (
                <div key={index} className="flex flex-col items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${isCompleted ? 'bg-green-500 text-white' :
                      isActive ? 'bg-orange-500 text-white shadow-lg' :
                        'bg-white text-gray-400 border-2 border-gray-300'}
                  `}>
                    {isCompleted ? '✓' : stepNumber}
                  </div>
                  <span className="mt-2 text-xs font-medium text-center w-16">
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Shipping Information */}
          {currentStep === 1 && (
            <Card className="bg-white border border-orange-200 shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
                <CardTitle className="text-orange-800">Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={shippingInfo.name}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                      required
                      className="text-sm md:text-base border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                      required
                      className="text-sm md:text-base border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                    required
                    className="text-sm md:text-base border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    required
                    className="text-sm md:text-base border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                      required
                      className="text-sm md:text-base border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                      required
                      className="text-sm md:text-base border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                      required
                      className="text-sm md:text-base border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t border-orange-200 p-4">
                <Button
                  onClick={nextStep}
                  className="ml-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                  disabled={!shippingInfo.name || !shippingInfo.email || !shippingInfo.phone || !shippingInfo.address || !shippingInfo.city || !shippingInfo.state || !shippingInfo.zipCode}
                >
                  Next: Payment Method
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Step 2: Payment Method */}
          {currentStep === 2 && (
            <Card className="bg-white border border-orange-200 shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
                <CardTitle className="text-orange-800">Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <Button
                    variant={paymentMethod === 'card' ? 'default' : 'outline'}
                    className={`flex flex-col items-center justify-center h-24 ${paymentMethod === 'card' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' : 'border-gray-300 text-gray-700 hover:bg-blue-50'}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <CreditCard className="h-8 w-8 mb-2" />
                    <span className="font-medium">Credit Card</span>
                  </Button>
                  <Button
                    variant={paymentMethod === 'upi' ? 'default' : 'outline'}
                    className={`flex flex-col items-center justify-center h-24 ${paymentMethod === 'upi' ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg' : 'border-gray-300 text-gray-700 hover:bg-purple-50'}`}
                    onClick={() => setPaymentMethod('upi')}
                  >
                    <QrCode className="h-8 w-8 mb-2" />
                    <span className="font-medium">UPI</span>
                  </Button>
                  <Button
                    variant={paymentMethod === 'wallet' ? 'default' : 'outline'}
                    className={`flex flex-col items-center justify-center h-24 ${paymentMethod === 'wallet' ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg' : 'border-gray-300 text-gray-700 hover:bg-green-50'}`}
                    onClick={() => setPaymentMethod('wallet')}
                  >
                    <Wallet className="h-8 w-8 mb-2" />
                    <span className="font-medium">Wallet</span>
                  </Button>
                  <Button
                    variant={paymentMethod === 'cod' ? 'default' : 'outline'}
                    className={`flex flex-col items-center justify-center h-24 ${paymentMethod === 'cod' ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' : 'border-gray-300 text-gray-700 hover:bg-orange-50'}`}
                    onClick={() => setPaymentMethod('cod')}
                  >
                    <Truck className="h-8 w-8 mb-2" />
                    <span className="font-medium">Cash on Delivery</span>
                  </Button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4 bg-gradient-to-br from-orange-50 to-white p-4 rounded-lg border border-orange-200">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardInfo.cardNumber}
                        onChange={(e) => setCardInfo({ ...cardInfo, cardNumber: e.target.value })}
                        required
                        className="text-sm md:text-base border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          value={cardInfo.expiryDate}
                          onChange={(e) => setCardInfo({ ...cardInfo, expiryDate: e.target.value })}
                          required
                          className="text-sm md:text-base border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={cardInfo.cvv}
                          onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })}
                          required
                          className="text-sm md:text-base border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input
                        id="cardName"
                        value={cardInfo.name}
                        onChange={(e) => setCardInfo({ ...cardInfo, name: e.target.value })}
                        required
                        className="text-sm md:text-base border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div className="space-y-4 bg-gradient-to-br from-orange-50 to-white p-4 rounded-lg border border-orange-200">
                    <div>
                      <Label htmlFor="upiId">UPI ID (Optional)</Label>
                      <Input
                        id="upiId"
                        placeholder="yourname@upi"
                        value={upiInfo.upiId}
                        onChange={(e) => setUpiInfo({ ...upiInfo, upiId: e.target.value })}
                        className="text-sm md:text-base border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-medium text-orange-800 mb-2">Pay with UPI</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        You will be redirected to your preferred UPI app to complete the payment of {formatPrice(total)}.
                      </p>
                      <Button
                        onClick={handleUpiRedirect}
                        disabled={isRedirecting}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white mb-3"
                      >
                        {isRedirecting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Redirecting to UPI App...
                          </>
                        ) : (
                          <>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Pay with UPI App
                          </>
                        )}
                      </Button>
                      <Button
                        onClick={() => window.open('https://www.phonepe.com/', '_blank')}
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white mb-3"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Pay with PhonePe
                      </Button>
                      <Button
                        onClick={() => window.open('https://www.website.npci.org.in/', '_blank')}
                        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit NPCI Website
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Supported UPI apps: Google Pay, PhonePe, Paytm, BHIM, and others.</p>
                      <p className="mt-1">If your UPI app doesn't open automatically, you'll be redirected to PhonePe business page.</p>
                    </div>
                  </div>
                )}

                {paymentMethod === 'wallet' && (
                  <div className="space-y-4 bg-gradient-to-br from-orange-50 to-white p-4 rounded-lg border border-orange-200">
                    <div className="text-sm text-muted-foreground">
                      <p>You will be redirected to your wallet app to complete the payment.</p>
                    </div>
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <div className="space-y-4 bg-gradient-to-br from-orange-50 to-white p-4 rounded-lg border border-orange-200">
                    <div className="flex items-start">
                      <Truck className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-orange-800">Cash on Delivery</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Pay with cash when your order is delivered. Please have exact change if possible.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          A small convenience fee of ₹20 will be added to your order.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="bg-gray-50 border-t border-orange-200 p-4 flex justify-between">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className="border-orange-300 text-orange-700 hover:bg-orange-50"
                >
                  Previous
                </Button>
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  Next: Review Order
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Step 3: Review Order */}
          {currentStep === 3 && (
            <Card className="bg-white border border-orange-200 shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
                <CardTitle className="text-orange-800">Review Your Order</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-orange-800">Items in your order</h3>
                    <div className="max-h-64 overflow-y-auto pr-2 space-y-4">
                      {checkoutItems.map((item) => (
                        <div key={item._id || item.productId} className="flex items-center border-b border-orange-100 pb-4">
                          <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                            <img
                              src={item.product?.images?.[0] || item.image || '/placeholder.jpg'}
                              alt={item.product?.name || item.name || 'Product'}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = '/placeholder.jpg';
                              }}
                            />
                          </div>
                          <div className="ml-4 flex-grow">
                            <h4 className="font-medium text-gray-900">{item.product?.name || item.name || 'Product'}</h4>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">
                              {formatPrice((item.product?.price || item.price || 0) * (item.quantity || 0))}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-orange-800">Shipping Information</h3>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-medium">{shippingInfo.name}</p>
                      <p className="text-sm text-muted-foreground">{shippingInfo.email}</p>
                      <p className="text-sm text-muted-foreground">{shippingInfo.phone}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-orange-800">Payment Method</h3>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-medium capitalize">
                        {paymentMethod === 'card' && 'Credit/Debit Card'}
                        {paymentMethod === 'upi' && 'UPI Payment'}
                        {paymentMethod === 'wallet' && 'Digital Wallet'}
                        {paymentMethod === 'cod' && 'Cash on Delivery'}
                      </p>
                      {paymentMethod === 'card' && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Card ending in {cardInfo.cardNumber.slice(-4)}
                        </p>
                      )}
                      {paymentMethod === 'upi' && upiInfo.upiId && (
                        <p className="text-sm text-muted-foreground mt-1">
                          UPI ID: {upiInfo.upiId}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t border-orange-200 p-4 flex justify-between">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className="border-orange-300 text-orange-700 hover:bg-orange-50"
                >
                  Previous
                </Button>
                <Button
                  onClick={handlePlaceOrder}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  Place Order
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Step 4: Order Complete (This step is handled by the orderPlaced state) */}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="bg-white border border-orange-200 shadow-lg rounded-xl overflow-hidden sticky top-4">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
              <CardTitle className="text-orange-800">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (18%)</span>
                  <span className="font-medium">{formatPrice(tax)}</span>
                </div>
                {paymentMethod === 'cod' && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">COD Fee</span>
                    <span className="font-medium">{formatPrice(codFee)}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-lg font-bold text-orange-600">{formatPrice(total)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
