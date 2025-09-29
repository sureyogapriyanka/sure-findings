import { useState, useRef, useEffect } from 'react';
import { CATEGORIES } from '../lib/products';
import { Link, useLocation } from 'wouter';
import { Search, MapPin, ShoppingCart, Menu, User, X } from 'lucide-react'
import { useCart } from '../hooks/useCart';
import { searchProducts } from '../lib/products';
import { Input } from './ui/input.jsx';
import { Button } from './ui/button.jsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu.jsx';

const Header = () => {
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const inputRef = useRef(null);
  const { getCartItemCount, refreshCart } = useCart();

  // Update cart item count when cart changes
  useEffect(() => {
    const updateCartCount = () => {
      // Try multiple methods to get cart count
      try {
        // Method 1: Use the hook method
        const count1 = getCartItemCount();

        // Method 2: Direct localStorage access as fallback
        const storageData = JSON.parse(localStorage.getItem('ecommerce_app_data') || '{}');
        const count2 = storageData.cart ? storageData.cart.reduce((count, item) => count + (item.quantity || 0), 0) : 0;

        // Method 3: Direct cart access
        const directCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const count3 = directCart.reduce((count, item) => count + (item.quantity || 0), 0);

        // Use the highest count to ensure accuracy
        const finalCount = Math.max(count1, count2, count3);
        setCartItemCount(finalCount);
      } catch (error) {
        console.error('Error updating cart count:', error);
        // Fallback to direct cart access
        try {
          const directCart = JSON.parse(localStorage.getItem('cart') || '[]');
          const count = directCart.reduce((count, item) => count + (item.quantity || 0), 0);
          setCartItemCount(count);
        } catch (fallbackError) {
          console.error('Fallback error updating cart count:', fallbackError);
          setCartItemCount(0);
        }
      }
    };

    updateCartCount();

    // Listen for storage changes (in case cart is updated in another tab)
    const handleStorageChange = () => {
      refreshCart();
      updateCartCount();
    };

    window.addEventListener('storage', handleStorageChange);

    // Also update when the component mounts
    const interval = setInterval(updateCartCount, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [getCartItemCount, refreshCart]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowDropdown(false);
    }
  };

  // Amazon-like live search logic using backend API
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim()) {
        setIsLoading(true);
        try {
          console.log('Header search query:', searchQuery);
          const response = await searchProducts(searchQuery.trim());
          console.log('Header search results:', response);
          setSearchResults(response);
          setShowDropdown(true);
        } catch (error) {
          console.error('Search error:', error);
          setSearchResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSearchResults([]);
        setShowDropdown(false);
      }
    };

    // Debounce search requests
    const timeoutId = setTimeout(fetchSearchResults, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Hide dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const categories = CATEGORIES.map(cat => ({
    name: cat.name,
    path: `/category/${cat.id}`
  }));

  return (
    <header className="bg-[#131A22] text-white sticky top-0 z-50 font-[Amazon Ember,sans-serif] shadow-lg">
      {/* Top Header - using a more muted orange */}
      <div className="bg-[#e68a00] text-xs py-2 shadow-md">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="font-semibold tracking-wide text-[#131A22]">Free shipping on orders over ₹2,500. Sign up for Prime and save more!</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between drop-shadow-lg">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl md:text-2xl font-bold hover:text-[#e68a00] transition-colors flex items-center rounded-lg px-2 py-1 shadow-sm" data-testid="logo-home">
              <span className="text-white">Sure-Findings Store</span>
            </Link>

            {/* Location - hidden on mobile */}
            <div className="hidden sm:flex items-center text-sm cursor-pointer hover:text-[#e68a00] ml-2 px-2 py-1 rounded-lg shadow-sm border border-[#333333] transition-all" data-testid="location-selector">
              <MapPin className="h-4 w-4 mr-1" />
              <div>
                <div className="text-xs text-gray-300"></div>
                <div className="font-medium">

                </div>
              </div>
            </div>
          </div>

          {/* Search Bar - responsive width */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-2 md:mx-4">
            <div className="flex shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full" ref={inputRef}>
                <Input
                  type="text"
                  placeholder="Search online store Store"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-none text-gray-800 focus:outline-none px-2 text-sm md:text-base"
                  data-testid="search-input"
                  onFocus={() => searchResults.length > 0 && setShowDropdown(true)}
                />
                {showDropdown && (
                  <div className="absolute left-0 right-0 top-full z-50 bg-white text-black border border-gray-200 rounded-b-lg shadow-lg max-h-96 overflow-y-auto">
                    {isLoading ? (
                      <div className="px-4 py-2 text-gray-500">Searching...</div>
                    ) : searchResults.length > 0 ? (
                      <>
                        {searchResults.slice(0, 8).map(product => (
                          <div
                            key={product.id}
                            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onMouseDown={() => {
                              navigate(`/product/${product.id}`);
                              setShowDropdown(false);
                            }}
                          >
                            <img src={product.images?.[0] || '/placeholder.jpg'} alt={product.name} className="w-10 h-10 object-cover rounded mr-3" />
                            <div className="flex-1">
                              <div className="font-medium text-sm line-clamp-1">{product.name}</div>
                              <div className="text-xs text-gray-500 line-clamp-1">{product.brand}</div>
                            </div>
                            <div className="text-xs font-semibold ml-2">₹{product.price?.toLocaleString()}</div>
                          </div>
                        ))}
                        <div
                          className="px-4 py-2 text-blue-600 hover:underline cursor-pointer text-sm border-t"
                          onMouseDown={() => {
                            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                            setShowDropdown(false);
                          }}
                        >
                          See all results for "{searchQuery}"
                        </div>
                      </>
                    ) : searchQuery.trim() ? (
                      <div className="px-4 py-2 text-gray-500">No products found</div>
                    ) : null}
                  </div>
                )}
              </div>
              <Button
                type="submit"
                className="bg-[#e68a00] hover:bg-[#cc7a00] px-3 md:px-4 py-2 rounded-r-lg transition-all shadow-md text-[#131A22] font-bold border border-[#a88734]"
                data-testid="search-button"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Desktop User Actions - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language/Country */}
            <div className="flex items-center cursor-pointer hover:text-[#e68a00] px-2 py-1 rounded-lg shadow-sm border border-[#333333] transition-all" data-testid="language-selector">
              <span className="text-sm mr-1">🇮🇳</span>
            </div>

            {/* Account Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer hover:text-[#e68a00] px-2 py-1 rounded-lg shadow-sm border border-[#333333] transition-all" data-testid="account-menu">
                  <div className="text-xs"></div>
                  <div className="font-medium text-sm flex items-center">
                    my Account
                    <User className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white text-[#131A22]">
                <DropdownMenuItem asChild>
                  <Link href="/sure-findings/profile" data-testid="menu-profile">Your Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sure-findings/orders" data-testid="menu-orders">Your Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sure-findings/wishlist" data-testid="menu-wishlist">Your Wish List</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sure-findings/upi-test" data-testid="menu-upi-test">UPI Test</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Orders */}
            <Link href="/sure-findings/orders" className="cursor-pointer hover:text-[#e68a00] px-2 py-1 rounded-lg shadow-sm border border-[#333333] transition-all" data-testid="orders-link">

              <div className="font-medium text-sm">my Orders</div>
            </Link>

            {/* Cart */}
            <Link href="/sure-findings/cart" className="relative cursor-pointer hover:text-[#e68a00] flex items-center px-2 py-1 rounded-lg shadow-sm border border-[#333333] transition-all" data-testid="cart-link">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-[#e68a00] text-[#131A22] rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold shadow-md" data-testid="cart-count">
                  {cartItemCount}
                </span>
              </div>
              <div className="text-xs mt-1 ml-1 hidden lg:block">Cart</div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-[#131A22]/50"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile User Actions */}
              <div className="flex justify-between">
                <Link href="/sure-findings/orders" className="cursor-pointer hover:text-[#e68a00] px-2 py-1 rounded-lg shadow-sm border border-[#333333] transition-all flex-1 text-center">

                  <div className="font-medium text-sm">& Orders</div>
                </Link>

                <Link href="/sure-findings/cart" className="relative cursor-pointer hover:text-[#e68a00] flex items-center px-2 py-1 rounded-lg shadow-sm border border-[#333333] transition-all flex-1 text-center">
                  <div className="relative mx-auto">
                    <ShoppingCart className="h-6 w-6 mx-auto" />
                    <span className="absolute -top-2 -right-2 bg-[#e68a00] text-[#131A22] rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold shadow-md" data-testid="cart-count">
                      {cartItemCount}
                    </span>
                  </div>
                  <div className="text-xs mt-1">Cart</div>
                </Link>
              </div>

              {/* Mobile Account Menu */}
              <div className="flex justify-between">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer hover:text-[#e68a00] px-2 py-1 rounded-lg shadow-sm border border-[#333333] transition-all flex-1 text-center">
                      <div className="font-medium text-sm flex items-center justify-center">
                        Account
                        <User className="h-3 w-3 ml-1" />
                      </div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white text-[#131A22]">
                    <DropdownMenuItem asChild>
                      <Link href="/sure-findings/profile" data-testid="menu-profile">Your Account</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/sure-findings/orders" data-testid="menu-orders">Your Orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/sure-findings/wishlist" data-testid="menu-wishlist">Your Wish List</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/sure-findings/upi-test" data-testid="menu-upi-test">UPI Test</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="cursor-pointer hover:text-[#e68a00] px-2 py-1 rounded-lg shadow-sm border border-[#333333] transition-all flex-1 text-center">
                  <div className="text-xs">🇮🇳</div>
                  <div className="font-medium text-sm">EN</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Bar - using a more muted orange */}
      <div className="bg-[#1a242f] py-2 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4 text-sm overflow-x-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer hover:bg-[#131A22]/20 px-2 py-1 rounded-lg flex items-center shadow-sm border border-[#333333] transition-all whitespace-nowrap" data-testid="all-categories">
                  <Menu className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">All Categories</span>
                  <span className="sm:hidden">All</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-[#131A22]">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link href={category.path} data-testid={`category-${category.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="hover:bg-[#e68a00] hover:text-[#131A22] px-2 py-1 rounded transition-colors"
                    >
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Navigation items - scrollable on mobile */}
            <div className="flex space-x-2 md:space-x-4 overflow-x-auto scrollbar-hide">
              {categories.slice(0, 8).map((category) => (
                <Link
                  key={category.name}
                  href={category.path}
                  className="cursor-pointer hover:bg-[#131A22]/20 px-2 py-1 rounded-lg shadow-sm border border-[#333333] transition-colors whitespace-nowrap text-xs md:text-sm"
                  data-testid={`nav-${category.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;