import { useState, useEffect } from 'react';
import api from '../services/api.js';
import { useLocation } from 'wouter';
import * as storage from '../lib/storage.js';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check if we have a user in localStorage (from a previous login)
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          // If we have a stored user, set it as the current user
          const userData = JSON.parse(storedUser);
          setUser(userData);

          // Also update the currentUser in the storage service
          const storageData = await storage.getStorageData();
          storageData.currentUser = userData;
          await storage.setStorageData(storageData);
        }
      } catch (error) {
        // If there's an error parsing, clear the stored user
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (credentials) => {
    try {
      // Simulate login without actually calling the backend
      // Create a mock user object
      const mockUser = {
        id: Date.now(),
        username: credentials.username,
        email: `${credentials.username}@example.com`,
        name: credentials.username
      };

      // Store user in localStorage
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);

      // Also update the currentUser in the storage service
      const storageData = await storage.getStorageData();
      storageData.currentUser = mockUser;
      await storage.setStorageData(storageData);

      // Return mock response
      return {
        data: {
          token: 'mock-token-' + Date.now(),
          user: mockUser
        }
      };
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      // Simulate registration without actually calling the backend
      // Create a mock user object
      const mockUser = {
        id: Date.now(),
        username: userData.username,
        email: userData.email,
        name: userData.name || userData.username
      };

      // Store user in localStorage
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);

      // Also update the currentUser in the storage service
      const storageData = await storage.getStorageData();
      storageData.currentUser = mockUser;
      await storage.setStorageData(storageData);

      // Return mock response
      return {
        data: {
          token: 'mock-token-' + Date.now(),
          user: mockUser
        }
      };
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    // Clear user from localStorage
    localStorage.removeItem('user');
    setUser(null);

    // Also clear the currentUser from the storage service
    storage.getStorageData().then(storageData => {
      storageData.currentUser = null;
      storage.setStorageData(storageData);
    });

    // Redirect to index page
    setLocation('/');
  };

  const updateProfile = async (userData) => {
    try {
      // Update the user data in localStorage
      const updatedUser = { ...user, ...userData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);

      // Also update the currentUser in the storage service
      const storageData = await storage.getStorageData();
      storageData.currentUser = updatedUser;
      await storage.setStorageData(storageData);

      return {
        data: {
          user: updatedUser
        }
      };
    } catch (error) {
      throw error;
    }
  };

  return {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user
  };
};