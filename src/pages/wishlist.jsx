import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '../components/ui/button.jsx';
import { Card, CardContent, CardHeader } from '../components/ui/card.jsx';
import api from '../services/api.js';
import { getAllProducts } from '../lib/products.js';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [debugInfo, setDebugInfo] = useState('');

  useEffect(() => {
    const fetchWishlistAndProducts = async () => {
      try {
        setLoading(true);
        setDebugInfo('Fetching wishlist and products...');

        // Get wishlist from API
        const wishlistIds = await api.getWishlist();
        setDebugInfo(`Wishlist IDs: ${JSON.stringify(wishlistIds)}`);

        // Get all products
        const { products: allProducts } = await getAllProducts();
        setProducts(allProducts);
        setDebugInfo(prev => `${prev}\nAll products count: ${allProducts.length}`);

        // Filter wishlist items
        const wishlistProducts = allProducts.filter(product =>
          wishlistIds.includes(product.id)
        );
        setWishlistItems(wishlistProducts);
        setDebugInfo(prev => `${prev}\nWishlist products count: ${wishlistProducts.length}`);

        // Get related products (first 4 products not in wishlist)
        const nonWishlistProducts = allProducts.filter(product =>
          !wishlistIds.includes(product.id)
        );
        setRelatedProducts(nonWishlistProducts.slice(0, 4));
        setDebugInfo(prev => `${prev}\nRelated products count: ${nonWishlistProducts.slice(0, 4).length}`);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
        setDebugInfo(prev => `${prev}\nError: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlistAndProducts();
  }, []);

  const removeFromWishlist = async (productId) => {
    try {
      setDebugInfo(`Removing product ${productId} from wishlist...`);
      // Remove from API
      await api.removeFromWishlist(productId);

      // Update state
      setWishlistItems(prev => prev.filter(item => item.id !== productId));

      // Add back to related products
      const product = products.find(p => p.id === productId);
      if (product) {
        setRelatedProducts(prev => [...prev, product]);
      }
      setDebugInfo(prev => `${prev}\nRemoved product ${productId} from wishlist`);
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      setDebugInfo(prev => `${prev}\nError removing: ${error.message}`);
    }
  };

  const handleAddToCart = async (product) => {
    try {
      setDebugInfo(`Adding product ${product.id} to cart...`);
      // Add to cart logic
      await api.addToCart(product.id, 1);

      // Remove from wishlist
      removeFromWishlist(product.id);
    } catch (error) {
      console.error('Error adding to cart:', error);
      setDebugInfo(prev => `${prev}\nError adding to cart: ${error.message}`);
    }
  };

  const handleAddRelatedToWishlist = async (product) => {
    try {
      setDebugInfo(`Adding product ${product.id} to wishlist...`);
      // Add to wishlist logic
      await api.addToWishlist(product.id);

      // Update state
      setWishlistItems(prev => [...prev, product]);
      setRelatedProducts(prev => prev.filter(p => p.id !== product.id));
      setDebugInfo(prev => `${prev}\nAdded product ${product.id} to wishlist`);
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      setDebugInfo(prev => `${prev}\nError adding to wishlist: ${error.message}`);
    }
  };

  const formatPrice = (price) => {
    if (price === undefined || price === null || isNaN(price)) {
      return '₹0.00';
    }
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-4 text-orange-800">Your Wishlist</h1>
          <p className="text-muted-foreground mb-8">Loading your wishlist...</p>
          <p className="text-sm text-gray-500">{debugInfo}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-800 via-orange-600 to-orange-800 bg-clip-text text-transparent">Your Wishlist</h1>

      {/* Debug Info */}
      <div className="mb-4 p-4 bg-yellow-100 rounded-lg text-sm text-gray-700">
        <strong>Debug Info:</strong>
        <pre>{debugInfo}</pre>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-4 text-orange-800">Your Wishlist</h1>
          <p className="text-muted-foreground mb-8">Your wishlist is empty</p>
          <Link href="/home">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="bg-gradient-to-br from-white to-orange-50 border border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader className="p-4">
                  <img
                    src={item.images?.[0] || 'https://placehold.co/300x300?text=No+Image'}
                    alt={item.name}
                    className="w-full h-48 object-contain rounded-md"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-medium text-orange-900 line-clamp-2 mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.brand}</p>
                  <p className="font-bold text-orange-700 mb-4">{formatPrice(item.price)}</p>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                      size="sm"
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => removeFromWishlist(item.id)}
                      className="border-orange-300 text-orange-700 hover:bg-orange-50"
                      size="sm"
                    >
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-orange-800">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <Card key={product.id} className="bg-gradient-to-br from-white to-orange-50 border border-orange-200 hover:shadow-lg transition-shadow">
                    <CardHeader className="p-4">
                      <img
                        src={product.images?.[0] || 'https://placehold.co/300x300?text=No+Image'}
                        alt={product.name}
                        className="w-full h-48 object-contain rounded-md"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-orange-900 line-clamp-2 mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                      <p className="font-bold text-orange-700 mb-4">{formatPrice(product.price)}</p>

                      <Button
                        onClick={() => handleAddRelatedToWishlist(product)}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                        size="sm"
                      >
                        Add to Wishlist
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      <div className="mt-8 text-center">
        <Link href="/home">
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;