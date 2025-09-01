import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, MapPin, ShoppingCart, Menu, User } from 'lucide-react'
import { useCart } from '../hooks/useCart';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header = () => {
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartItemCount } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const categories = [
    { name: 'Electronics', path: '/category/electronics' },
    { name: 'Fashion', path: '/category/fashion' },
    { name: 'Books', path: '/category/books' },
    { name: 'Home & Kitchen', path: '/category/home' },
    { name: 'Beauty', path: '/category/beauty' }
  ];

  return (
    <header className="bg-[#131921] text-white sticky top-0 z-50 font-[Amazon Ember,sans-serif] shadow-lg">
      {/* Top Header */}
      <div className="bg-[#232f3e] text-xs py-2 shadow-md">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="font-semibold tracking-wide">Free shipping on orders over ₹2,500. Sign up for Prime and save more!</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between drop-shadow-lg">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold hover:text-[#febd69] transition-colors flex items-center rounded-lg px-2 py-1 shadow-sm" data-testid="logo-home">
              <span className="text-white">Sure-Findings Store</span>
            </Link>

            {/* ...existing code... */}

            {/* Location */}
            <div className="hidden md:flex items-center text-sm cursor-pointer hover:text-[#febd69] ml-2 px-2 py-1 rounded-lg shadow-sm border border-[#febd69]/20 transition-all" data-testid="location-selector">
              <MapPin className="h-4 w-4 mr-1" />
              <div>
                <div className="text-xs text-gray-300">Deliver to</div>
                <div className="font-medium">
                  Guntur, India 522001
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
            <div className="flex shadow-md rounded-lg overflow-hidden">
              <Input
                type="text"
                placeholder="Search Sure-Findings Store"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-none text-gray-800 focus:outline-none px-2"
                data-testid="search-input"
              />
              <Button
                type="submit"
                className="bg-[#febd69] hover:bg-yellow-400 px-4 py-2 rounded-r-lg transition-colors shadow-sm"
                data-testid="search-button"
              >
                <Search className="h-4 w-4 text-gray-800" />
              </Button>
            </div>
          </form>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            {/* Language/Country */}
            <div className="hidden md:flex items-center cursor-pointer hover:text-[#febd69] px-2 py-1 rounded-lg shadow-sm border border-[#febd69]/20 transition-all" data-testid="language-selector">
              <span className="text-sm mr-1">🇮🇳</span>
              <span className="text-sm">EN</span>
            </div>

            {/* Account Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer hover:text-[#febd69] px-2 py-1 rounded-lg shadow-sm border border-[#febd69]/20 transition-all" data-testid="account-menu">
                  <div className="text-xs">Hello, User</div>
                  <div className="font-medium text-sm flex items-center">
                    Account & Lists
                    <User className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/profile" data-testid="menu-profile">Your Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders" data-testid="menu-orders">Your Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist" data-testid="menu-wishlist">Your Wish List</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Orders */}
            <Link href="/orders" className="cursor-pointer hover:text-[#febd69] px-2 py-1 rounded-lg shadow-sm border border-[#febd69]/20 transition-all" data-testid="orders-link">
              <div className="text-xs">Returns</div>
              <div className="font-medium text-sm">& Orders</div>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative cursor-pointer hover:text-[#febd69] flex items-center px-2 py-1 rounded-lg shadow-sm border border-[#febd69]/20 transition-all" data-testid="cart-link">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-[#febd69] text-[#131921] rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold shadow-md" data-testid="cart-count">
                  {getCartItemCount()}
                </span>
              </div>
              <div className="text-xs mt-1 ml-1">Cart</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#232f3e] py-2 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-6 text-sm">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer hover:bg-[#131921] px-2 py-1 rounded-lg flex items-center shadow-sm border border-[#febd69]/20 transition-all" data-testid="all-categories">
                  <Menu className="h-4 w-4 mr-2" />
                  All
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {categories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link href={category.path} data-testid={`category-${category.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="hover:bg-[#febd69] hover:text-[#131921] px-2 py-1 rounded transition-colors"
                    >
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.path}
                className="cursor-pointer hover:bg-[#131921] px-2 py-1 rounded-lg shadow-sm border border-[#febd69]/20 transition-colors"
                data-testid={`nav-${category.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {category.name}
              </Link>
            ))}
            <div className="cursor-pointer hover:bg-[#131921] px-2 py-1 rounded-lg shadow-sm border border-[#febd69]/20 transition-colors" data-testid="nav-deals">Today's Deals</div>
            <div className="cursor-pointer hover:bg-[#131921] px-2 py-1 rounded-lg shadow-sm border border-[#febd69]/20 transition-colors" data-testid="nav-customer-service">Customer Service</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
