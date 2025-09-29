import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { AlertCircle, Search, Home, User, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function NotFound() {
  const [location, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 p-4">
      <Card className="w-full max-w-4xl mx-4 shadow-xl border border-orange-200">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 p-4 rounded-full">
              <AlertCircle className="h-12 w-12 text-orange-600" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900">404 - Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-center text-gray-600 mb-8 text-lg">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Search Section */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
              <Search className="h-5 w-5 mr-2 text-orange-600" />
              Search Our Products
            </h3>
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="flex-1 border-2 border-orange-300 focus:border-orange-500 rounded-lg py-3 px-4"
                />
                <Button type="submit" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                  Search
                </Button>
              </div>
            </form>
          </div>

          {/* Helpful Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Link href="/" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-orange-100">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <Home className="h-10 w-10 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Back to Home</h3>
                  <p className="text-gray-600 text-sm">Return to our main page</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-orange-100">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <User className="h-10 w-10 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">About Us</h3>
                  <p className="text-gray-600 text-sm">Learn about our company</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/contact" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-orange-100">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <Phone className="h-10 w-10 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
                  <p className="text-gray-600 text-sm">Get in touch with our team</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Support Section */}
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2 text-orange-600" />
              Need More Help?
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Our support team is available 24/7 to assist you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:support@surefindings.com"
                className="text-orange-600 hover:text-orange-700 font-medium text-center"
              >
                support@surefindings.com
              </a>
              <span className="hidden sm:block">|</span>
              <a
                href="tel:+919876543210"
                className="text-orange-600 hover:text-orange-700 font-medium text-center"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}