import { useState, useEffect } from 'react';
import { searchProducts } from '../lib/products';

const FinalSearchTest = () => {
    const [testResults, setTestResults] = useState({
        status: 'idle',
        data: null,
        error: null
    });
    const [searchTerm, setSearchTerm] = useState('iPhone');

    const runSearchTest = async () => {
        setTestResults({ status: 'loading', data: null, error: null });

        try {
            console.log('Running search test for:', searchTerm);
            const results = await searchProducts(searchTerm);
            console.log('Search results:', results);

            setTestResults({
                status: 'success',
                data: {
                    searchTerm,
                    resultCount: results.length,
                    sampleResults: results.slice(0, 3)
                },
                error: null
            });
        } catch (error) {
            console.error('Search test failed:', error);
            setTestResults({
                status: 'error',
                data: null,
                error: error.message
            });
        }
    };

    // Run initial test
    useEffect(() => {
        runSearchTest();
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Final Search Functionality Test</h1>

            <div className="mb-6 p-4 bg-gray-100 rounded">
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter search term"
                        className="flex-1 border p-2 rounded"
                    />
                    <button
                        onClick={runSearchTest}
                        disabled={testResults.status === 'loading'}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                        {testResults.status === 'loading' ? 'Searching...' : 'Test Search'}
                    </button>
                </div>

                {testResults.status === 'loading' && (
                    <div className="flex items-center text-blue-600">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"></div>
                        <p>Running search test...</p>
                    </div>
                )}

                {testResults.status === 'success' && testResults.data && (
                    <div className="bg-white p-4 rounded">
                        <h3 className="font-medium text-green-700 mb-2">Search Test Successful!</h3>
                        <p><strong>Search term:</strong> "{testResults.data.searchTerm}"</p>
                        <p><strong>Results found:</strong> {testResults.data.resultCount}</p>

                        {testResults.data.sampleResults.length > 0 && (
                            <div className="mt-4">
                                <p className="font-medium">Sample results:</p>
                                <div className="mt-2 space-y-2">
                                    {testResults.data.sampleResults.map((product, index) => (
                                        <div key={index} className="p-2 bg-gray-50 rounded">
                                            <p className="font-medium">{product.name}</p>
                                            <div className="text-sm text-gray-600">
                                                <span>Brand: {product.brand}</span> •
                                                <span className="ml-2">Category: {product.category}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {testResults.status === 'error' && testResults.error && (
                    <div className="bg-red-50 p-4 rounded">
                        <h3 className="font-medium text-red-700 mb-2">Search Test Failed</h3>
                        <p className="text-red-600">{testResults.error}</p>
                    </div>
                )}
            </div>

            <div className="bg-blue-50 p-4 rounded">
                <h2 className="text-lg font-semibold mb-2">Test Instructions</h2>
                <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Enter a product name in the search box (e.g., "iPhone", "Samsung", "Sony")</li>
                    <li>Click "Test Search" to run the search function</li>
                    <li>If successful, you should see results count and sample products</li>
                    <li>If there's an error, you'll see the error message</li>
                </ul>
            </div>
        </div>
    );
};

export default FinalSearchTest;