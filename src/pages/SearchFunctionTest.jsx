import { useState, useEffect } from 'react';
import { searchProducts, getAllProducts } from '../lib/products';

const SearchFunctionTest = () => {
    const [testResults, setTestResults] = useState({});
    const [searchTerm, setSearchTerm] = useState('iPhone');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // Test the products import and search function
    useEffect(() => {
        const runTests = async () => {
            try {
                // Test getAllProducts
                const allProductsResult = await getAllProducts();
                setTestResults(prev => ({
                    ...prev,
                    allProducts: {
                        count: allProductsResult.products.length,
                        status: 'success'
                    }
                }));

                // Test search with a known term
                if (allProductsResult.products.length > 0) {
                    const firstProductName = allProductsResult.products[0].name;
                    const searchTerm = firstProductName.split(' ')[0]; // First word
                    setSearchTerm(searchTerm);
                }
            } catch (error) {
                console.error('Test error:', error);
                setTestResults(prev => ({
                    ...prev,
                    error: error.message
                }));
            }
        };

        runTests();
    }, []);

    const handleSearch = async () => {
        if (!searchTerm.trim()) return;
        
        setLoading(true);
        try {
            const results = await searchProducts(searchTerm);
            setSearchResults(results);
            setTestResults(prev => ({
                ...prev,
                lastSearch: {
                    term: searchTerm,
                    count: results.length,
                    status: 'success'
                }
            }));
        } catch (error) {
            console.error('Search error:', error);
            setSearchResults([]);
            setTestResults(prev => ({
                ...prev,
                lastSearch: {
                    term: searchTerm,
                    count: 0,
                    status: 'error',
                    error: error.message
                }
            }));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Search Function Test</h1>
            
            <div className="mb-6 p-4 bg-gray-100 rounded">
                <h2 className="text-xl font-semibold mb-2">Test Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p><strong>All Products:</strong> 
                            {testResults.allProducts ? (
                                <span className="text-green-600"> {testResults.allProducts.count} products loaded</span>
                            ) : (
                                <span className="text-gray-500"> Loading...</span>
                            )}
                        </p>
                    </div>
                    <div>
                        {testResults.lastSearch && (
                            <p><strong>Last Search ("{testResults.lastSearch.term}"):</strong> 
                                <span className={testResults.lastSearch.status === 'success' ? 'text-green-600' : 'text-red-600'}>
                                    {' '}{testResults.lastSearch.count} results
                                </span>
                            </p>
                        )}
                    </div>
                </div>
                {testResults.error && (
                    <div className="mt-2 p-2 bg-red-100 text-red-800 rounded">
                        <strong>Error:</strong> {testResults.error}
                    </div>
                )}
            </div>
            
            <div className="mb-6 flex items-end gap-2">
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Search Term</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter search term"
                        className="border p-2 w-full rounded"
                    />
                </div>
                <button 
                    onClick={handleSearch}
                    disabled={loading}
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? 'Searching...' : 'Test Search'}
                </button>
            </div>

            {searchResults.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Search Results ({searchResults.length} found):</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {searchResults.slice(0, 6).map((product) => (
                            <div key={product.id} className="border p-4 rounded shadow">
                                <h3 className="font-bold text-lg">{product.name}</h3>
                                <p className="text-gray-600">Brand: {product.brand}</p>
                                <p className="text-gray-600">Category: {product.category}</p>
                                <p className="font-semibold">Price: ₹{product.price?.toLocaleString()}</p>
                            </div>
                        ))}
                        {searchResults.length > 6 && (
                            <p className="text-gray-500 col-span-full text-center">
                                Showing 6 of {searchResults.length} results
                            </p>
                        )}
                    </div>
                </div>
            )}
            
            {searchResults.length === 0 && testResults.lastSearch && (
                <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
                    <h3 className="text-lg font-medium text-yellow-800 mb-2">No Results Found</h3>
                    <p className="text-yellow-700">
                        Try searching for common terms like "iPhone", "Samsung", "Sony", "Wilson", etc.
                    </p>
                </div>
            )}
        </div>
    );
};

export default SearchFunctionTest;