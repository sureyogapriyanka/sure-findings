import { useState, useEffect } from 'react';
import { getCurrentUser, addToCart, updateCartItemQuantity, removeFromCart, clearCart } from '../lib/storage';
import { getProductById } from '../lib/products';

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshCart = () => {
    try {
      const user = getCurrentUser();
      setCart(user.cart || []);
    } catch (error) {
      console.error('Error loading cart:', error);
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const addItem = (productId, quantity = 1, options = {}) => {
    try {
      const updatedCart = addToCart(productId, quantity, options);
      setCart(updatedCart);
      return updatedCart;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  };

  const updateQuantity = (itemId, quantity) => {
    try {
      const updatedCart = updateCartItemQuantity(itemId, quantity);
      setCart(updatedCart);
      return updatedCart;
    } catch (error) {
      console.error('Error updating cart quantity:', error);
      throw error;
    }
  };

  const removeItem = (itemId) => {
    try {
      const updatedCart = removeFromCart(itemId);
      setCart(updatedCart);
      return updatedCart;
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  };

  const clear = () => {
    try {
      const updatedCart = clearCart();
      setCart(updatedCart);
      return updatedCart;
    } catch (error) {
      console.error('Error clearing cart:', error);
      throw error;
    }
  };

  const getCartItems = () => {
    return cart.map(item => {
      const product = getProductById(item.productId);
      return {
        ...item,
        product,
        totalPrice: product ? product.price * item.quantity : 0
      };
    });
  };

  const getCartTotal = () => {
    return getCartItems().reduce((total, item) => total + (item.totalPrice || 0), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const getCartSubtotal = () => {
    return getCartTotal();
  };

  const getCartTax = () => {
    return getCartSubtotal() * 0.08; // 8% tax
  };

  const getCartGrandTotal = () => {
    return getCartSubtotal() + getCartTax();
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
