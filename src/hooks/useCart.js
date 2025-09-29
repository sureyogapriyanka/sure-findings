import { useState, useEffect } from 'react';
import api from '../services/api.js'; // Using mock API service with localStorage

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshCart = async () => {
    try {
      setLoading(true);
      const response = await api.getCart();
      console.log('Cart data received:', response);
      // Filter out items with invalid product data
      const validItems = (response.items || []).filter(item =>
        item.product ||
        item.name // Items from mock API have name instead of product
      );
      setCart(validItems);
    } catch (error) {
      console.error('Error loading cart:', error);
      // Try to get cart directly from localStorage as fallback
      try {
        // First try the storage service format
        const storageData = JSON.parse(localStorage.getItem('ecommerce_app_data') || '{}');
        if (storageData.cart) {
          setCart(storageData.cart);
          return;
        }

        // Then try direct cart format
        const directCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(directCart);
      } catch (localStorageError) {
        console.error('Error loading cart from localStorage:', localStorageError);
        // Set cart to empty array on error
        setCart([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const addItem = async (productId, quantity = 1, options = {}) => {
    try {
      console.log('Adding item to cart:', { productId, quantity, options });
      
      // Ensure we're using the mock API service
      if (!api || typeof api.addToCart !== 'function') {
        throw new Error('API service not properly configured');
      }
      
      const response = await api.addToCart(productId, quantity, options);
      console.log('Add to cart response:', response);

      // Refresh the cart to get updated data
      await refreshCart();
      return response;
    } catch (error) {
      console.error('Error adding to cart:', error);
      
      // Fallback to localStorage if API fails
      try {
        const STORAGE_KEY = 'ecommerce_app_data';
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

        if (!data.cart) {
          data.cart = [];
        }

        const existingItemIndex = data.cart.findIndex(item => item.productId === productId);
        if (existingItemIndex >= 0) {
          data.cart[existingItemIndex].quantity += quantity;
        } else {
          // Get product info from local products
          const productsModule = await import('../../products.js');
          const products = productsModule.default || productsModule.products;
          const product = products.find(p => p.id === productId);

          if (product) {
            data.cart.push({
              id: Date.now().toString(),
              productId,
              name: product.name,
              price: product.price,
              quantity,
              image: product.images[0],
              options
            });
          }
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        await refreshCart();
        return data;
      } catch (fallbackError) {
        console.error('Error in localStorage fallback:', fallbackError);
        throw new Error('Failed to add item to cart. Please try again.');
      }
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    try {
      // Don't update if quantity is less than 1
      if (quantity < 1) {
        await removeItem(itemId);
        return;
      }

      const response = await api.updateCartItem(itemId, quantity);
      console.log('Update cart item response:', response);

      // Refresh the cart to get updated data
      await refreshCart();
      return response;
    } catch (error) {
      console.error('Error updating cart quantity:', error);
      throw new Error('Failed to update cart item. Please try again.');
    }
  };

  const removeItem = async (itemId) => {
    try {
      console.log('Removing item from cart:', itemId);
      const response = await api.removeFromCart(itemId);
      console.log('Remove from cart response:', response);

      // Refresh the cart to get updated data
      await refreshCart();
      return response;
    } catch (error) {
      console.error('Error removing from cart:', error);
      
      // Even if there's an error, try to refresh the cart
      try {
        await refreshCart();
      } catch (refreshError) {
        console.error('Error refreshing cart after removal:', refreshError);
      }
      throw new Error('Failed to remove item from cart. Please try again.');
    }
  };

  const clear = async () => {
    try {
      const response = await api.clearCart();

      // Refresh the cart to get updated data
      await refreshCart();
      return response;
    } catch (error) {
      console.error('Error clearing cart:', error);
      throw new Error('Failed to clear cart. Please try again.');
    }
  };

  const getCartItems = async () => {
    // The cart items already contain product details from the mock API
    // We just need to calculate the total price for each item
    const cartItemsWithTotals = cart.map((item) => {
      // For mock API items, price is directly on the item
      const price = item.product ? item.product.price : item.price;
      const totalPrice = price ? price * item.quantity : 0;
      return {
        ...item,
        totalPrice
      };
    });

    return cartItemsWithTotals;
  };

  const getCartTotal = async () => {
    const items = await getCartItems();
    return items.reduce((total, item) => total + (item.totalPrice || 0), 0);
  };

  const getCartItemCount = () => {
    try {
      return cart.reduce((count, item) => count + item.quantity, 0);
    } catch (error) {
      console.error('Error calculating cart item count:', error);
      // Fallback to direct localStorage access
      try {
        // First try the storage service format
        const storageData = JSON.parse(localStorage.getItem('ecommerce_app_data') || '{}');
        if (storageData.cart) {
          return storageData.cart.reduce((count, item) => count + (item.quantity || 0), 0);
        }

        // Then try direct cart format
        const directCart = JSON.parse(localStorage.getItem('cart') || '[]');
        return directCart.reduce((count, item) => count + (item.quantity || 0), 0);
      } catch (localStorageError) {
        console.error('Fallback error calculating cart item count:', localStorageError);
        return 0;
      }
    }
  };

  const getCartSubtotal = async () => {
    return await getCartTotal();
  };

  const getCartTax = async () => {
    const subtotal = await getCartSubtotal();
    return subtotal * 0.08; // 8% tax
  };

  const getCartGrandTotal = async () => {
    const subtotal = await getCartSubtotal();
    const tax = await getCartTax();
    return subtotal + tax;
  };

  return {
    cart,
    loading,
    addItem,
    updateQuantity,
    removeItem,
    clear,
    getCartItems,
    getCartTotal,
    getCartItemCount,
    getCartSubtotal,
    getCartTax,
    getCartGrandTotal,
    refreshCart
  };
};