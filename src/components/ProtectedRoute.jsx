import { useEffect } from 'react';
import { useLocation, Redirect } from 'wouter';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [, navigate] = useLocation();

    // If we're still loading auth state, show nothing
    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    // If user is not authenticated, redirect to login page
    if (!user) {
        return <Redirect to="/login" />;
    }

    // If user is authenticated, render children
    return children;
};

export default ProtectedRoute;