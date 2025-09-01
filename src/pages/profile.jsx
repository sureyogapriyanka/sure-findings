import { useState } from 'react';
import { User, MapPin, CreditCard, Shield, Bell, Edit, Plus, Trash2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { addAddress,  deleteAddress } from '../lib/storage';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Switch } from '../components/ui/switch';
import { Separator } from '../components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState('personal');
  // const [editingAddress, setEditingAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    type: 'Home',
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    isDefault: false
  });
  const [personalInfo, setPersonalInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  const handlePersonalInfoUpdate = () => {
    updateUser(personalInfo);
  };

  const handleAddAddress = () => {
    addAddress({ ...newAddress, name: personalInfo.name });
    setNewAddress({
      type: 'Home',
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      country: 'United States',
      isDefault: false
    });
  };


  const handleDeleteAddress = (addressId) => {
    deleteAddress(addressId);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please sign in to view your profile</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Your Account</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  {user.name?.split(' ').map(n => n[0]).join('') || 'U'}
                </div>
                <h2 className="font-semibold text-lg" data-testid="profile-name">{user.name}</h2>
                <p className="text-muted-foreground text-sm" data-testid="profile-email">{user.email}</p>
              </div>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} orientation="vertical" className="w-full">
                <TabsList className="grid w-full grid-cols-1 h-auto">
                  <TabsTrigger value="personal" className="flex items-center justify-start w-full p-3" data-testid="tab-personal">
                    <User className="h-4 w-4 mr-2" />
                    Personal Information
                  </TabsTrigger>
                  <TabsTrigger value="addresses" className="flex items-center justify-start w-full p-3" data-testid="tab-addresses">
                    <MapPin className="h-4 w-4 mr-2" />
                    Addresses
                  </TabsTrigger>
                  <TabsTrigger value="payment" className="flex items-center justify-start w-full p-3" data-testid="tab-payment">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payment Methods
                  </TabsTrigger>
                  <TabsTrigger value="security" className="flex items-center justify-start w-full p-3" data-testid="tab-security">
                    <Shield className="h-4 w-4 mr-2" />
                    Security
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="flex items-center justify-start w-full p-3" data-testid="tab-notifications">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* Personal Information Tab */}
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={personalInfo.name}
                        onChange={(e) => setPersonalInfo(prev => ({ ...prev, name: e.target.value }))}
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={personalInfo.email}
                        onChange={(e) => setPersonalInfo(prev => ({ ...prev, email: e.target.value }))}
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={personalInfo.phone}
                        onChange={(e) => setPersonalInfo(prev => ({ ...prev, phone: e.target.value }))}
                        data-testid="input-phone"
                      />
                    </div>
                  </div>
                  <Button onClick={handlePersonalInfoUpdate} data-testid="save-personal-info">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Addresses Tab */}
            <TabsContent value="addresses">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Your Addresses</CardTitle>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button data-testid="add-address-button">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Address
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Address</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="addressType">Address Type</Label>
                            <Select
                              value={newAddress.type}
                              onValueChange={(value) => setNewAddress(prev => ({ ...prev, type: value }))}
                            >
                              <SelectTrigger data-testid="address-type">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Home">Home</SelectItem>
                                <SelectItem value="Work">Work</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="addressName">Full Name</Label>
                            <Input
                              id="addressName"
                              value={newAddress.name}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, name: e.target.value }))}
                              data-testid="address-name"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <Label htmlFor="street">Street Address</Label>
                            <Input
                              id="street"
                              value={newAddress.street}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, street: e.target.value }))}
                              data-testid="address-street"
                            />
                          </div>
                          <div>
                            <Label htmlFor="city">City</Label>
                            <Input
                              id="city"
                              value={newAddress.city}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, city: e.target.value }))}
                              data-testid="address-city"
                            />
                          </div>
                          <div>
                            <Label htmlFor="state">State</Label>
                            <Select
                              value={newAddress.state}
                              onValueChange={(value) => setNewAddress(prev => ({ ...prev, state: value }))}
                            >
                              <SelectTrigger data-testid="address-state">
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
                            <Label htmlFor="zip">ZIP Code</Label>
                            <Input
                              id="zip"
                              value={newAddress.zip}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, zip: e.target.value }))}
                              data-testid="address-zip"
                            />
                          </div>
                          <div>
                            <Label htmlFor="country">Country</Label>
                            <Select
                              value={newAddress.country}
                              onValueChange={(value) => setNewAddress(prev => ({ ...prev, country: value }))}
                            >
                              <SelectTrigger data-testid="address-country">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="United States">United States</SelectItem>
                                <SelectItem value="Canada">Canada</SelectItem>
                                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button onClick={handleAddAddress} className="w-full mt-4" data-testid="save-address">
                          Save Address
                        </Button>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {user.addresses?.map((address) => (
                    <div key={address.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold">{address.type}</span>
                            {address.isDefault && (
                              <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                                Default
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {address.name}<br />
                            {address.street}<br />
                            {address.city}, {address.state} {address.zip}<br />
                            {address.country}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            data-testid={`edit-address-${address.id}`}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeleteAddress(address.id)}
                            data-testid={`delete-address-${address.id}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {(!user.addresses || user.addresses.length === 0) && (
                    <div className="text-center py-8">
                      <MapPin className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <h3 className="font-medium mb-2">No addresses saved</h3>
                      <p className="text-muted-foreground text-sm">
                        Add an address to make checkout faster
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payment Methods Tab */}
            <TabsContent value="payment">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Payment Methods</CardTitle>
                    <Button data-testid="add-payment-button">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Payment Method
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {user.paymentMethods?.map((method) => (
                    <div key={method.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">💳</div>
                          <div>
                            <div className="font-semibold">
                              •••• •••• •••• {method.last4}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Expires {method.expiryMonth}/{method.expiryYear}
                            </div>
                          </div>
                          {method.isDefault && (
                            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                              Default
                            </span>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" data-testid={`edit-payment-${method.id}`}>
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" data-testid={`delete-payment-${method.id}`}>
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {(!user.paymentMethods || user.paymentMethods.length === 0) && (
                    <div className="text-center py-8">
                      <CreditCard className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <h3 className="font-medium mb-2">No payment methods saved</h3>
                      <p className="text-muted-foreground text-sm">
                        Add a payment method for faster checkout
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Password</h3>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">Password</div>
                        <div className="text-sm text-muted-foreground">Last changed 3 months ago</div>
                      </div>
                      <Button variant="outline" data-testid="change-password">Change</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">Two-Factor Authentication</div>
                        <div className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </div>
                      </div>
                      <Switch data-testid="two-factor-toggle" />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-4">Login Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Current Session</div>
                          <div className="text-sm text-muted-foreground">Chrome on Windows • New York, NY</div>
                        </div>
                        <span className="text-green-600 text-sm">Active now</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Email Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Order Updates</div>
                          <div className="text-sm text-muted-foreground">
                            Receive emails about your order status
                          </div>
                        </div>
                        <Switch defaultChecked data-testid="email-orders" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Promotional Emails</div>
                          <div className="text-sm text-muted-foreground">
                            Receive emails about deals and promotions
                          </div>
                        </div>
                        <Switch data-testid="email-promotions" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Product Recommendations</div>
                          <div className="text-sm text-muted-foreground">
                            Receive personalized product suggestions
                          </div>
                        </div>
                        <Switch defaultChecked data-testid="email-recommendations" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-4">Push Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Order Updates</div>
                          <div className="text-sm text-muted-foreground">
                            Get notified when your order status changes
                          </div>
                        </div>
                        <Switch defaultChecked data-testid="push-orders" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Deals & Offers</div>
                          <div className="text-sm text-muted-foreground">
                            Get notified about limited-time offers
                          </div>
                        </div>
                        <Switch data-testid="push-deals" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
