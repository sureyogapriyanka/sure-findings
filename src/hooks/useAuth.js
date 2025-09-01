import { useState, useEffect } from 'react';
import { getCurrentUser, updateCurrentUser } from '../lib/storage';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const currentUser = getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateUser = (updates) => {
    try {
      const updatedUser = updateCurrentUser(updates);
      setUser(updatedUser);
      return updatedUser;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };

  return {
    user,
    loading,
    updateUser,
    isLoggedIn
  };
};
