import { useState, useEffect } from 'react';

// Direct import to test
import localProducts from '../../products.js';

const DirectTest = () => {
    const [testResults, setTestResults] = useState(null);
    const [searchTerm, setSearchTerm] = useState('iPhone');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        console.log('Direct import test - products count:', localProducts?.length);
        setTestResults({
            totalProducts: localProducts?.length || 0,
            firstProduct: localProducts?.[0] || null
        });
    }, []);

    const handleSearch = () => {
        if (!localProducts || !Array.isArray(localProducts)) {
            console.error('Products not loaded correctly');
            return;
        }

        const results = localProducts.filter(product =>
            product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults(results);
        setTestResults(prev => ({
            ...prev,
            searchCount: results.length,
            lastSearchTerm: searchTerm
        }));
    };

    // Run initial test search
    useEffect(() => {
        if (localProducts?.length > 0 && !testResults?.searchCount) {
            handleSearch();
        }
    }, [testResults, localProducts]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Direct Import Test</h1>

            <div className="mb-6 p-4 bg-gray-100 rounded">
                <h2 className="text-xl font-semibold mb-2">Import Test Results</h2>
                {testResults ? (
                    <div>
                        <p><strong>Total products imported:</strong> {testResults.totalProducts}</p>
                        {testResults.firstProduct && (
                            <div className="mt-2">
                                <p><strong>First product:</strong> {testResults.firstProduct.name}</p>
                                <p><strong>Category:</strong> {testResults.firstProduct.category}</p>
                                <p><strong>Brand:</strong> {testResults.firstProduct.brand}</p>
                            </div>
                        )}
                        {testResults.searchCount !== undefined && (
                            <div className="mt-4 p-2 bg-white rounded">
                                <p><strong>Search for "{testResults.lastSearchTerm}":</strong> {testResults.searchCount} results</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <p>Loading...</p>
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
                    className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                >
                    Direct Search
                </button>
            </div>

            {searchResults.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Search Results ({searchResults.length} found):</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {searchResults.slice(0, 6).map((product, index) => (
                            <div key={index} className="border p-4 rounded shadow">
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
        </div>
    );
};

export default DirectTest;