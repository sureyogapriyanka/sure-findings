import { Link } from 'wouter';
import Header from '../components/Header';
import { Button } from '../components/ui/button';

const About = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <div className="bg-[#131A22] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sure-Findings Store</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Your trusted online marketplace for quality products at competitive prices
                    </p>
                </div>
            </div>

            {/* Company Story */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-[#131A22]">Our Story</h2>
                            <p className="text-lg mb-4 text-gray-700">
                                Founded in 2024, Sure-Findings Store began with a simple mission: to make quality products
                                accessible to everyone at fair prices. What started as a small online venture has grown
                                into a trusted marketplace serving thousands of customers across India.
                            </p>
                            <p className="text-lg mb-4 text-gray-700">
                                Our team is passionate about curating the best products from trusted brands and emerging
                                sellers, ensuring that every purchase meets our high standards for quality and value.
                            </p>
                            <p className="text-lg mb-6 text-gray-700">
                                We believe in building long-term relationships with our customers based on trust,
                                transparency, and exceptional service.
                            </p>
                            <Button className="bg-[#FF9900] hover:bg-[#E68A00] text-[#131A22] font-bold px-6 py-3 rounded-lg">
                                Learn More About Our Mission
                            </Button>
                        </div>
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
                            Company Image
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#131A22]">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                            <div className="text-[#FF9900] text-4xl mb-4">✓</div>
                            <h3 className="text-xl font-bold mb-3 text-[#131A22]">Customer First</h3>
                            <p className="text-gray-600">
                                Your satisfaction is our priority. We're committed to providing exceptional service
                                and support at every step of your shopping journey.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                            <div className="text-[#FF9900] text-4xl mb-4">✓</div>
                            <h3 className="text-xl font-bold mb-3 text-[#131A22]">Quality Assurance</h3>
                            <p className="text-gray-600">
                                We carefully vet all products and sellers to ensure you receive only the highest
                                quality items that meet our rigorous standards.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                            <div className="text-[#FF9900] text-4xl mb-4">✓</div>
                            <h3 className="text-xl font-bold mb-3 text-[#131A22]">Integrity</h3>
                            <p className="text-gray-600">
                                We operate with complete transparency in all our dealings, ensuring honest pricing,
                                accurate product information, and ethical business practices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#131A22]">Our Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-4"></div>
                            <h3 className="text-xl font-bold text-[#131A22]">Alex Johnson</h3>
                            <p className="text-[#FF9900] font-medium">CEO & Founder</p>
                            <p className="text-gray-600 mt-2">
                                10+ years in e-commerce and retail innovation
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-4"></div>
                            <h3 className="text-xl font-bold text-[#131A22]">Sarah Williams</h3>
                            <p className="text-[#FF9900] font-medium">Chief Operations Officer</p>
                            <p className="text-gray-600 mt-2">
                                Expert in logistics and customer experience
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-4"></div>
                            <h3 className="text-xl font-bold text-[#131A22]">Michael Chen</h3>
                            <p className="text-[#FF9900] font-medium">Head of Technology</p>
                            <p className="text-gray-600 mt-2">
                                Leading our platform development and innovation
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#131A22] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Be the first to know about new products, exclusive deals, and company updates.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-auto min-w-[300px]"
                        />
                        <Button className="bg-[#FF9900] hover:bg-[#E68A00] text-[#131A22] font-bold px-6 py-3 rounded-lg whitespace-nowrap">
                            Subscribe to Newsletter
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;