import { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '../components/ui/button.jsx';
import { useAuth } from '../hooks/useAuth';

const Index = () => {
    const [location, navigate] = useLocation();
    const { user } = useAuth();

    // If user is already logged in, redirect to home
    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user, navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#131A22] via-[#1a242f] to-[#e68a00] flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Background pattern for texture */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="text-center max-w-4xl relative z-10">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        Welcome to <span className="text-[#FF9900]">SureFindings</span>
                    </h1>
                    <div className="w-24 h-1 bg-[#FF9900] mx-auto mb-6 rounded-full"></div>
                </div>

                <p className="text-xl md:text-2xl text-gray-100 mb-4 max-w-3xl mx-auto leading-relaxed">
                    Your trusted online marketplace for quality products at unbeatable prices
                </p>

                <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
                    Discover thousands of products, enjoy secure shopping, and get fast delivery right to your doorstep.
                    Join millions of satisfied customers today.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                    <Link href="/register">
                        <Button className="bg-[#FF9900] hover:bg-[#e68a00] text-[#131A22] px-10 py-4 text-lg font-bold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#a88734]">
                            Register as New User
                        </Button>
                    </Link>

                    <div className="relative h-12 flex items-center">
                        <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-400"></div>
                        <span className="relative px-4 bg-[#131A22] text-gray-300 text-lg">or</span>
                    </div>

                    <Link href="/login">
                        <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#131A22] px-10 py-4 text-lg font-bold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                            Sign In to Your Account
                        </Button>
                    </Link>
                </div>

                {/* Amazon-inspired features section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                        <div className="text-4xl mb-4">🚚</div>
                        <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
                        <p className="text-gray-200">Get your orders delivered quickly with our reliable shipping partners</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                        <div className="text-4xl mb-4">🔒</div>
                        <h3 className="text-xl font-bold text-white mb-2">Secure Payments</h3>
                        <p className="text-gray-200">Shop with confidence using our secure payment gateway</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                        <div className="text-4xl mb-4">💯</div>
                        <h3 className="text-xl font-bold text-white mb-2">Quality Guaranteed</h3>
                        <p className="text-gray-200">All products come with our quality guarantee and return policy</p>
                    </div>
                </div>
            </div>

            {/* Footer-like section */}
            <div className="absolute bottom-0 left-0 right-0 py-6 text-center text-gray-400 text-sm">
                <p>© 2025 SureFindings Store. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Index;