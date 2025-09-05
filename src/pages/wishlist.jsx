import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useCart } from '../hooks/useCart';
import { getProductById } from '../lib/products';
import { removeFromWishlist } from '../lib/storage';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Wishlist = () => {
  const { user } = useAuth();
  const { addItem } = useCart();
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    if (user?.wishlist) {
      const products = user.wishlist
        .map(productId => getProductById(productId))
        .filter(product => product !== undefined);
      setWishlistProducts(products);
    }
  }, [user?.wishlist]);

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
    setWishlistProducts(prev => prev.filter(p => p.id !== productId));
  };

  const handleAddToCart = (productId) => {
    addItem(productId, 1);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>);
    }

    return stars;
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please sign in to view your wishlist</h1>
          <Link href="/sure-findings/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (wishlistProducts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <Heart className="h-24 w-24 mx-auto text-gray-400 mb-4" />
        <h1 className="text-3xl font-bold mb-4">Your Wish List is Empty</h1>
        <p className="text-muted-foreground mb-8">
          Save items you love by clicking the heart icon on any product.
        </p>
        <Link href="/sure-findings/">
          <Button className="bg-amazon-orange hover:bg-orange-600 text-gray-800">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Your Wish List</h1>
        <div className="text-muted-foreground">
          {wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'}
        </div>
      </div>

      {/* Wishlist Actions */}
      <div className="mb-6 p-4 bg-card rounded-lg border">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Shopping List</h2>
            <p className="text-sm text-muted-foreground">
              Default list • Private • Created {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              Share list
            </Button>
            <Button variant="outline" size="sm">
              Manage list
            </Button>
          </div>
        </div>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistProducts.map((product) => {
          const discountPercentage = product.originalPrice 
            ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
            : 0;

          return (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Link href={`/sure-findings/product/${product.id}`}>
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-48 object-cover cursor-pointer"
                    data-testid={`wishlist-item-image-${product.id}`}
                  />
                </Link>
                
                {/* Remove from Wishlist Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 p-1 bg-white/80 hover:bg-white"
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  data-testid={`remove-wishlist-${product.id}`}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
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

              <CardContent className="p-4">
                <Link href={`/sure-findings/product/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary cursor-pointer" data-testid={`wishlist-item-name-${product.id}`}>
                    {product.name}
                  </h3>
                </Link>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center text-sm">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground" data-testid={`wishlist-item-rating-${product.id}`}>
                    ({product.reviewCount?.toLocaleString()})
                  </span>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary" data-testid={`wishlist-item-price-${product.id}`}>
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Availability */}
                <div className="text-xs mb-3">
                  {product.inStock ? (
                    <span className="text-green-600">✓ In Stock</span>
                  ) : (
                    <span className="text-red-600">Out of Stock</span>
                  )}
                  {product.shippingInfo?.freeShipping && (
                    <div className="text-green-600 mt-1">
                      🚚 {product.shippingInfo.prime ? 'Prime delivery' : 'FREE delivery'}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-amazon-orange hover:bg-orange-600 text-gray-800 font-semibold"
                    onClick={() => handleAddToCart(product.id)}
                    disabled={!product.inStock}
                    data-testid={`add-to-cart-wishlist-${product.id}`}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      onClick={() => handleRemoveFromWishlist(product.id)}
                      data-testid={`delete-wishlist-${product.id}`}
                    >
                      Delete
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      data-testid={`share-wishlist-${product.id}`}
                    >
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recommended Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">You might also like</h2>
        <div className="text-muted-foreground text-center py-8">
          <p>Browse products to discover items you might want to add to your wish list.</p>
          <Link href="/sure-findings/">
            <Button variant="outline" className="mt-4">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
