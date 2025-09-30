import { Link } from 'wouter';
import { getFeaturedProducts, getDealsProducts, CATEGORIES } from '../lib/products';
import ProductCard from '../components/ProductCard';
import CategoryBanner from '../components/CategoryBanner';
import { Button } from '../components/ui/button.jsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../components/ui/carousel.jsx';
import { useState, useEffect } from 'react';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [dealsProducts, setDealsProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dynamic headline animation state
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setAnimate(a => !a), 2000);
    return () => clearInterval(interval);
  }, []);

  // Carousel images (replace with your own if needed)
  const heroImages = [
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=600',
    'https://img.intertoons.com/wp-content/uploads/2024/04/com-article.jpeg',
    'https://s3.ap-south-1.amazonaws.com/prod-easebuzz-static/static/base/assets_aug_2021/img/easebuzz/easebuzz-explainer/explainers-ecommerce/start-online-store/6.png',

  ];
  // Carousel auto-slide state
  const [carouselApi, setCarouselApi] = useState(null);
  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselApi]);

  // Fetch featured and deals products
  useEffect(() => {
    const fetchHomePageProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch featured products
        const featured = await getFeaturedProducts();
        setFeaturedProducts(featured);

        // Fetch deals products
        const deals = await getDealsProducts();
        setDealsProducts(deals);
      } catch (err) {
        console.error('Error fetching home page products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchHomePageProducts();
  }, []);

  // Show loading state
  if (loading && featuredProducts.length === 0 && dealsProducts.length === 0) {
    return (
      <div className="min-h-screen bg-background text-foreground pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF9900] mx-auto"></div>
          <p className="mt-4 text-lg">Loading homepage...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      {/* Hero Banner */}

      <div className="relative h-96 overflow-hidden rounded-xl mb-12">
        <Carousel opts={{ loop: true }} setApi={setCarouselApi}>
          <CarouselContent>
            {heroImages.map((img, idx) => (
              <CarouselItem key={idx}>
                <img
                  src={img}
                  alt={`Hero banner ${idx + 1}`}
                  className="w-full h-96 object-cover"
                  draggable="false"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-r from-[#131A22]/80 via-[#232f3e]/60 to-[#131A22]/80 flex items-center justify-center">
          <div className="text-center text-white select-none">
            <h1
              className={`text-6xl sm:text-7xl font-extrabold mb-4 whitespace-pre-line break-words mx-auto max-w-3xl transition-transform duration-700 bg-gradient-to-br from-[#FF9900] via-[#f3a847] to-[#FF9900] bg-clip-text text-transparent drop-shadow-lg ${animate ? 'animate-shake-zoom' : ''}`}
              style={{
                lineHeight: 1.05,
                textShadow: '0 4px 32px #131A22, 0 2px 0rgb(247, 243, 239)',
                letterSpacing: '-0.03em',
              }}
            >
              {`Holiday\nDeals`}
            </h1>
            <p className="text-lg sm:text-xl mb-6 max-w-lg mx-auto whitespace-pre-line bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-200 bg-clip-text text-transparent font-semibold">
              {`Up to 70% off\non electronics, fashion,\nand more`}
            </p>
            <Button className="bg-[#FF9900] hover:bg-[#e68a00] text-[#131A22] px-8 py-3 font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 border border-[#a88734]" data-testid="hero-shop-now">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      {/* Animation keyframes for shake/zoom headline */}
      <style>{`
        @keyframes shake-zoom {
          0% { transform: scale(1) rotate(-1deg); }
          10% { transform: scale(1.08) rotate(1deg); }
          20% { transform: scale(1.12) rotate(-2deg); }
          30% { transform: scale(1.15) rotate(2deg); }
          40% { transform: scale(1.12) rotate(-1deg); }
          50% { transform: scale(1.08) rotate(1deg); }
          60% { transform: scale(1.12) rotate(-2deg); }
          70% { transform: scale(1.15) rotate(2deg); }
          80% { transform: scale(1.12) rotate(-1deg); }
          90% { transform: scale(1.08) rotate(1deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        .animate-shake-zoom {
          animation: shake-zoom 1.5s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>


      {/* Category Banners - Show all categories */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#131A22] dark:text-white mb-2">
            Shop by Category
          </h2>
          <div className="w-24 h-1 bg-[#FF9900] mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Browse our wide range of product categories
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <CategoryBanner key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#131A22] dark:text-white mb-2">
            Featured Products
          </h2>
          <div className="w-24 h-1 bg-[#FF9900] mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products
          </p>
        </div>
        {error ? (
          <div className="text-center py-8 text-red-500">
            Error loading featured products: {error}
          </div>
        ) : featuredProducts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No featured products available
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Deals Products */}
      <div className="max-w-7xl mx-auto px-4 py-8 bg-orange-50 rounded-xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#131A22] dark:text-white mb-2">
            Today's Deals
          </h2>
          <div className="w-24 h-1 bg-[#FF9900] mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Limited time offers and exclusive discounts
          </p>
        </div>
        {error ? (
          <div className="text-center py-8 text-red-500">
            Error loading deals products: {error}
          </div>
        ) : dealsProducts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No deals available at the moment
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {dealsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Customer Service Section (Amazon-style boxes) */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#131A22] dark:text-white mb-2">
            Customer Service
          </h2>
          <div className="w-24 h-1 bg-[#FF9900] mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            We're here to help you with anything you need
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#232f3e] rounded-lg p-6 shadow-lg flex flex-col items-center text-center border border-[#dddddd] dark:border-[#333333] transform transition-all duration-300 hover:scale-105">
            <span className="text-3xl mb-2">📦</span>
            <h3 className="font-semibold mb-2 text-[#131A22] dark:text-white">Your Orders</h3>
            <p className="text-sm text-[#666666] dark:text-[#aaaaaa] mb-4">Track, return, or buy things again</p>
            <Button className="w-full bg-[#FF9900] hover:bg-[#e68a00] text-[#131A22] border-none" asChild>
              <Link href="/sure-findings/orders">Go to Orders</Link>
            </Button>
          </div>
          <div className="bg-white dark:bg-[#232f3e] rounded-lg p-6 shadow-lg flex flex-col items-center text-center border border-[#dddddd] dark:border-[#333333] transform transition-all duration-300 hover:scale-105">
            <span className="text-3xl mb-2">💳</span>
            <h3 className="font-semibold mb-2 text-[#131A22] dark:text-white">Payments & Gift Cards</h3>
            <p className="text-sm text-[#666666] dark:text-[#aaaaaa] mb-4">Manage payment methods and gift cards</p>
            <Button className="w-full bg-[#FF9900] hover:bg-[#e68a00] text-[#131A22] border-none" asChild>
              <Link href="/sure-findings/profile#payment">Manage Payments</Link>
            </Button>
          </div>
          <div className="bg-white dark:bg-[#232f3e] rounded-lg p-6 shadow-lg flex flex-col items-center text-center border border-[#dddddd] dark:border-[#333333] transform transition-all duration-300 hover:scale-105">
            <span className="text-3xl mb-2">🔒</span>
            <h3 className="font-semibold mb-2 text-[#131A22] dark:text-white">Account Settings</h3>
            <p className="text-sm text-[#666666] dark:text-[#aaaaaa] mb-4">Change your email, password, and more</p>
            <Button className="w-full bg-[#FF9900] hover:bg-[#e68a00] text-[#131A22] border-none" asChild>
              <Link href="/sure-findings/profile">Account Settings</Link>
            </Button>
          </div>
          <div className="bg-white dark:bg-[#232f3e] rounded-lg p-6 shadow-lg flex flex-col items-center text-center border border-[#dddddd] dark:border-[#333333] transform transition-all duration-300 hover:scale-105">
            <span className="text-3xl mb-2">❓</span>
            <h3 className="font-semibold mb-2 text-[#131A22] dark:text-white">Help & Support</h3>
            <p className="text-sm text-[#666666] dark:text-[#aaaaaa] mb-4">Browse help topics or contact us</p>
            <Button className="w-full bg-[#FF9900] hover:bg-[#e68a00] text-[#131A22] border-none" asChild>
              <Link href="/sure-findings/faq">Get Help</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#131A22] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-xl">Get to Know Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    className="hover:text-[#FF9900] bg-transparent border-none p-0 m-0 text-left cursor-pointer underline transition-colors duration-300"
                    aria-label="About Sure-Findings Store"
                  >
                    About Sure-Findings Store
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-[#FF9900] bg-transparent border-none p-0 m-0 text-left cursor-pointer underline transition-colors duration-300"
                    aria-label="Careers"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-[#FF9900] bg-transparent border-none p-0 m-0 text-left cursor-pointer underline transition-colors duration-300"
                    aria-label="Sure-Findings Store Science"
                  >
                    Sure-Findings Store Science
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-xl">Make Money with Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    className="hover:text-[#FF9900] bg-transparent border-none p-0 m-0 text-left cursor-pointer underline transition-colors duration-300"
                    aria-label="Sell on Sure-Findings Store"
                  >
                    Sell on Sure-Findings Store
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-[#FF9900] bg-transparent border-none p-0 m-0 text-left cursor-pointer underline transition-colors duration-300"
                    aria-label="Sure-Findings Store Associates"
                  >
                    Sure-Findings Store Associates
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-[#FF9900] bg-transparent border-none p-0 m-0 text-left cursor-pointer underline transition-colors duration-300"
                    aria-label="Advertise Your Products"
                  >
                    Advertise Your Products
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-xl">Sure-Findings Store Payment Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    className="hover:text-[#FF9900] bg-transparent border-none p-0 m-0 text-left cursor-pointer underline transition-colors duration-300"
                    aria-label="Sure-Findings Store Rewards Visa"
                  >
                    Sure-Findings Store Rewards Visa
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-[#FF9900] bg-transparent border-none p-0 m-0 text-left cursor-pointer underline transition-colors duration-300"
                    aria-label="Sure-Findings Store Store Card"
                  >
                    Sure-Findings Store Store Card
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-[#FF9900] bg-transparent border-none p-0 m-0 text-left cursor-pointer underline transition-colors duration-300"
                    aria-label="Sure-Findings Store Business Card"
                  >
                    Sure-Findings Store Business Card
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-xl">Let Us Help You</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    className="hover:text-[#FF9900] bg-transparent border-none p-0 m-0 text-left cursor-pointer underline transition-colors duration-300"
                    aria-label="Your Account"
                  >
                    Your Account
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-[#FF9900] bg-transparent border-none p-0 m-0 text-left cursor-pointer underline transition-colors duration-300"
                    aria-label="Your Orders"
                  >
                    Your Orders
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-[#FF9900] bg-transparent border-none p-0 m-0 text-left cursor-pointer underline transition-colors duration-300"
                    aria-label="Help"
                  >
                    Help
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333333] mt-8 pt-4 text-center text-sm">
            <p>&copy; 2024 Sure-Findings Store Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Amazon-style Black Info Footer */}
      <div className="bg-[#131A22] text-gray-200 py-10 mt-0 border-t border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-3 text-lg text-[#FF9900]">About Us</h3>
            <p className="text-sm mb-2">Sure-Findings Store is your trusted online marketplace for electronics, fashion, home, and more. We deliver quality products and excellent service, inspired by the best in global e-commerce.</p>
            <p className="text-xs text-gray-400">&copy; 2025 Sure-Findings Store. All rights reserved.</p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg text-[#FF9900]">Contact & Address</h3>
            <ul className="text-sm space-y-1">
              <li>Sure-Findings Store HQ</li>
              <li>123 Market Street</li>
              <li>Guntur, Andhra Pradesh, India 522001</li>
              <li>Email: support@surefindings.com</li>
              <li>Phone: +91 98765 43210</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg text-[#FF9900]">Information</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:text-[#FF9900] hover:underline transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-[#FF9900] hover:underline transition-colors duration-300">Press Releases</a></li>
              <li><a href="#" className="hover:text-[#FF9900] hover:underline transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-[#FF9900] hover:underline transition-colors duration-300">Investor Relations</a></li>
              <li><a href="#" className="hover:text-[#FF9900] hover:underline transition-colors duration-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#FF9900] hover:underline transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg text-[#FF9900]">Customer Support</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:text-[#FF9900] hover:underline transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-[#FF9900] hover:underline transition-colors duration-300">Returns</a></li>
              <li><a href="#" className="hover:text-[#FF9900] hover:underline transition-colors duration-300">Shipping Info</a></li>
              <li><a href="#" className="hover:text-[#FF9900] hover:underline transition-colors duration-300">Order Tracking</a></li>
              <li><a href="#" className="hover:text-[#FF9900] hover:underline transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;