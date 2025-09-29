// Storage service using localStorage instead of backend APIs
const STORAGE_KEY = 'ecommerce_app_data';

export const initializeStorage = () => {
  // Initialize localStorage with default data if not present
  if (!localStorage.getItem(STORAGE_KEY)) {
    const defaultData = {
      currentUser: null,
      users: [
        {
          id: '1',
          username: 'Bhetapudi.Manasa',
          email: 'bhetapudi.manasa@example.com',
          password: '231FA07036',
          role: 'user',
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          username: 'Sure.Yoga Priyanka',
          email: 'sure.yoga.priyanka@example.com',
          password: '231FA07046',
          role: 'user',
          createdAt: new Date().toISOString()
        }
      ],
      cart: [], // Start with empty cart
      wishlist: [],
      orders: [],
      addresses: []
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
  }
  return Promise.resolve();
};

export const getStorageData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return Promise.resolve(data ? JSON.parse(data) : {});
};

export const setStorageData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return Promise.resolve();
};

export const getCurrentUser = () => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  return data.currentUser || null;
};

export const updateCurrentUser = (updates) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  data.currentUser = { ...data.currentUser, ...updates };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return Promise.resolve(data.currentUser);
};

// Cart operations using localStorage
export const addToCart = async (productId, quantity = 1, options = {}) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const existingItemIndex = data.cart.findIndex(item => item.productId === productId);

  if (existingItemIndex >= 0) {
    data.cart[existingItemIndex].quantity += quantity;
  } else {
    data.cart.push({
      id: Date.now().toString(),
      productId,
      quantity,
      ...options
    });
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data.cart;
};

export const updateCartItemQuantity = async (itemId, quantity) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const itemIndex = data.cart.findIndex(item => item.id === itemId);

  if (itemIndex >= 0) {
    if (quantity <= 0) {
      data.cart.splice(itemIndex, 1);
    } else {
      data.cart[itemIndex].quantity = quantity;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  // Filter out items with invalid data
  const validCart = data.cart.filter(item =>
    item.productId &&
    item.quantity &&
    item.quantity > 0
  );

  return validCart;
};

export const removeFromCart = async (itemId) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const itemIndex = data.cart.findIndex(item => item.id === itemId);

  if (itemIndex >= 0) {
    data.cart.splice(itemIndex, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  // Filter out items with invalid data
  const validCart = data.cart.filter(item =>
    item.productId &&
    item.quantity &&
    item.quantity > 0
  );

  return validCart;
};

export const clearCart = async () => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  data.cart = [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data.cart;
};

// Wishlist operations using localStorage
export const addToWishlist = async (productId) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const existingItem = data.wishlist.find(item => item.productId === productId);

  if (!existingItem) {
    data.wishlist.push({
      id: Date.now().toString(),
      productId
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  return data.wishlist;
};

export const removeFromWishlist = async (productId) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  data.wishlist = data.wishlist.filter(item => item.productId !== productId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data.wishlist;
};

// Order operations using localStorage
export const createOrder = async (orderData) => {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

    // Initialize orders array if it doesn't exist
    if (!data.orders) {
      data.orders = [];
    }

    const order = {
      id: 'ORD' + Date.now().toString().slice(-6),
      ...orderData,
      createdAt: new Date().toISOString(),
      status: orderData.status || 'pending'
    };

    data.orders.push(order);
    data.cart = []; // Clear cart after order creation
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    return order;
  } catch (error) {
    throw error;
  }
};

export const updateOrderStatus = async (orderId, status, trackingStep = null) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  // Initialize orders array if it doesn't exist
  if (!data.orders) {
    data.orders = [];
  }

  const order = data.orders.find(o => o.id === orderId);

  if (order) {
    order.status = status;
    if (trackingStep) {
      order.trackingStep = trackingStep;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  return order || null;
};

// Review operations using localStorage
export const addReview = async (productId, review) => {
  // In a real app, this would be stored with the product
  // For now, we'll just return the review
  return { productId, ...review, id: Date.now().toString() };
};

// Address operations using localStorage
export const addAddress = async (address) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  // Initialize addresses array if it doesn't exist
  if (!data.addresses) {
    data.addresses = [];
  }

  const newAddress = { id: Date.now().toString(), ...address };
  data.addresses.push(newAddress);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return newAddress;
};

export const updateAddress = async (addressId, updates) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const addressIndex = data.addresses.findIndex(addr => addr.id === addressId);

  if (addressIndex >= 0) {
    data.addresses[addressIndex] = { ...data.addresses[addressIndex], ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data.addresses[addressIndex];
  }

  return null;
};

export const deleteAddress = async (addressId) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  data.addresses = data.addresses.filter(addr => addr.id !== addressId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data.addresses;
};