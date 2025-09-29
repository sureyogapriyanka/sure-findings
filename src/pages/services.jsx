import { Link } from 'wouter';
import Header from '../components/Header';
import { Button } from '../components/ui/button';

const Services = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <div className="bg-[#131A22] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive solutions designed to enhance your shopping experience and business success
                    </p>
                </div>
            </div>

            {/* Main Services */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#131A22]">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                            <div className="bg-[#FF9900] h-2"></div>
                            <div className="p-8">
                                <div className="text-4xl mb-4 text-[#FF9900]">🛒</div>
                                <h3 className="text-xl font-bold mb-3 text-[#131A22]">Online Marketplace</h3>
                                <p className="text-gray-600 mb-4">
                                    Access thousands of quality products from trusted sellers across various categories.
                                    Enjoy competitive prices and fast delivery.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-[#FF9900] mr-2">✓</span>
                                        <span>Wide product selection</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FF9900] mr-2">✓</span>
                                        <span>Secure payment options</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FF9900] mr-2">✓</span>
                                        <span>Fast & reliable shipping</span>
                                    </li>
                                </ul>
                                <Button className="bg-[#FF9900] hover:bg-[#E68A00] text-[#131A22] font-bold px-4 py-2 rounded">
                                    Shop Now
                                </Button>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                            <div className="bg-[#FF9900] h-2"></div>
                            <div className="p-8">
                                <div className="text-4xl mb-4 text-[#FF9900]">🚚</div>
                                <h3 className="text-xl font-bold mb-3 text-[#131A22]">Fast Delivery</h3>
                                <p className="text-gray-600 mb-4">
                                    Get your orders delivered quickly with our efficient logistics network.
                                    Same-day and next-day delivery options available in select cities.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-[#FF9900] mr-2">✓</span>
                                        <span>Free shipping on orders over ₹499</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FF9900] mr-2">✓</span>
                                        <span>Real-time tracking</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FF9900] mr-2">✓</span>
                                        <span>Easy returns & exchanges</span>
                                    </li>
                                </ul>
                                <Button className="bg-[#FF9900] hover:bg-[#E68A00] text-[#131A22] font-bold px-4 py-2 rounded">
                                    Learn More
                                </Button>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                            <div className="bg-[#FF9900] h-2"></div>
                            <div className="p-8">
                                <div className="text-4xl mb-4 text-[#FF9900]">🛡️</div>
                                <h3 className="text-xl font-bold mb-3 text-[#131A22]">Secure Payments</h3>
                                <p className="text-gray-600 mb-4">
                                    Shop with confidence using our secure payment gateway.
                                    Multiple payment options and industry-leading security measures.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-[#FF9900] mr-2">✓</span>
                                        <span>100% secure transactions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FF9900] mr-2">✓</span>
                                        <span>Multiple payment methods</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FF9900] mr-2">✓</span>
                                        <span>Buyer protection guarantee</span>
                                    </li>
                                </ul>
                                <Button className="bg-[#FF9900] hover:bg-[#E68A00] text-[#131A22] font-bold px-4 py-2 rounded">
                                    View Payment Options
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Services */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#131A22]">Additional Services</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-[#131A22]">For Customers</h3>
                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="text-[#FF9900] text-2xl mr-4">★</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#131A22]">Prime Membership</h4>
                                        <p className="text-gray-600">
                                            Exclusive benefits including free delivery, early access to deals,
                                            and premium customer support.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="text-[#FF9900] text-2xl mr-4">%</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#131A22]">Deals & Discounts</h4>
                                        <p className="text-gray-600">
                                            Regular promotions, flash sales, and special offers on thousands of products.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="text-[#FF9900] text-2xl mr-4">📱</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#131A22]">Mobile App</h4>
                                        <p className="text-gray-600">
                                            Shop on-the-go with our feature-rich mobile application for iOS and Android.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-[#131A22]">For Sellers</h3>
                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="text-[#FF9900] text-2xl mr-4">🏪</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#131A22]">Seller Portal</h4>
                                        <p className="text-gray-600">
                                            Easy-to-use dashboard to manage your products, orders, and analytics.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="text-[#FF9900] text-2xl mr-4">📈</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#131A22]">Marketing Tools</h4>
                                        <p className="text-gray-600">
                                            Promotional tools and advertising solutions to boost your sales.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="text-[#FF9900] text-2xl mr-4">📊</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#131A22]">Business Analytics</h4>
                                        <p className="text-gray-600">
                                            Detailed insights and reports to help you grow your business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-[#131A22]">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers and experience the Sure-Findings Store difference today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-[#FF9900] hover:bg-[#E68A00] text-[#131A22] font-bold px-8 py-3 rounded-lg">
                            Create an Account
                        </Button>
                        <Button className="bg-transparent border-2 border-[#FF9900] text-[#FF9900] hover:bg-[#FF9900] hover:text-[#131A22] font-bold px-8 py-3 rounded-lg">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;