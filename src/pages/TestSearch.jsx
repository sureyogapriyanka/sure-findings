import { useState, useEffect } from 'react';
import { searchProducts, getAllProducts } from '../lib/products';

const TestSearch = () => {
    const [results, setResults] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [query, setQuery] = useState('iPhone');
    const [loading, setLoading] = useState(false);
    const [debugInfo, setDebugInfo] = useState({});

    useEffect(() => {
        const loadProducts = async () => {
            try {
                console.log('Loading all products...');
                const { products } = await getAllProducts();
                console.log('All products loaded:', products.length);
                setAllProducts(products);
                setDebugInfo(prev => ({ ...prev, allProductsCount: products.length }));

                // Test search immediately
                if (products.length > 0) {
                    console.log('Testing search with first product name:', products[0].name);
                    const searchTerm = products[0].name.split(' ')[0]; // Use first word of first product
                    setQuery(searchTerm);
                    setDebugInfo(prev => ({ ...prev, firstProduct: products[0], searchTerm }));
                }
            } catch (error) {
                console.error('Error loading products:', error);
                setDebugInfo(prev => ({ ...prev, error: error.message }));
            }
        };

        loadProducts();
    }, []);

    const handleSearch = async () => {
        if (!query.trim()) {
            alert('Please enter a search term');
            return;
        }

        setLoading(true);
        setDebugInfo(prev => ({ ...prev, searchQuery: query, searchStarted: new Date().toISOString() }));

        try {
            console.log('Searching for:', query);
            const searchResults = await searchProducts(query);
            console.log('Search returned:', searchResults.length, 'results');
            setResults(searchResults);
            setDebugInfo(prev => ({ ...prev, searchResultsCount: searchResults.length, searchCompleted: new Date().toISOString() }));
        } catch (error) {
            console.error('Search error:', error);
            setResults([]);
            setDebugInfo(prev => ({ ...prev, searchError: error.message }));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Search Test</h1>

            <div className="mb-6 p-4 bg-gray-100 rounded">
                <h2 className="text-xl font-semibold mb-2">Debug Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p><strong>Total products loaded:</strong> {debugInfo.allProductsCount || 'Loading...'}</p>
                        {debugInfo.firstProduct && (
                            <div className="mt-2">
                                <p><strong>First product:</strong> {debugInfo.firstProduct.name}</p>
                                <p><strong>Category:</strong> {debugInfo.firstProduct.category}</p>
                                <p><strong>Brand:</strong> {debugInfo.firstProduct.brand}</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <p><strong>Search term:</strong> {debugInfo.searchTerm || 'Not set'}</p>
                        <p><strong>Current query:</strong> {query}</p>
                        {debugInfo.searchResultsCount !== undefined && (
                            <p><strong>Search results:</strong> {debugInfo.searchResultsCount}</p>
                        )}
                        {debugInfo.searchError && (
                            <p className="text-red-500"><strong>Error:</strong> {debugInfo.searchError}</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="mb-6 flex items-end gap-2">
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Search Term</label>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter search term"
                        className="border p-2 w-full rounded"
                    />
                </div>
                <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>

            {loading ? (
                <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    <p className="mt-2">Searching...</p>
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Results ({results.length} found):</h2>
                    {results.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-500 mb-4">No products found.</p>
                            <div className="bg-yellow-50 p-4 rounded max-w-md mx-auto">
                                <p className="font-medium">Try searching for:</p>
                                <ul className="list-disc list-inside mt-2 text-left">
                                    <li>"iPhone"</li>
                                    <li>"Sony"</li>
                                    <li>"Wilson"</li>
                                    <li>"Samsung"</li>
                                    <li>"Apple"</li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {results.slice(0, 9).map(product => (
                                <div key={product.id} className="border p-4 rounded shadow">
                                    <h3 className="font-bold text-lg">{product.name}</h3>
                                    <p className="text-gray-600">Brand: {product.brand}</p>
                                    <p className="text-gray-600">Category: {product.category}</p>
                                    <p className="font-semibold">Price: ₹{product.price?.toLocaleString()}</p>
                                </div>
                            ))}
                            {results.length > 9 && (
                                <p className="text-gray-500 col-span-full text-center">
                                    Showing 9 of {results.length} results
                                </p>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TestSearch;