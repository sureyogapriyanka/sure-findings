import { useState } from 'react';
import { useLocation, Redirect } from 'wouter';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Label } from '../components/ui/label.jsx';
import { useToast } from '../hooks/use-toast.js';

const Login = () => {
    const [location, navigate] = useLocation();
    const { user, login } = useAuth();
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // If user is already logged in, redirect to home
    if (user) {
        return <Redirect to="/sure-findings/home" />;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Validation
            if (!formData.username || !formData.password) {
                setError('Please enter both username and password');
                setLoading(false);
                return;
            }

            // Simulate login success regardless of credentials
            // Show success toast
            toast({
                title: "Login Successful! 🎉",
                description: "Welcome back! Redirecting to home page...",
                variant: "success", // Use the beautiful success variant
                duration: 3000,
            });

            // Small delay to show the toast before redirecting
            setTimeout(() => {
                login({ username: formData.username }).then(() => {
                    // Redirect to home page
                    navigate('/sure-findings/home');
                });
            }, 1500);
        } catch (err) {
            setError(err.message || 'Login failed');
            setLoading(false);
        }
    };

    // Demo users data
    const demoUsers = [
        {
            username: 'Bhetapudi.Manasa',
            password: '231FA07036'
        },
        {
            username: 'Sure.Yoga Priyanka',
            password: '231FA07046'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#131921] via-[#232f3e] to-[#febd69] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-[#131921] mb-2">Login</h1>
                        <p className="text-gray-600">Sign in to your account</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-md text-sm text-center">
                            {error}
                        </div>
                    )}

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

                    {/* Demo Users Section */}
                    <div className="mt-8 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                        <div className="flex items-center mb-3">
                            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-blue-800">Demo Users</h3>
                        </div>
                        <p className="text-sm text-blue-600 mb-3">Use these credentials to log in:</p>
                        <div className="space-y-3">
                            {demoUsers.map((user, index) => (
                                <div key={index} className="flex justify-between items-center p-3 bg-white rounded border border-blue-100 shadow-sm">
                                    <div>
                                        <p className="font-medium text-gray-800">{user.username}</p>
                                        <p className="text-sm text-gray-600">Password: <span className="font-mono bg-gray-100 px-1 rounded">{user.password}</span></p>
                                    </div>
                                    <Button
                                        type="button"
                                        onClick={() => setFormData({ username: user.username, password: user.password })}
                                        className="ml-2 py-1 px-3 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
                                    >
                                        Use
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 text-xs text-blue-500 italic">
                            These are demo accounts for testing purposes only.
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            type="button"
                            onClick={() => navigate('/sure-findings/register')}
                            className="text-[#131921] hover:text-[#febd69] font-medium transition-colors duration-300"
                        >
                            New customer? Create your account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;