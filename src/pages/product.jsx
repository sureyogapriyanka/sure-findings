import { useState, useEffect } from 'react';
import { Link, useLocation, Redirect, useParams } from 'wouter';
import { Heart, Star, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';
import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';
import { Button } from '../components/ui/button.jsx';
import { useToast } from '../hooks/use-toast.js';
import { getProductById, getRelatedProducts } from '../lib/products';
import ProductCard from '../components/ProductCard';

const Product = () => {
  const [location, setLocation] = useLocation();
  // Use useParams instead of manually parsing the URL
  const params = useParams();
  const productId = params.productId;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [redirectToCheckout, setRedirectToCheckout] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addItem } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check if productId exists
        if (!productId) {
          setError('Product ID not found in URL');
          return;
        }

        const data = await getProductById(productId);

        if (data) {
          setProduct(data);
          setSelectedImage(0);

          // Fetch related products
          try {
            const related = await getRelatedProducts(productId);
            setRelatedProducts(related);
          } catch (relatedError) {
            // Silently handle related products error
          }
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError(err.message || 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    } else {
      setError('Product ID not found in URL');
      setLoading(false);
    }
  }, [productId, location]);

  // Redirect to checkout if buyNow is triggered
  if (redirectToCheckout) {
    return <Redirect to="/checkout" />;
  }

  const handleAddToCart = async () => {
    try {
      await addItem(product.id, quantity);
      // Show success message with toast
      toast({
        title: "Added to Cart Successfully! 🛒",
        description: (
          <div className="text-center">
            <p className="font-medium">{product.name}</p>
            <p className="text-sm mt-1">Quantity: {quantity}</p>
            <p className="text-sm mt-1 text-green-600 font-medium">
              {formatPrice(product.price * quantity)} added to cart
            </p>
          </div>
        ),
        variant: "success",
        duration: 5000, // 5 seconds
      });
    } catch (error) {
      toast({
        title: "Error Adding to Cart",
        description: "Failed to add product to cart. Please try again.",
        variant: "destructive",
        duration: 5000, // 5 seconds
      });
    }
  };

  const handleBuyNow = async () => {
    try {
      // Add product to cart first
      await addItem(product.id, quantity);

      // Show success message
      toast({
        title: "Redirecting to Checkout 🔄",
        description: (
          <div className="text-center">
            <p className="font-medium">{product.name}</p>
            <p className="text-sm mt-1">Quantity: {quantity}</p>
            <p className="text-sm mt-1 text-green-600 font-medium">
              {formatPrice(product.price * quantity)} added to order
            </p>
            <p className="text-sm mt-1">Preparing secure checkout...</p>
          </div>
        ),
        variant: "info",
        duration: 5000, // 5 seconds
      });

      // Redirect to checkout page after a short delay
      setTimeout(() => {
        setLocation('/checkout');
      }, 1500);
    } catch (error) {
      toast({
        title: "Error Processing Order",
        description: "Failed to add product to cart. Please try again.",
        variant: "destructive",
        duration: 5000, // 5 seconds
      });
    }
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product.id);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    const remaining = 5 - Math.ceil(rating);
    for (let i = 0; i < remaining; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }

    return stars;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading product details...</h1>
          <p className="text-muted-foreground">Product ID: {productId || 'Not found'}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Product</h1>
          <p className="text-red-500 mb-4">{error}</p>
          <p className="text-muted-foreground mb-4">Product ID: {productId || 'Not found'}</p>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-4">Product ID: {productId || 'Not found'}</p>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="max-w-7xl mx-auto px-4 py-6"
      style={{
        background: 'linear-gradient(180deg, #d56f00 0%, #f3f4f6 40%, #e3e6ea 80%, #232f3e 100%)',
        minHeight: '100vh',
        borderRadius: '1.5rem',
        boxShadow: '0 2px 16px 0 rgba(213, 111, 0, 0.3)'
      }}
    >
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${product.category}`} className="hover:text-primary capitalize">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="capitalize">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img
              src={product.images?.[selectedImage] || product.images?.[0] || 'https://via.placeholder.com/500x500?text=No+Image'}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg border border-gray-200"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images?.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 flex-shrink-0 rounded-md border-2 ${selectedImage === index ? 'border-orange-500' : 'border-gray-200'}`}
              >
                <img
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-2xl font-bold text-orange-900">{product.name}</h1>
            <button
              onClick={handleWishlistToggle}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                className={`w-6 h-6 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
              />
            </button>
          </div>

          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {renderStars(product.rating || 0)}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount || 0} reviews)
            </span>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl font-bold text-orange-800">{formatPrice(product.price)}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-bold px-2 py-1 rounded">
                    {discountPercentage}% OFF
                  </span>
                </>
              )}
            </div>
            {product.originalPrice && product.originalPrice > product.price && (
              <div className="text-green-600 font-medium">
                You save {formatPrice(product.originalPrice - product.price)} ({discountPercentage}%)
              </div>
            )}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              )) || <li>Standard features included</li>}
            </ul>
          </div>

          <div className="border-t border-b border-gray-200 py-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-3"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                onClick={handleBuyNow}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3"
              >
                Buy Now
              </Button>
            </div>
          </div>

          {/* Product Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
              <Truck className="w-5 h-5 text-orange-600 mr-2" />
              <div>
                <div className="text-xs text-orange-800 font-medium">Free Delivery</div>
                <div className="text-xs text-orange-600">On orders over ₹499</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <div>
                <div className="text-xs text-orange-800 font-medium">Secure Payment</div>
                <div className="text-xs text-orange-600">100% protected</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
              <RotateCcw className="w-5 h-5 text-orange-600 mr-2" />
              <div>
                <div className="text-xs text-orange-800 font-medium">Easy Returns</div>
                <div className="text-xs text-orange-600">30-day policy</div>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <p className="mb-1"><span className="font-medium">Category:</span> <span className="capitalize">{product.category}</span></p>
            <p className="mb-1"><span className="font-medium">Brand:</span> {product.brand}</p>
            <p className="flex items-center">
              <span className="font-medium mr-2">Availability:</span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                In Stock
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-orange-800">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;