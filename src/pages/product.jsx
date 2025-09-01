import { useState, useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';
import { getProductById, getRelatedProducts, getProductReviews, addReview } from '../lib/products';
import { useCart } from '../hooks/useCart';
// import { useAuth } from '../hooks/useAuth';
import { addToWishlist, removeFromWishlist, getCurrentUser } from '../lib/storage';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
// import { Separator } from '../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import ProductCard from '../components/ProductCard';

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    rating: 5,
    title: '',
    content: ''
  });
  const [showReviewForm, setShowReviewForm] = useState(false);

  const { addItem } = useCart();
 // const { user } = useAuth();

  useEffect(() => {
    const productData = getProductById(productId);
    setProduct(productData);
    
    if (productData) {
      const related = getRelatedProducts(productId);
      setRelatedProducts(related);
      
      const productReviews = getProductReviews(productId);
      setReviews(productReviews);

      // Initialize selected options with first available option
      const initialOptions = {};
      if (productData.options) {
        Object.keys(productData.options).forEach(key => {
          initialOptions[key] = productData.options[key][0];
        });
      }
      setSelectedOptions(initialOptions);

      // Check if product is in wishlist
      const currentUser = getCurrentUser();
      setIsWishlisted(currentUser.wishlist.includes(productId));
    }
  }, [productId]);

  const handleAddToCart = () => {
    addItem(productId, quantity, selectedOptions);
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(productId);
      setIsWishlisted(false);
    } else {
      addToWishlist(productId);
      setIsWishlisted(true);
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewForm.title && reviewForm.content) {
      addReview(productId, reviewForm);
      const updatedReviews = getProductReviews(productId);
      setReviews(updatedReviews);
      setReviewForm({ rating: 5, title: '', content: '' });
      setShowReviewForm(false);
    }
  };

  const renderStars = (rating, className = "h-4 w-4") => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className={`${className} fill-yellow-400 text-yellow-400`} />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className={`${className} fill-yellow-400/50 text-yellow-400`} />);
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className={`${className} text-gray-300`} />);
    }

    return stars;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
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
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${product.category}`} className="hover:text-primary capitalize">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
              data-testid="product-main-image"
            />
          </div>
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} view ${index + 1}`}
                className={`w-16 h-16 rounded border cursor-pointer hover:border-primary ${
                  selectedImage === index ? 'border-primary' : ''
                }`}
                onClick={() => setSelectedImage(index)}
                data-testid={`product-thumbnail-${index}`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2" data-testid="product-title">{product.name}</h1>
          
          {/* Brand and Visit Store */}
          <div className="mb-4">
            <span className="text-muted-foreground">Brand: </span>
            <span className="text-primary font-medium">{product.brand}</span>
          </div>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {renderStars(product.rating, "h-5 w-5")}
            </div>
            <span className="ml-2 text-primary font-medium" data-testid="product-rating">{product.rating}</span>
            <span className="mx-2 text-muted-foreground">|</span>
            <span className="text-primary hover:underline cursor-pointer" data-testid="product-review-count">
              {product.reviewCount?.toLocaleString()} reviews
            </span>
          </div>
          
          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-primary" data-testid="product-price">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <Badge variant="destructive" className="text-sm">
                    {discountPercentage}% off
                  </Badge>
                </>
              )}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {product.shippingInfo?.freeShipping && 'FREE delivery by Tuesday, November 28'}
            </div>
          </div>
          
          {/* Availability */}
          <div className="mb-6">
            <div className={`font-medium mb-2 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? (
                <>
                  <Shield className="inline h-4 w-4 mr-1" />
                  In Stock
                </>
              ) : (
                'Out of Stock'
              )}
            </div>
            {product.inStock && (
              <div className="text-sm text-muted-foreground">
                Ships from and sold by Sure-Findings Store
              </div>
            )}
          </div>
          
          {/* Options */}
          {product.options && (
            <div className="mb-6 space-y-4">
              {Object.entries(product.options).map(([optionKey, optionValues]) => (
                <div key={optionKey}>
                  <label className="block text-sm font-medium mb-2 capitalize">
                    {optionKey}:
                  </label>
                  <Select
                    value={selectedOptions[optionKey] || optionValues[0]}
                    onValueChange={(value) => setSelectedOptions(prev => ({ ...prev, [optionKey]: value }))}
                  >
                    <SelectTrigger className="w-48" data-testid={`option-${optionKey}`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {optionValues.map((value) => (
                        <SelectItem key={value} value={value}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          )}
          
          {/* Quantity and Actions */}
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center border border-border rounded">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  data-testid="quantity-decrease"
                >
                  -
                </Button>
                <span className="px-4 py-2 border-x border-border" data-testid="quantity-display">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  data-testid="quantity-increase"
                >
                  +
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                Maximum order quantity: 10
              </div>
            </div>
            
            <div className="space-y-3">
              <Button 
                className="w-full bg-Sure-Findings Store-orange hover:bg-orange-600 text-gray-800 font-semibold"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                data-testid="add-to-cart-button"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleWishlistToggle}
                data-testid="wishlist-button"
              >
                <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                {isWishlisted ? 'Remove from Wish List' : 'Add to Wish List'}
              </Button>
            </div>
          </div>

          {/* Shipping & Returns */}
          <div className="border-t border-border pt-6">
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Truck className="h-4 w-4 mr-2 text-green-600" />
                <span>FREE delivery on orders over $35</span>
              </div>
              <div className="flex items-center">
                <RotateCcw className="h-4 w-4 mr-2 text-blue-600" />
                <span>FREE returns within 30 days</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-purple-600" />
                <span>2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="mb-12">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-6">
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">{product.description}</p>
            {product.features && (
              <>
                <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="specifications" className="mt-6">
          {product.specifications && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">{key}:</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-6">
            {/* Review Summary */}
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <div className="flex items-center mr-3">
                    {renderStars(product.rating, "h-6 w-6")}
                  </div>
                  <span className="text-2xl font-bold">{product.rating}</span>
                  <span className="text-muted-foreground ml-2">out of 5</span>
                </div>
                <div className="text-muted-foreground">
                  Based on {product.reviewCount?.toLocaleString()} reviews
                </div>
              </div>
              
              <Button 
                onClick={() => setShowReviewForm(!showReviewForm)}
                data-testid="write-review-button"
              >
                Write a Review
              </Button>
            </div>

            {/* Review Form */}
            {showReviewForm && (
              <form onSubmit={handleReviewSubmit} className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-4">Write a Review</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Rating</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <Button
                          key={rating}
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setReviewForm(prev => ({ ...prev, rating }))}
                          data-testid={`rating-${rating}`}
                        >
                          <Star 
                            className={`h-6 w-6 ${
                              rating <= reviewForm.rating 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Review Title</label>
                    <Input
                      value={reviewForm.title}
                      onChange={(e) => setReviewForm(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Summarize your experience"
                      data-testid="review-title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Review</label>
                    <Textarea
                      value={reviewForm.content}
                      onChange={(e) => setReviewForm(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Tell others about your experience with this product"
                      rows={4}
                      data-testid="review-content"
                    />
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button type="submit" data-testid="submit-review">Submit Review</Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowReviewForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {/* Individual Reviews */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-border pb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="font-semibold mr-2">{review.userName}</span>
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {review.verified && 'Verified Purchase • '}
                        {new Date(review.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{review.title}</h4>
                  <p className="text-muted-foreground mb-3">{review.content}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <Button variant="ghost" size="sm">
                      Helpful ({review.helpful})
                    </Button>
                    <Button variant="ghost" size="sm">
                      Report
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
