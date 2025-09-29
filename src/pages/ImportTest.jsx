import { useState, useEffect } from 'react';

// Test the import directly
import products from '../../products.js';

const ImportTest = () => {
    const [importStatus, setImportStatus] = useState('loading');
    const [productCount, setProductCount] = useState(0);
    const [firstProduct, setFirstProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            console.log('Products import result:', products);

            if (products && Array.isArray(products)) {
                setImportStatus('success');
                setProductCount(products.length);
                if (products.length > 0) {
                    setFirstProduct(products[0]);
                }
            } else {
                setImportStatus('error');
                setError('Products is not an array');
            }
        } catch (err) {
            console.error('Import error:', err);
            setImportStatus('error');
            setError(err.message);
        }
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Products Import Test</h1>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Import Status</h2>

                {importStatus === 'loading' && (
                    <div className="flex items-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-3"></div>
                        <p>Loading products...</p>
                    </div>
                )}

                {importStatus === 'success' && (
                    <div className="space-y-4">
                        <div className="flex items-center text-green-600">
                            <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                            <p>Products imported successfully!</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-green-50 p-4 rounded">
                                <p className="text-sm text-gray-600">Total Products</p>
                                <p className="text-2xl font-bold">{productCount}</p>
                            </div>

                            {firstProduct && (
                                <div className="bg-blue-50 p-4 rounded">
                                    <p className="text-sm text-gray-600">First Product</p>
                                    <p className="font-semibold">{firstProduct.name}</p>
                                    <p className="text-sm">ID: {firstProduct.id}</p>
                                    <p className="text-sm">Category: {firstProduct.category}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {importStatus === 'error' && (
                    <div className="bg-red-50 p-4 rounded">
                        <div className="flex items-center text-red-600 mb-2">
                            <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                            <p>Import failed</p>
                        </div>
                        <p className="text-red-800">{error}</p>
                    </div>
                )}
            </div>

            {importStatus === 'success' && firstProduct && (
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">First Product Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="font-medium">Name:</p>
                            <p>{firstProduct.name}</p>
                        </div>
                        <div>
                            <p className="font-medium">ID:</p>
                            <p>{firstProduct.id}</p>
                        </div>
                        <div>
                            <p className="font-medium">Category:</p>
                            <p>{firstProduct.category}</p>
                        </div>
                        <div>
                            <p className="font-medium">Brand:</p>
                            <p>{firstProduct.brand}</p>
                        </div>
                        <div>
                            <p className="font-medium">Price:</p>
                            <p>₹{firstProduct.price?.toLocaleString()}</p>
                        </div>
                        <div>
                            <p className="font-medium">In Stock:</p>
                            <p>{firstProduct.inStock ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImportTest;