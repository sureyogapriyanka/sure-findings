import { useState, useEffect } from 'react';

const BrowserImportTest = () => {
    const [importResult, setImportResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const testImport = async () => {
            try {
                console.log('Starting import test...');

                // Dynamically import the products
                const productsModule = await import('../../products.js');
                console.log('Imported module:', productsModule);

                const products = productsModule.default;
                console.log('Products data:', products);

                setImportResult({
                    success: true,
                    type: typeof products,
                    isArray: Array.isArray(products),
                    length: products?.length || 0,
                    firstItem: products?.[0] || null
                });
            } catch (err) {
                console.error('Import error:', err);
                setError({
                    message: err.message,
                    stack: err.stack
                });
                setImportResult({
                    success: false,
                    error: err.message
                });
            }
        };

        testImport();
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Browser Import Test</h1>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Import Results</h2>

                {!importResult && !error && (
                    <div className="flex items-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-3"></div>
                        <p>Testing import...</p>
                    </div>
                )}

                {importResult && (
                    <div className="space-y-4">
                        <div className={`p-4 rounded ${importResult.success ? 'bg-green-50' : 'bg-red-50'}`}>
                            <p className={`font-medium ${importResult.success ? 'text-green-800' : 'text-red-800'}`}>
                                Import {importResult.success ? 'Successful' : 'Failed'}
                            </p>
                            {importResult.success ? (
                                <div className="mt-2 space-y-2">
                                    <p><strong>Type:</strong> {importResult.type}</p>
                                    <p><strong>Is Array:</strong> {importResult.isArray ? 'Yes' : 'No'}</p>
                                    <p><strong>Length:</strong> {importResult.length}</p>
                                    {importResult.firstItem && (
                                        <div className="mt-3 p-3 bg-white rounded border">
                                            <p className="font-medium">First Item Sample:</p>
                                            <p><strong>Name:</strong> {importResult.firstItem.name}</p>
                                            <p><strong>ID:</strong> {importResult.firstItem.id}</p>
                                            <p><strong>Category:</strong> {importResult.firstItem.category}</p>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <p className="text-red-700">{importResult.error}</p>
                            )}
                        </div>
                    </div>
                )}

                {error && (
                    <div className="p-4 bg-red-50 rounded">
                        <p className="font-medium text-red-800">Error Details:</p>
                        <p className="text-red-700 mt-1">{error.message}</p>
                        <pre className="mt-2 text-xs bg-red-100 p-2 rounded overflow-auto">
                            {error.stack}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrowserImportTest;