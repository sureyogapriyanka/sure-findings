import { useState, useEffect } from 'react';
import localProducts from '../../products.js';

const MinimalSearchTest = () => {
    const [results, setResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        setProductCount(localProducts?.length || 0);
    }, []);

    const handleSearch = () => {
        if (!localProducts || !Array.isArray(localProducts)) {
            setResults([{ error: 'Products not loaded correctly' }]);
            return;
        }

        if (!searchTerm.trim()) {
            setResults([]);
            return;
        }

        try {
            // Very basic search - just check name field
            const found = localProducts.filter(product =>
                product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            setResults(found);
        } catch (error) {
            setResults([{ error: error.message }]);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Minimal Search Test</h1>

            <div className="mb-6 p-4 bg-blue-50 rounded">
                <p><strong>Total Products Available:</strong> {productCount}</p>
            </div>

            <div className="mb-6 flex gap-2">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter product name to search"
                    className="flex-1 border p-2 rounded"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Results ({results.length} found):</h2>

                {results.length === 0 && searchTerm && (
                    <div className="p-4 bg-yellow-50 rounded">
                        <p>No products found matching "{searchTerm}"</p>
                        <p className="mt-2 text-sm">Try: iPhone, Samsung, Sony, Wilson, etc.</p>
                    </div>
                )}

                {results.length > 0 && (
                    <div className="space-y-4">
                        {results.slice(0, 5).map((product, index) => (
                            <div key={index} className="border p-4 rounded">
                                <h3 className="font-bold">{product.name}</h3>
                                <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                                    <p><strong>Brand:</strong> {product.brand}</p>
                                    <p><strong>Category:</strong> {product.category}</p>
                                    <p><strong>Price:</strong> ₹{product.price?.toLocaleString()}</p>
                                    <p><strong>ID:</strong> {product.id}</p>
                                </div>
                            </div>
                        ))}
                        {results.length > 5 && (
                            <p className="text-center text-gray-500">
                                Showing 5 of {results.length} results
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MinimalSearchTest;