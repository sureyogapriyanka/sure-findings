import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Heart, Star } from 'lucide-react';
import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';
import { Button } from './ui/button.jsx';
import { useToast } from '../hooks/use-toast.js';

const ProductCard = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addItem } = useCart();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event from bubbling up to the Link
    try {
      await addItem(product.id, 1);
      toast({
        title: "Added to Cart Successfully! 🛒",
        description: (
          <div className="text-center">
            <p className="font-medium">{product.name}</p>
            <p className="text-sm mt-1">Quantity: 1</p>
            <p className="text-sm mt-1 text-green-600 font-medium">
              {formatPrice(product.price)} added to cart
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

  const handleBuyNow = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event from bubbling up to the Link
    try {
      // Add product to cart first
      await addItem(product.id, 1);

      // Show success message
      toast({
        title: "Redirecting to Checkout 🔄",
        description: (
          <div className="text-center">
            <p className="font-medium">{product.name}</p>
            <p className="text-sm mt-1">Preparing secure checkout...</p>
            <p className="text-sm mt-1 text-green-600 font-medium">
              {formatPrice(product.price)} added to order
            </p>
          </div>
        ),
        variant: "info",
        duration: 5000, // 5 seconds
      });

      // Redirect to checkout page after a short delay
      setTimeout(() => {
        navigate('/checkout');
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

  const handleWishlistToggle = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event from bubbling up to the Link
    try {
      if (isInWishlist(product.id)) {
        await toggleWishlist(product.id);
        toast({
          title: "Removed from Wishlist",
          description: (
            <div className="text-center">
              <p className="font-medium">{product.name}</p>
              <p className="text-sm mt-1">Product removed from your wishlist</p>
            </div>
          ),
          variant: "info",
          duration: 5000, // 5 seconds
        });
      } else {
        await toggleWishlist(product.id);
        toast({
          title: "Added to Wishlist! ❤️",
          description: (
            <div className="text-center">
              <p className="font-medium">{product.name}</p>
              <p className="text-sm mt-1">Product saved for later</p>
            </div>
          ),
          variant: "success",
          duration: 5000, // 5 seconds
        });
      }
    } catch (error) {
      toast({
        title: "Error Updating Wishlist",
        description: "Failed to update wishlist. Please try again.",
        variant: "destructive",
        duration: 5000, // 5 seconds
      });
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />);
    }

    const remaining = 5 - Math.ceil(rating);
    for (let i = 0; i < remaining; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-3 h-3 md:w-4 md:h-4 text-gray-300" />);
    }

    return stars;
  };

  const formatPrice = (price) => {
    // Handle case where price might be undefined
    if (price === undefined || price === null) {
      return '₹0.00';
    }

    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  // Calculate discount percentage if originalPrice exists
  const discountPercentage = product.originalPrice && product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/product/${product.id}`} className="block h-full">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
        <div className="block">
          <div className="relative">
            <img
              src={imageError ? 'https://placehold.co/300x300?text=No+Image' : product.images?.[0] || 'https://placehold.co/300x300?text=No+Image'}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={() => setImageError(true)}
            />
            {discountPercentage > 0 && (
              <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                {discountPercentage}% OFF
              </div>
            )}
            <button
              onClick={handleWishlistToggle}
              className="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors shadow-md"
              aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
              />
            </button>
          </div>

          <div className="p-4 flex-grow flex flex-col">
            <div className="flex items-center mb-2">
              <div className="flex mr-2">
                {renderStars(product.rating || 0)}
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.reviewCount || 0})
              </span>
            </div>

            <h3 className="font-medium text-base mb-3 line-clamp-2 text-gray-900">{product.name}</h3>

            <div className="flex items-center mb-3">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-xs text-green-600">In Stock</span>
            </div>

            <div className="mt-auto">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-bold text-lg text-gray-900">{formatPrice(product.price)}</div>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <div className="text-xs text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  size="sm"
                >
                  Add to Cart
                </Button>
                <Button
                  onClick={handleBuyNow}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  size="sm"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;