import { useState, useEffect } from 'react';

// Direct import to test
import localProducts from '../../products.js';
import { searchProducts } from '../lib/products';

const SearchDebug = () => {
    const [debugInfo, setDebugInfo] = useState({});
    const [searchTerm, setSearchTerm] = useState('iPhone');
    const [searchResults, setSearchResults] = useState([]);
    const [detailedResults, setDetailedResults] = useState([]);

    // Initialize debug info
    useEffect(() => {
        const initDebug = async () => {
            try {
                console.log('Initializing search debug...');
                console.log('Local products imported:', localProducts?.length);

                setDebugInfo({
                    productsImported: localProducts?.length || 0,
                    isArray: Array.isArray(localProducts),
                    firstProduct: localProducts?.[0] || null,
                    productsType: typeof localProducts
                });

                // Run initial search
                if (localProducts?.length > 0) {
                    handleSearch();
                }
            } catch (error) {
                console.error('Init error:', error);
                setDebugInfo(prev => ({ ...prev, initError: error.message }));
            }
        };

        initDebug();
    }, []);

    const handleSearch = async () => {
        if (!searchTerm.trim()) return;

        try {
            console.log('Searching for:', searchTerm);

            // Direct search implementation for debugging
            const directResults = localProducts?.filter(product => {
                if (!product || !product.name) return false;

                const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
                const descMatch = product.description?.toLowerCase().includes(searchTerm.toLowerCase());
                const brandMatch = product.brand?.toLowerCase().includes(searchTerm.toLowerCase());
                const categoryMatch = product.category?.toLowerCase().includes(searchTerm.toLowerCase());

                const matches = nameMatch || descMatch || brandMatch || categoryMatch;

                // Log matching products
                if (matches) {
                    console.log('Match found:', {
                        name: product.name,
                        brand: product.brand,
                        category: product.category,
                        nameMatch,
                        descMatch,
                        brandMatch,
                        categoryMatch
                    });
                }

                return matches;
            }) || [];

            console.log('Direct search results:', directResults.length);

            // Library function search
            const libraryResults = await searchProducts(searchTerm);
            console.log('Library search results:', libraryResults.length);

            setSearchResults(directResults);
            setDetailedResults(libraryResults);

            setDebugInfo(prev => ({
                ...prev,
                lastSearch: {
                    term: searchTerm,
                    directCount: directResults.length,
                    libraryCount: libraryResults.length
                }
            }));
        } catch (error) {
            console.error('Search error:', error);
            setSearchResults([]);
            setDetailedResults([]);
            setDebugInfo(prev => ({
                ...prev,
                searchError: error.message
            }));
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Search Debug</h1>

            <div className="mb-6 p-4 bg-gray-100 rounded">
                <h2 className="text-xl font-semibold mb-2">Debug Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p><strong>Products Imported:</strong> {debugInfo.productsImported || 'Loading...'}</p>
                        <p><strong>Is Array:</strong> {debugInfo.isArray ? 'Yes' : 'No'}</p>
                        <p><strong>Data Type:</strong> {debugInfo.productsType || 'Unknown'}</p>
                    </div>
                    <div>
                        {debugInfo.firstProduct && (
                            <div>
                                <p><strong>First Product:</strong> {debugInfo.firstProduct.name}</p>
                                <p><strong>ID:</strong> {debugInfo.firstProduct.id}</p>
                                <p><strong>Category:</strong> {debugInfo.firstProduct.category}</p>
                            </div>
                        )}
                        {debugInfo.lastSearch && (
                            <div className="mt-2">
                                <p><strong>Last Search ("{debugInfo.lastSearch.term}"):</strong></p>
                                <p className="ml-4">Direct: {debugInfo.lastSearch.directCount} results</p>
                                <p className="ml-4">Library: {debugInfo.lastSearch.libraryCount} results</p>
                            </div>
                        )}
                    </div>
                </div>
                {debugInfo.initError && (
                    <div className="mt-2 p-2 bg-red-100 text-red-800 rounded">
                        <strong>Init Error:</strong> {debugInfo.initError}
                    </div>
                )}
                {debugInfo.searchError && (
                    <div className="mt-2 p-2 bg-red-100 text-red-800 rounded">
                        <strong>Search Error:</strong> {debugInfo.searchError}
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
                    className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600"
                >
                    Debug Search
                </button>
            </div>

            {searchResults.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Direct Search Results ({searchResults.length} found):</h2>
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

            {detailedResults.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Library Function Results ({detailedResults.length} found):</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {detailedResults.slice(0, 6).map((product, index) => (
                            <div key={index} className="border p-4 rounded shadow bg-blue-50">
                                <h3 className="font-bold text-lg">{product.name}</h3>
                                <p className="text-gray-600">Brand: {product.brand}</p>
                                <p className="text-gray-600">Category: {product.category}</p>
                                <p className="font-semibold">Price: ₹{product.price?.toLocaleString()}</p>
                            </div>
                        ))}
                        {detailedResults.length > 6 && (
                            <p className="text-gray-500 col-span-full text-center">
                                Showing 6 of {detailedResults.length} results
                            </p>
                        )}
                    </div>
                </div>
            )}

            {searchResults.length === 0 && detailedResults.length === 0 && debugInfo.lastSearch && (
                <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
                    <h3 className="text-lg font-medium text-yellow-800 mb-2">No Results Found</h3>
                    <p className="text-yellow-700">
                        Try searching for common terms like "iPhone", "Samsung", "Sony", "Wilson", etc.
                    </p>
                    <div className="mt-4">
                        <p className="font-medium">Debug Tips:</p>
                        <ul className="list-disc list-inside mt-2 text-sm">
                            <li>Check browser console for detailed logs</li>
                            <li>Verify that products are correctly imported</li>
                            <li>Ensure search term matches product properties</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchDebug;