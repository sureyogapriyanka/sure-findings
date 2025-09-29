import { useState, useEffect } from 'react';
import api from '../services/api.js';

export const useWishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const refreshWishlist = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.getWishlist();
            // For mock API, response is directly the wishlist array
            setWishlist(Array.isArray(response) ? response : (response.items || []));
        } catch (err) {
            console.error('Error loading wishlist:', err);
            setError(err.message || 'Failed to load wishlist');
            // Only set wishlist to empty array if it's not a network connectivity issue
            // This prevents clearing the wishlist UI when the backend is down
            if (!err.message || !err.message.includes('connect')) {
                setWishlist([]);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refreshWishlist();
    }, []);

    const addToWishlist = async (productId) => {
        try {
            const response = await api.addToWishlist(productId);
            // For mock API, response is directly the wishlist array
            setWishlist(Array.isArray(response) ? response : (response.items || []));
            return response;
        } catch (error) {
            console.error('Error adding to wishlist:', error);
            throw error;
        }
    };

    const removeFromWishlist = async (itemId) => {
        try {
            const response = await api.removeFromWishlist(itemId);
            // For mock API, response is directly the wishlist array
            setWishlist(Array.isArray(response) ? response : (response.items || []));
            return response;
        } catch (error) {
            console.error('Error removing from wishlist:', error);
            throw error;
        }
    };

    const toggleWishlist = async (productId) => {
        try {
            if (isInWishlist(productId)) {
                await removeFromWishlist(productId);
            } else {
                await addToWishlist(productId);
            }
            // Refresh the wishlist after toggle
            await refreshWishlist();
        } catch (error) {
            console.error('Error toggling wishlist:', error);
            throw error;
        }
    };

    const isInWishlist = (productId) => {
        return wishlist.some(item =>
            item === productId || // For mock API, wishlist items are just product IDs
            item.product?.id === productId ||
            item.id === productId
        );
    };

    return {
        wishlist,
        loading,
        error,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        refreshWishlist
    };
};