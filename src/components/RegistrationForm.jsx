import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const RegistrationForm = ({ onRegister, error, loading }) => {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.username || !formData.email || !formData.password) {
            // Handle validation in the parent component
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            // Handle validation in the parent component
            return;
        }

        // Call the parent's register function with all user data including address
        await onRegister({
            name: formData.name,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            address: {
                street: formData.street,
                city: formData.city,
                state: formData.state,
                zipCode: formData.zipCode,
                country: formData.country
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="name" className="text-[#131921] block mb-2">Your name</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First and last name"
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
                    placeholder="At least 6 characters"
                    required
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#febd69] focus:ring-2 focus:ring-[#febd69]/50"
                />
                <p className="text-xs text-gray-500 mt-1">Passwords must be at least 6 characters.</p>
            </div>

            <div>
                <Label htmlFor="confirmPassword" className="text-[#131921] block mb-2">Re-enter password</Label>
                <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
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
                        Creating account...
                    </div>
                ) : (
                    'Create your account'
                )}
            </Button>

            <div className="text-xs text-gray-600 mt-4">
                <p>By creating an account, you agree to SureFindings' Conditions of Use and Privacy Notice.</p>
            </div>
        </form>
    );
};

export default RegistrationForm;