import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { getDealsProducts } from '../lib/products';
import ProductCard from '../components/ProductCard';
import { Button } from '../components/ui/button.jsx';

const Deals = () => {
    const [deals, setDeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDealsProducts = async () => {
            try {
                const dealsProducts = await getDealsProducts();
                setDeals(dealsProducts);
            } catch (error) {
                console.error('Error fetching deals:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDealsProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-8 rounded-xl">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-orange-900 mb-8">Today's Deals</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                                <div className="bg-gray-200 h-48 rounded-md mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                                <div className="h-8 bg-gray-200 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-8 rounded-xl">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-orange-900">Today's Deals</h1>
                    <Button
                        variant="outline"
                        asChild
                        className="border-orange-300 text-orange-700 hover:bg-orange-50"
                    >
                        <Link href="/">Back to Home</Link>
                    </Button>
                </div>

                {deals.length === 0 ? (
                    <div className="text-center py-12">
                        <h2 className="text-2xl font-semibold text-orange-800 mb-4">No deals available at the moment</h2>
                        <p className="text-orange-600 mb-6">Check back later for exciting offers!</p>
                        <Button
                            asChild
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                        >
                            <Link href="/sure-findings/">Continue Shopping</Link>
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {deals.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Deals;