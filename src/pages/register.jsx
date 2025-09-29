import { useState } from 'react';
import { useLocation, Redirect } from 'wouter';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Label } from '../components/ui/label.jsx';
import { useToast } from '../hooks/use-toast.js';

const Register = () => {
    const [location, navigate] = useLocation();
    const { user, register } = useAuth();
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'India'
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
            if (!formData.name || !formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
                setError('Please fill in all required fields');
                setLoading(false);
                return;
            }

            if (formData.password !== formData.confirmPassword) {
                setError('Passwords do not match');
                setLoading(false);
                return;
            }

            // Simulate registration success
            // Show success toast
            toast({
                title: "Registration Successful! 🎉",
                description: "Your account has been created successfully!",
                variant: "success",
                duration: 3000,
            });

            // Small delay to show the toast before redirecting
            setTimeout(() => {
                // After successful registration, redirect to login page
                navigate('/sure-findings/login');
            }, 1500);
        } catch (err) {
            setError(err.message || 'Registration failed');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#131921] via-[#232f3e] to-[#febd69] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-[#131921] mb-2">Create Account</h1>
                        <p className="text-gray-600">Register for a new account</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-md text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Label htmlFor="name" className="text-[#131921] block mb-2">Full Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#febd69] focus:ring-2 focus:ring-[#febd69]/50"
                            />
                        </div>

                        <div>
                            <Label htmlFor="username" className="text-[#131921] block mb-2">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Choose a username"
                                required
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#febd69] focus:ring-2 focus:ring-[#febd69]/50"
                            />
                            <p className="text-xs text-gray-500 mt-1">This will be your login ID</p>
                        </div>

                        <div>
                            <Label htmlFor="email" className="text-[#131921] block mb-2">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#febd69] focus:ring-2 focus:ring-[#febd69]/50"
                            />
                        </div>

                        <div>
                            <Label htmlFor="street" className="text-[#131921] block mb-2">Street Address</Label>
                            <Input
                                id="street"
                                name="street"
                                type="text"
                                value={formData.street}
                                onChange={handleChange}
                                placeholder="Street address"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#febd69] focus:ring-2 focus:ring-[#febd69]/50"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="city" className="text-[#131921] block mb-2">City</Label>
                                <Input
                                    id="city"
                                    name="city"
                                    type="text"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#febd69] focus:ring-2 focus:ring-[#febd69]/50"
                                />
                            </div>

                            <div>
                                <Label htmlFor="state" className="text-[#131921] block mb-2">State</Label>
                                <Input
                                    id="state"
                                    name="state"
                                    type="text"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="State"
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#febd69] focus:ring-2 focus:ring-[#febd69]/50"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="zipCode" className="text-[#131921] block mb-2">ZIP Code</Label>
                                <Input
                                    id="zipCode"
                                    name="zipCode"
                                    type="text"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    placeholder="ZIP code"
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#febd69] focus:ring-2 focus:ring-[#febd69]/50"
                                />
                            </div>

                            <div>
                                <Label htmlFor="country" className="text-[#131921] block mb-2">Country</Label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#febd69] focus:ring-2 focus:ring-[#febd69]/50"
                                >
                                    <option value="India">India</option>
                                    <option value="United States">United States</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="password" className="text-[#131921] block mb-2">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                required
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#febd69] focus:ring-2 focus:ring-[#febd69]/50"
                            />
                        </div>

                        <div>
                            <Label htmlFor="confirmPassword" className="text-[#131921] block mb-2">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
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
                                    Creating Account...
                                </div>
                            ) : (
                                'Create Account'
                            )}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <button
                            type="button"
                            onClick={() => navigate('/sure-findings/login')}
                            className="text-[#131921] hover:text-[#febd69] font-medium transition-colors duration-300"
                        >
                            Already have an account? Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;