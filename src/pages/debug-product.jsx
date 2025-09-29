import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '../components/ui/button.jsx';
import { getProductById } from '../lib/products';
import { ChevronLeft } from 'lucide-react';

const DebugProduct = () => {
    const [location] = useLocation();
    const [debugInfo, setDebugInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const debugProductLoading = async () => {
            try {
                setLoading(true);

                // Extract product ID from URL
                const urlParts = location.split('/');
                const productId = urlParts[3];

                setDebugInfo(prev => ({
                    ...prev,
                    url: location,
                    urlParts: urlParts,
                    extractedProductId: productId
                }));

                if (productId) {
                    console.log('Debug: Attempting to fetch product with ID:', productId);
                    const product = await getProductById(productId);
                    console.log('Debug: Product fetched:', product);

                    setDebugInfo(prev => ({
                        ...prev,
                        product: product,
                        productFound: !!product
                    }));
                }
            } catch (error) {
                console.error('Debug error:', error);
                setDebugInfo(prev => ({
                    ...prev,
                    error: error.message
                }));
            } finally {
                setLoading(false);
            }
        };

        debugProductLoading();
    }, [location]);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Product Debug Page</h1>

            {loading ? (
                <p>Loading debug information...</p>
            ) : (
                <div className="space-y-4">
                    <Link href="/">
                        <Button variant="outline" className="mb-4">
                            <ChevronLeft className="h-4 w-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>

                    <div className="bg-gray-100 p-4 rounded">
                        <h2 className="font-bold mb-2">Debug Information:</h2>
                        <pre className="whitespace-pre-wrap text-sm">
                            {JSON.stringify(debugInfo, null, 2)}
                        </pre>
                    </div>

                    <Link href="/sure-findings/">
                        <Button>Return Home</Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default DebugProduct;