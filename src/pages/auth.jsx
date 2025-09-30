import { useState, useEffect } from 'react';
import { Link, useLocation, Redirect } from 'wouter';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Label } from '../components/ui/label.jsx';
import RegistrationForm from '../components/RegistrationForm';

const Auth = () => {
    const [location, navigate] = useLocation();
    const { user, login, register } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Check URL parameters to determine initial mode
    useEffect(() => {
        const urlParams = new URLSearchParams(location.split('?')[1]);
        const mode = urlParams.get('mode');

        if (mode === 'register') {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [location]);

    // If user is already logged in, redirect to home
    if (user) {
        return <Redirect to="/sure-findings/home" />;
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        setError('');
    };

    const handleLogin = async (credentials) => {
        try {
            await login(credentials);
            navigate('/sure-findings/home');
        } catch (err) {
            setError(err.message || 'Login failed');
        }
    };

    const handleRegister = async (userData) => {
        setLoading(true);
        setError('');

        try {
            await register(userData);
            navigate('/sure-findings/home');
        } catch (err) {
            setError(err.message || 'Registration failed');
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Login validation
            if (!formData.username || !formData.password) {
                setError('Please enter both username and password');
                setLoading(false);
                return;
            }

            // Login
            await handleLogin({
                username: formData.username,
                password: formData.password
            });
        } catch (err) {
            setError(err.message || 'Login failed');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#131921] via-[#232f3e] to-[#febd69] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-[#131921] mb-2">
                            {isLogin ? 'Login' : 'Create account'}
                        </h1>
                        <p className="text-gray-600">
                            {isLogin ? 'Sign in to your account' : 'Create a new account'}
                        </p>
                    </div>

                    {error && (
                        <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-md text-sm text-center">
                            {error}
                        </div>
                    )}

                    {isLogin ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Label htmlFor="username" className="text-[#131921] block mb-2">Username</Label>
                                <Input
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Enter your username"
                                    required
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#febd69] focus:ring-2 focus:ring-[#febd69]/50"
                                />
                            </div>

                            <div>
                                <Label htmlFor="password" className="text-[#131921] block mb-2">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#febd69] focus:ring-2 focus:ring-[#febd69]/50"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="rememberMe"
                                        name="rememberMe"
                                        type="checkbox"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-[#febd69] focus:ring-[#febd69] border-gray-300 rounded"
                                    />
                                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                                        Keep me signed in
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-[#131921] hover:text-[#febd69]">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full py-3 text-lg bg-gradient-to-r from-[#131921] to-[#232f3e] hover:from-[#232f3e] hover:to-[#131921] text-white rounded-lg shadow-lg transition-all duration-300"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Signing in...
                                    </div>
                                ) : (
                                    'Login'
                                )}
                            </Button>
                        </form>
                    ) : (
                        <RegistrationForm
                            onRegister={handleRegister}
                            error={error}
                            loading={loading}
                        />
                    )}

                    <div className="mt-6 text-center">
                        <button
                            type="button"
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setError('');
                                setFormData({
                                    username: '',
                                    password: '',
                                    rememberMe: false
                                });
                                const newMode = isLogin ? 'register' : 'login';
                                navigate(`/auth?mode=${newMode}`);
                            }}
                            className="text-[#131921] hover:text-[#febd69] font-medium transition-colors duration-300"
                        >
                            {isLogin
                                ? "New customer? Create your account"
                                : "Already have an account? Sign in"}
                        </button>
                    </div>

                    <div className="mt-4 text-center">
                        <button
                            type="button"
                            onClick={() => navigate('/sure-findings/')}
                            className="text-[#131921] hover:text-[#febd69] text-sm transition-colors duration-300 flex items-center justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </button>
                    </div>

                    <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h3 className="font-bold text-[#131921] mb-2">Demo Credentials</h3>
                        <div className="text-xs space-y-1">
                            <div className="flex justify-between">
                                <span>Username:</span>
                                <span className="font-mono">sureyogapriyanka</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Password:</span>
                                <span className="font-mono">231FA07046</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;