import { useState } from 'react';
import { searchProducts } from '../lib/products';

const HeaderSearchTest = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!searchTerm.trim()) return;

        setLoading(true);
        setError(null);
        setSearchResults([]);

        try {
            console.log('Testing search with term:', searchTerm);
            const results = await searchProducts(searchTerm.trim());
            console.log('Search results:', results);
            setSearchResults(results);
        } catch (err) {
            console.error('Search error:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Header Search Test</h1>

            <div className="mb-6 p-4 bg-gray-100 rounded">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter search term"
                        className="flex-1 border p-2 rounded"
                    />
                    <button
                        onClick={handleSearch}
                        disabled={loading}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                        {loading ? 'Searching...' : 'Test Search'}
                    </button>
                </div>

                {error && (
                    <div className="mt-4 p-3 bg-red-100 text-red-800 rounded">
                        <strong>Error:</strong> {error}
                    </div>
                )}

                {searchResults.length > 0 && (
                    <div className="mt-4">
                        <p className="font-medium">Found {searchResults.length} results:</p>
                        <div className="mt-2 space-y-2">
                            {searchResults.slice(0, 5).map((product) => (
                                <div key={product.id} className="p-3 bg-white rounded border">
                                    <p className="font-medium">{product.name}</p>
                                    <p className="text-sm text-gray-600">Brand: {product.brand} | Category: {product.category}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {searchResults.length === 0 && !loading && searchTerm && (
                    <div className="mt-4 p-3 bg-yellow-100 text-yellow-800 rounded">
                        No products found for "{searchTerm}"
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeaderSearchTest;