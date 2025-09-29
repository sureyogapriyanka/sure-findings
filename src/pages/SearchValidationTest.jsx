import { useState, useEffect } from 'react';

// Import products directly
import localProducts from '../../products.js';

const SearchValidationTest = () => {
    const [testData, setTestData] = useState({
        productsLoaded: false,
        productCount: 0,
        sampleProducts: []
    });

    const [searchTests, setSearchTests] = useState([]);
    const [customSearch, setCustomSearch] = useState({ term: '', results: [] });

    // Load test data
    useEffect(() => {
        if (localProducts && Array.isArray(localProducts)) {
            const sampleProducts = localProducts.slice(0, 3).map(p => ({
                id: p.id,
                name: p.name,
                brand: p.brand,
                category: p.category
            }));

            setTestData({
                productsLoaded: true,
                productCount: localProducts.length,
                sampleProducts
            });

            // Run automated tests
            runAutomatedTests();
        }
    }, []);

    const runAutomatedTests = () => {
        const tests = [
            { name: 'iPhone search', term: 'iPhone', expected: true },
            { name: 'Samsung search', term: 'Samsung', expected: true },
            { name: 'Non-existent product', term: 'XYZ123ABC', expected: false },
            { name: 'Electronics category', term: 'electronics', expected: true },
            { name: 'Sports search', term: 'Wilson', expected: true }
        ];

        const results = tests.map(test => {
            try {
                const results = localProducts.filter(product =>
                    product.name?.toLowerCase().includes(test.term.toLowerCase()) ||
                    product.description?.toLowerCase().includes(test.term.toLowerCase()) ||
                    product.brand?.toLowerCase().includes(test.term.toLowerCase()) ||
                    product.category?.toLowerCase().includes(test.term.toLowerCase())
                );

                return {
                    ...test,
                    actualResults: results.length,
                    passed: test.expected ? results.length > 0 : results.length === 0,
                    results: results.slice(0, 2) // Show first 2 results
                };
            } catch (error) {
                return {
                    ...test,
                    error: error.message,
                    passed: false
                };
            }
        });

        setSearchTests(results);
    };

    const handleCustomSearch = () => {
        if (!customSearch.term.trim() || !localProducts) return;

        try {
            const results = localProducts.filter(product =>
                product.name?.toLowerCase().includes(customSearch.term.toLowerCase()) ||
                product.description?.toLowerCase().includes(customSearch.term.toLowerCase()) ||
                product.brand?.toLowerCase().includes(customSearch.term.toLowerCase()) ||
                product.category?.toLowerCase().includes(customSearch.term.toLowerCase())
            );

            setCustomSearch(prev => ({
                ...prev,
                results: results.slice(0, 5)
            }));
        } catch (error) {
            setCustomSearch(prev => ({
                ...prev,
                results: [{ error: error.message }]
            }));
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Search Validation Test</h1>

            {/* Test Data Summary */}
            <div className="mb-8 p-4 bg-blue-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Test Data Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded">
                        <p className="text-sm text-gray-600">Products Loaded</p>
                        <p className="text-2xl font-bold">{testData.productsLoaded ? 'Yes' : 'No'}</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                        <p className="text-sm text-gray-600">Total Products</p>
                        <p className="text-2xl font-bold">{testData.productCount}</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                        <p className="text-sm text-gray-600">Sample Products</p>
                        <p className="text-2xl font-bold">{testData.sampleProducts.length}</p>
                    </div>
                </div>

                {testData.sampleProducts.length > 0 && (
                    <div className="mt-4">
                        <p className="font-medium">Sample Products:</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                            {testData.sampleProducts.map((product, index) => (
                                <div key={index} className="text-sm bg-white p-2 rounded">
                                    <p className="font-medium">{product.name}</p>
                                    <p className="text-gray-600">Brand: {product.brand}</p>
                                    <p className="text-gray-600">Category: {product.category}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Automated Tests */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Automated Search Tests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {searchTests.map((test, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-lg border ${test.passed ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                                }`}
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="font-medium">{test.name}</h3>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${test.passed ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                                    }`}>
                                    {test.passed ? 'PASS' : 'FAIL'}
                                </span>
                            </div>
                            <p className="text-sm mt-2">
                                Search term: <strong>"{test.term}"</strong>
                            </p>
                            <p className="text-sm">
                                Results found: <strong>{test.actualResults || 0}</strong>
                            </p>
                            {test.error && (
                                <p className="text-red-600 text-xs mt-1">Error: {test.error}</p>
                            )}
                            {test.results && test.results.length > 0 && (
                                <div className="mt-2 text-xs">
                                    <p className="font-medium">Sample results:</p>
                                    {test.results.map((result, i) => (
                                        <p key={i} className="truncate">{result.name}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Search */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Custom Search Test</h2>
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        value={customSearch.term}
                        onChange={(e) => setCustomSearch(prev => ({ ...prev, term: e.target.value }))}
                        placeholder="Enter search term"
                        className="flex-1 border p-2 rounded"
                    />
                    <button
                        onClick={handleCustomSearch}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Search
                    </button>
                </div>

                {customSearch.results.length > 0 && (
                    <div>
                        <p className="font-medium mb-2">
                            Found {customSearch.results.length} results for "{customSearch.term}":
                        </p>
                        <div className="space-y-2">
                            {customSearch.results.map((result, index) => (
                                <div key={index} className="p-3 bg-gray-50 rounded">
                                    {result.error ? (
                                        <p className="text-red-600">Error: {result.error}</p>
                                    ) : (
                                        <>
                                            <p className="font-medium">{result.name}</p>
                                            <div className="grid grid-cols-2 gap-2 text-sm mt-1">
                                                <p>Brand: {result.brand}</p>
                                                <p>Category: {result.category}</p>
                                                <p>ID: {result.id}</p>
                                                <p>Price: ₹{result.price?.toLocaleString()}</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchValidationTest;