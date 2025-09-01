import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { CreditCard, MapPin, Truck, CheckCircle } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { createOrder} from '../lib/storage';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Separator } from '../components/ui/separator';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
// import { Checkbox } from '../components/ui/checkbox';

const Checkout = () => {
  const [, navigate] = useLocation();
  const { getCartItems, getCartSubtotal, getCartTax, getCartGrandTotal, clear } = useCart();
  const { user } = useAuth();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping address
    selectedAddressId: user?.addresses?.[0]?.id || '',
    newAddress: {
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'United States',
      isDefault: false
    },
    // Delivery options
    shippingMethod: 'standard',
    // Payment
    paymentMethod: 'card',
    cardInfo: {
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
      cardholderName: '',
      saveCard: false
    },
    // Billing
    billingAddressSame: true,
    billingAddress: {}
  });

  const cartItems = getCartItems();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        items: cartItems.map(item => ({
          productId: item.productId,
          productName: item.product.name,
          quantity: item.quantity,
          price: item.product.price,
          options: item.options,
          image: item.product.images[0]
        }))
      };

      const order = createOrder(orderData);
      clear();
      navigate(`/orders?new=${order.id}`);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const getStepStatus = (stepNumber) => {
    if (stepNumber < step) return 'completed';
    if (stepNumber === step) return 'current';
    return 'pending';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-2xl">
          {[1, 2, 3].map((stepNumber) => {
            const status = getStepStatus(stepNumber);
            const stepNames = ['Shipping', 'Payment', 'Review'];
            
            return (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  status === 'completed' ? 'bg-green-600 text-white' :
                  status === 'current' ? 'bg-primary text-primary-foreground' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {status === 'completed' ? <CheckCircle className="h-4 w-4" /> : stepNumber}
                </div>
                <span className={`ml-2 text-sm ${status === 'current' ? 'font-medium' : 'text-muted-foreground'}`}>
                  {stepNames[stepNumber - 1]}
                </span>
                {stepNumber < 3 && (
                  <div className={`flex-1 border-t-2 mx-4 ${
                    status === 'completed' ? 'border-green-600' : 'border-muted'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Step 1: Shipping Address */}
          {step === 1 && (
            <div className="bg-card rounded-lg shadow-sm border border-border p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <h2 className="text-xl font-bold">Shipping Address</h2>
              </div>
              
              {/* Saved Addresses */}
              {user?.addresses && user.addresses.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Choose from saved addresses:</h3>
                  <RadioGroup
                    value={formData.selectedAddressId}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, selectedAddressId: value }))}
                    className="space-y-3"
                  >
                    {user.addresses.map((address) => (
                      <div key={address.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                        <RadioGroupItem value={address.id} id={address.id} className="mt-1" />
                        <Label htmlFor={address.id} className="flex-1 cursor-pointer">
                          <div className="font-medium">{address.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {address.street}<br />
                            {address.city}, {address.state} {address.zip}<br />
                            {address.country}
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}
              
              {/* New Address Form */}
              <div>
                <h3 className="font-medium mb-3">Or add a new address:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.newAddress.firstName}
                      onChange={(e) => handleInputChange('newAddress', 'firstName', e.target.value)}
                      data-testid="shipping-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.newAddress.lastName}
                      onChange={(e) => handleInputChange('newAddress', 'lastName', e.target.value)}
                      data-testid="shipping-last-name"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="street">Address</Label>
                    <Input
                      id="street"
                      value={formData.newAddress.street}
                      onChange={(e) => handleInputChange('newAddress', 'street', e.target.value)}
                      data-testid="shipping-street"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.newAddress.city}
                      onChange={(e) => handleInputChange('newAddress', 'city', e.target.value)}
                      data-testid="shipping-city"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Select
                      value={formData.newAddress.state}
                      onValueChange={(value) => handleInputChange('newAddress', 'state', value)}
                    >
                      <SelectTrigger data-testid="shipping-state">
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                        <SelectItem value="FL">Florida</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={formData.newAddress.zipCode}
                      onChange={(e) => handleInputChange('newAddress', 'zipCode', e.target.value)}
                      data-testid="shipping-zip"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  onClick={() => setStep(2)}
                  data-testid="continue-to-payment"
                >
                  Continue to Payment
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Delivery Options */}
              <div className="bg-card rounded-lg shadow-sm border border-border p-6">
                <div className="flex items-center mb-4">
                  <Truck className="h-5 w-5 mr-2" />
                  <h2 className="text-xl font-bold">Delivery Options</h2>
                </div>
                <RadioGroup
                  value={formData.shippingMethod}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, shippingMethod: value }))}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex-1 cursor-pointer">
                      <div className="font-medium">Standard Delivery</div>
                      <div className="text-sm text-muted-foreground">5-7 business days</div>
                    </Label>
                    <span className="font-medium text-green-600">FREE</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="flex-1 cursor-pointer">
                      <div className="font-medium">Express Delivery</div>
                      <div className="text-sm text-muted-foreground">2-3 business days</div>
                    </Label>
                    <span className="font-medium">$9.99</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <RadioGroupItem value="overnight" id="overnight" />
                    <Label htmlFor="overnight" className="flex-1 cursor-pointer">
                      <div className="font-medium">Overnight Delivery</div>
                      <div className="text-sm text-muted-foreground">Next business day</div>
                    </Label>
                    <span className="font-medium">$24.99</span>
                  </div>
                </RadioGroup>
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-lg shadow-sm border border-border p-6">
                <div className="flex items-center mb-4">
                  <CreditCard className="h-5 w-5 mr-2" />
                  <h2 className="text-xl font-bold">Payment Information</h2>
                </div>
                
                <div className="space-y-4">
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, paymentMethod: value }))}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center cursor-pointer">
                        <span className="text-2xl mr-2">💳</span>
                        <span>Credit/Debit Card</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex items-center cursor-pointer">
                        <span className="text-2xl mr-2">💰</span>
                        <span>PayPal</span>
                      </Label>
                    </div>
                  </RadioGroup>

                  {formData.paymentMethod === 'card' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="md:col-span-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardInfo.cardNumber}
                          onChange={(e) => handleInputChange('cardInfo', 'cardNumber', e.target.value)}
                          data-testid="card-number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="expiryMonth">Expiry Month</Label>
                        <Select
                          value={formData.cardInfo.expiryMonth}
                          onValueChange={(value) => handleInputChange('cardInfo', 'expiryMonth', value)}
                        >
                          <SelectTrigger data-testid="expiry-month">
                            <SelectValue placeholder="Month" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 12 }, (_, i) => (
                              <SelectItem key={i + 1} value={(i + 1).toString().padStart(2, '0')}>
                                {(i + 1).toString().padStart(2, '0')}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="expiryYear">Expiry Year</Label>
                        <Select
                          value={formData.cardInfo.expiryYear}
                          onValueChange={(value) => handleInputChange('cardInfo', 'expiryYear', value)}
                        >
                          <SelectTrigger data-testid="expiry-year">
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 10 }, (_, i) => {
                              const year = new Date().getFullYear() + i;
                              return (
                                <SelectItem key={year} value={year.toString()}>
                                  {year}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={formData.cardInfo.cvv}
                          onChange={(e) => handleInputChange('cardInfo', 'cvv', e.target.value)}
                          data-testid="cvv"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardholderName">Cardholder Name</Label>
                        <Input
                          id="cardholderName"
                          placeholder={formData.selectedAddressId && formData.selectedAddressId.toLowerCase().includes('manasa') ? 'Bhetapudi Manasa' : 'Sure youga Priyanka'}
                          value={formData.cardInfo.cardholderName}
                          onChange={(e) => handleInputChange('cardInfo', 'cardholderName', e.target.value)}
                          data-testid="cardholder-name"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back to Shipping
                </Button>
                <Button onClick={() => setStep(3)} data-testid="continue-to-review">
                  Review Order
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div className="bg-card rounded-lg shadow-sm border border-border p-6">
              <h2 className="text-xl font-bold mb-4">Review Your Order</h2>
              
              <div className="space-y-6">
                {/* Order Items */}
                <div>
                  <h3 className="font-medium mb-3">Items</h3>
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-sm">{item.product.name}</div>
                          <div className="text-xs text-muted-foreground">Qty: {item.quantity}</div>
                        </div>
                        <div className="text-sm font-medium">
                          {formatPrice(item.totalPrice)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h3 className="font-medium mb-2">Shipping Address</h3>
                  <div className="text-sm text-muted-foreground">
                    {user?.addresses?.find(addr => addr.id === formData.selectedAddressId)?.street || formData.newAddress.street}<br />
                    {user?.addresses?.find(addr => addr.id === formData.selectedAddressId)?.city || formData.newAddress.city}, {user?.addresses?.find(addr => addr.id === formData.selectedAddressId)?.state || formData.newAddress.state}
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="font-medium mb-2">Payment Method</h3>
                  <div className="text-sm text-muted-foreground">
                    {formData.paymentMethod === 'card' ? 'Credit/Debit Card' : 'PayPal'}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back to Payment
                </Button>
                <Button 
                  onClick={handlePlaceOrder}
                  className="bg-amazon-orange hover:bg-orange-600 text-gray-800"
                  data-testid="place-order"
                >
                  Place Your Order
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg shadow-sm border border-border p-6 sticky top-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            {/* Order Items Summary */}
            <div className="space-y-4 mb-6">
              {cartItems.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img 
                    src={item.product.images[0]} 
                    alt={item.product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.product.name}</div>
                    <div className="text-xs text-muted-foreground">Qty: {item.quantity}</div>
                  </div>
                  <div className="text-sm font-medium">{formatPrice(item.totalPrice)}</div>
                </div>
              ))}
              {cartItems.length > 3 && (
                <div className="text-sm text-muted-foreground">
                  +{cartItems.length - 3} more items
                </div>
              )}
            </div>
            
            {/* Pricing Breakdown */}
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span>Items:</span>
                <span>{formatPrice(getCartSubtotal())}</span>
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
                <span>{formatPrice(getCartTax())}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Order total:</span>
                <span className="text-primary">{formatPrice(getCartGrandTotal())}</span>
              </div>
            </div>
            
            {/* Security Notice */}
            <div className="text-xs text-muted-foreground text-center">
              🔒 Your order is protected by 256-bit SSL encryption
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
