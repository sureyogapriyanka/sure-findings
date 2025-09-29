import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory, CATEGORIES } from '../lib/products';
import { Button } from '../components/ui/button.jsx';
import { ChevronLeft } from 'lucide-react';

const Category = () => {
  const [location, setLocation] = useLocation();
  // Extract category ID from URL - it should be the 3rd segment in the path
  // e.g., /sure-findings/category/294
  const pathSegments = location.split('/');
  const categoryId = pathSegments[3]; // This will be the category ID like '294'

  // Find category by ID
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      if (category) {
        try {
          setLoading(true);
          setError(null);
          // Use the category name from CATEGORIES constant to match products
          // Convert to lowercase to match backend data
          const categoryProducts = await getProductsByCategory(category.name);
          setProducts(categoryProducts);
        } catch (err) {
          console.error('Error fetching category products:', err);
          setError('Failed to load products');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCategoryProducts();
  }, [category]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <p className="text-muted-foreground mb-4">URL: {location}, Category ID: {categoryId}</p>
          <Link href="/">
            <Button variant="outline">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          <span className="ml-3">Loading products...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2 text-red-500">Error</h2>
          <p className="text-muted-foreground mb-4">Failed to load products: {error}</p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-2 text-orange-900">{category.name}</h1>
        <p className="text-muted-foreground">
          {products.length > 0
            ? `Discover our collection of ${category.name.toLowerCase()} products`
            : `No products available in ${category.name} category yet`}
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No products found</h2>
          <p className="text-muted-foreground mb-4">
            There are currently no products in this category. Check back later or contact us to suggest products for this category.
          </p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-6 flex justify-between items-center">
            <p className="text-muted-foreground">
              Showing {products.length} {products.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Category;