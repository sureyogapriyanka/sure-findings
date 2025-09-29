import { useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Input } from '../components/ui/input.jsx';
import { searchProducts } from '../lib/products';

const Search = () => {
    const [location, setLocation] = useLocation();
    const params = new URLSearchParams(location.split('?')[1]);
    const initialQuery = params.get('q') || '';
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (query.trim()) {
                setLoading(true);
                try {
                    console.log('Fetching search results for query:', query);
                    const response = await searchProducts(query.trim());
                    console.log('Search response:', response);
                    setResults(response);
                } catch (error) {
                    console.error('Search error:', error);
                    setResults([]);
                } finally {
                    setLoading(false);
                }
            } else {
                setResults([]);
            }
        };

        fetchSearchResults();
    }, [query]);

    // Update query if URL changes
    useEffect(() => {
        const params = new URLSearchParams(location.split('?')[1]);
        setQuery(params.get('q') || '');
    }, [location]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
            <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-800 via-orange-600 to-orange-800 bg-clip-text text-transparent">Search Results</h1>
            <div className="mb-6 max-w-2xl mx-auto">
                <Input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full border-2 border-orange-300 focus:border-orange-500 rounded-lg py-3 px-4 text-lg shadow-md"
                />
            </div>
            {loading ? (
                <div className="text-orange-700 text-center py-8">Searching...</div>
            ) : query && results.length === 0 ? (
                <div className="text-orange-700 text-center py-8">No products found for "{query}".</div>
            ) : null}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Search;