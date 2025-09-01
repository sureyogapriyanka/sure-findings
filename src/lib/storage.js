// Initialize localStorage with default data structure
export const initializeStorage = () => {
  if (!localStorage.getItem('amazonClone')) {
    const initialData = {
      currentUser: 'user1',
      users: {
        user1: {
          id: 'user1',
          name: 'John Doe',
          email: 'john.doe@email.com',
          phone: '+1 (555) 123-4567',
          addresses: [
            {
              id: 'addr1',
              type: 'Home',
              name: 'John Doe',
              street: '123 Main Street',
              city: 'New York',
              state: 'NY',
              zip: '10001',
              country: 'United States',
              isDefault: true
            }
          ],
          paymentMethods: [
            {
              id: 'card1',
              type: 'credit',
              last4: '3456',
              expiryMonth: '12',
              expiryYear: '27',
              brand: 'Visa',
              isDefault: true
            }
          ],
          cart: [],
          wishlist: [],
          orders: [],
          reviews: []
        }
      }
    };
    localStorage.setItem('amazonClone', JSON.stringify(initialData));
  }
};

export const getStorageData = () => {
  initializeStorage();
  return JSON.parse(localStorage.getItem('amazonClone'));
};

export const setStorageData = (data) => {
  localStorage.setItem('amazonClone', JSON.stringify(data));
};

export const getCurrentUser = () => {
  const data = getStorageData();
  return data.users[data.currentUser];
};

export const updateCurrentUser = (updates) => {
  const data = getStorageData();
  data.users[data.currentUser] = { ...data.users[data.currentUser], ...updates };
  setStorageData(data);
  return data.users[data.currentUser];
};

// Cart operations
export const addToCart = (productId, quantity = 1, options = {}) => {
  const data = getStorageData();
  const user = data.users[data.currentUser];
  
  const existingItem = user.cart.find(item => 
    item.productId === productId && 
    JSON.stringify(item.options) === JSON.stringify(options)
  );
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    user.cart.push({
      id: Date.now().toString(),
      productId,
      quantity,
      options,
      addedAt: new Date().toISOString()
    });
  }
  
  setStorageData(data);
  return user.cart;
};

export const updateCartItemQuantity = (itemId, quantity) => {
  const data = getStorageData();
  const user = data.users[data.currentUser];
  
  if (quantity <= 0) {
    user.cart = user.cart.filter(item => item.id !== itemId);
  } else {
    const item = user.cart.find(item => item.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  }
  
  setStorageData(data);
  return user.cart;
};

export const removeFromCart = (itemId) => {
  const data = getStorageData();
  const user = data.users[data.currentUser];
  user.cart = user.cart.filter(item => item.id !== itemId);
  setStorageData(data);
  return user.cart;
};

export const clearCart = () => {
  const data = getStorageData();
  const user = data.users[data.currentUser];
  user.cart = [];
  setStorageData(data);
  return user.cart;
};

// Wishlist operations
export const addToWishlist = (productId) => {
  const data = getStorageData();
  const user = data.users[data.currentUser];
  
  if (!user.wishlist.includes(productId)) {
    user.wishlist.push(productId);
    setStorageData(data);
  }
  
  return user.wishlist;
};

export const removeFromWishlist = (productId) => {
  const data = getStorageData();
  const user = data.users[data.currentUser];
  user.wishlist = user.wishlist.filter(id => id !== productId);
  setStorageData(data);
  return user.wishlist;
};

// Order operations
export const createOrder = (orderData) => {
  const data = getStorageData();
  const user = data.users[data.currentUser];
  
  const order = {
    id: Date.now().toString(),
    number: `111-${Math.random().toString().substr(2, 7)}-${Math.random().toString().substr(2, 7)}`,
    date: new Date().toISOString(),
    status: 'Processing',
    tracking: {
      current: 'processing',
      steps: [
        { name: 'Order placed', status: 'completed', date: new Date().toISOString() },
        { name: 'Processing', status: 'current', date: null },
        { name: 'Shipped', status: 'pending', date: null },
        { name: 'Delivered', status: 'pending', date: null }
      ]
    },
    ...orderData
  };
  
  user.orders.unshift(order);
  setStorageData(data);
  return order;
};

export const updateOrderStatus = (orderId, status, trackingStep = null) => {
  const data = getStorageData();
  const user = data.users[data.currentUser];
  const order = user.orders.find(o => o.id === orderId);
  
  if (order) {
    order.status = status;
    if (trackingStep) {
      const stepIndex = order.tracking.steps.findIndex(s => s.name.toLowerCase() === trackingStep.toLowerCase());
      if (stepIndex !== -1) {
        order.tracking.steps[stepIndex].status = 'completed';
        order.tracking.steps[stepIndex].date = new Date().toISOString();
        order.tracking.current = trackingStep.toLowerCase();
        
        // Update subsequent step to current if exists
        if (stepIndex + 1 < order.tracking.steps.length) {
          order.tracking.steps[stepIndex + 1].status = 'current';
          order.tracking.current = order.tracking.steps[stepIndex + 1].name.toLowerCase();
        }
      }
    }
    setStorageData(data);
  }
  
  return order;
};

// Review operations
export const addReview = (productId, review) => {
  const data = getStorageData();
  const user = data.users[data.currentUser];
  
  const newReview = {
    id: Date.now().toString(),
    productId,
    userId: user.id,
    userName: user.name,
    rating: review.rating,
    title: review.title,
    content: review.content,
    date: new Date().toISOString(),
    verified: true,
    helpful: 0
  };
  
  user.reviews.push(newReview);
  setStorageData(data);
  return newReview;
};

// Address operations
export const addAddress = (address) => {
  const data = getStorageData();
  const user = data.users[data.currentUser];
  
  const newAddress = {
    id: Date.now().toString(),
    ...address
  };
  
  if (address.isDefault) {
    user.addresses.forEach(addr => addr.isDefault = false);
  }
  
  user.addresses.push(newAddress);
  setStorageData(data);
  return newAddress;
};

export const updateAddress = (addressId, updates) => {
  const data = getStorageData();
  const user = data.users[data.currentUser];
  const addressIndex = user.addresses.findIndex(addr => addr.id === addressId);
  
  if (addressIndex !== -1) {
    if (updates.isDefault) {
      user.addresses.forEach(addr => addr.isDefault = false);
    }
    user.addresses[addressIndex] = { ...user.addresses[addressIndex], ...updates };
    setStorageData(data);
  }
  
  return user.addresses[addressIndex];
};

export const deleteAddress = (addressId) => {
  const data = getStorageData();
  const user = data.users[data.currentUser];
  user.addresses = user.addresses.filter(addr => addr.id !== addressId);
  setStorageData(data);
  return user.addresses;
};
