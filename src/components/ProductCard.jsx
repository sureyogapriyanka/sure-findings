import { Link } from 'wouter';
import { Star, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCart } from '../hooks/useCart';
import { addToWishlist, removeFromWishlist, getCurrentUser } from '../lib/storage';
import { useState } from 'react';

const ProductCard = ({ product, className = '' }) => {
  const { addItem } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(() => {
    const user = getCurrentUser();
    return user.wishlist.includes(product.id);
  });

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, 1);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
      setIsWishlisted(false);
    } else {
      addToWishlist(product.id);
      setIsWishlisted(true);
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-3 w-3 fill-yellow-400/50 text-yellow-400" />);
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-3 w-3 text-gray-300" />);
    }

    return stars;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={`product-card bg-card rounded-lg shadow-md overflow-hidden cursor-pointer border border-border hover:shadow-lg transition-all duration-200 hover:-translate-y-1 ${className}`}>
      <Link href={`/product/${product.id}`}>
        <div className="relative">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          
          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 p-1 bg-white/80 hover:bg-white"
            onClick={handleWishlistToggle}
            data-testid={`wishlist-${product.id}`}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </Button>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.tags?.map((tag) => (
              <Badge key={tag} variant={
                tag === 'Best Seller' ? 'destructive' :
                tag === 'New' ? 'secondary' :
                tag === 'Limited Offer' ? 'default' :
                'outline'
              } className="text-xs">
                {tag}
              </Badge>
            ))}
            {discountPercentage > 0 && (
              <Badge variant="destructive" className="text-xs">
                {discountPercentage}% OFF
              </Badge>
            )}
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2" data-testid={`product-name-${product.id}`}>
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-muted-foreground" data-testid={`product-rating-${product.id}`}>
              ({product.reviewCount?.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary" data-testid={`product-price-${product.id}`}>
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Shipping Info */}
          <div className="text-xs text-green-600 mb-3">
            {product.shippingInfo?.freeShipping && (
              <div>
                {product.shippingInfo.prime ? '🚚 Prime delivery' : '🚚 FREE delivery'}
              </div>
            )}
          </div>

          {/* Stock Status */}
          <div className="text-xs mb-3">
            {product.inStock ? (
              <span className="text-green-600">✓ In Stock</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
            {product.stockCount && product.stockCount < 10 && (
              <span className="text-orange-600 ml-2">
                Only {product.stockCount} left in stock
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button 
            className="w-full bg-amazon-orange hover:bg-orange-600 text-gray-800 font-semibold"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            data-testid={`add-to-cart-${product.id}`}
          >
            Add to Cart
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
