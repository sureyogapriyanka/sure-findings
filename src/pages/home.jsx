import { getFeaturedProducts, getDealsProducts, CATEGORIES } from '../lib/products';
import ProductCard from '../components/ProductCard';
import CategoryBanner from '../components/CategoryBanner';
import { Button } from '../components/ui/button';

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  const dealsProducts = getDealsProducts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=600" 
          alt="E-commerce hero banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Holiday Deals</h1>
            <p className="text-xl mb-6">Up to 70% off on electronics, fashion, and more</p>
            <Button className="bg-Sure-Findings Store-orange hover:bg-orange-600 text-gray-800 px-8 py-3 font-semibold" data-testid="hero-shop-now">
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Category Banners */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((category) => (
            <CategoryBanner key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Trending Deals */}
      <div className="bg-secondary py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Today's Deals</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dealsProducts.map((product) => (
              <div key={product.id} className="bg-card rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg transition-shadow" data-testid={`deal-${product.id}`}>
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
                <div className="text-center">
                  <div className="text-destructive font-bold text-lg">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                  <div className="text-sm font-medium line-clamp-2">{product.name}</div>
                  <div className="text-xs text-muted-foreground">Limited time</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-Sure-Findings Store-navy text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Get to Know Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    className="hover:text-Sure-Findings Store-orange bg-transparent border-none p-0 m-0 text-left cursor-pointer underline"
                    aria-label="About Sure-Findings Store"
                  >
                    About Sure-Findings Store
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-Sure-Findings Store-orange bg-transparent border-none p-0 m-0 text-left cursor-pointer underline"
                    aria-label="Careers"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-Sure-Findings Store-orange bg-transparent border-none p-0 m-0 text-left cursor-pointer underline"
                    aria-label="Sure-Findings Store Science"
                  >
                    Sure-Findings Store Science
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Make Money with Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    className="hover:text-Sure-Findings Store-orange bg-transparent border-none p-0 m-0 text-left cursor-pointer underline"
                    aria-label="Sell on Sure-Findings Store"
                  >
                    Sell on Sure-Findings Store
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-Sure-Findings Store-orange bg-transparent border-none p-0 m-0 text-left cursor-pointer underline"
                    aria-label="Sure-Findings Store Associates"
                  >
                    Sure-Findings Store Associates
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-Sure-Findings Store-orange bg-transparent border-none p-0 m-0 text-left cursor-pointer underline"
                    aria-label="Advertise Your Products"
                  >
                    Advertise Your Products
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Sure-Findings Store Payment Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    className="hover:text-Sure-Findings Store-orange bg-transparent border-none p-0 m-0 text-left cursor-pointer underline"
                    aria-label="Sure-Findings Store Rewards Visa"
                  >
                    Sure-Findings Store Rewards Visa
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-Sure-Findings Store-orange bg-transparent border-none p-0 m-0 text-left cursor-pointer underline"
                    aria-label="Sure-Findings Store Store Card"
                  >
                    Sure-Findings Store Store Card
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-Sure-Findings Store-orange bg-transparent border-none p-0 m-0 text-left cursor-pointer underline"
                    aria-label="Sure-Findings Store Business Card"
                  >
                    Sure-Findings Store Business Card
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Let Us Help You</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    className="hover:text-Sure-Findings Store-orange bg-transparent border-none p-0 m-0 text-left cursor-pointer underline"
                    aria-label="Your Account"
                  >
                    Your Account
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-Sure-Findings Store-orange bg-transparent border-none p-0 m-0 text-left cursor-pointer underline"
                    aria-label="Your Orders"
                  >
                    Your Orders
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-Sure-Findings Store-orange bg-transparent border-none p-0 m-0 text-left cursor-pointer underline"
                    aria-label="Help"
                  >
                    Help
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
            <p>&copy; 2024 Sure-Findings Store Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
