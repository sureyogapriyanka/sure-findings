import { useState, useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { getProductsByCategory, getCategoryById } from '../lib/products';
import ProductCard from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';

const Category = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [],
    brands: [],
    rating: '',
    sortBy: 'relevance'
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(null);
  
  const productsPerPage = 12;

  useEffect(() => {
    const categoryData = getCategoryById(categoryName);
    setCategory(categoryData);
    
    const categoryProducts = getProductsByCategory(categoryName);
    setProducts(categoryProducts);
    applyFilters(categoryProducts, filters);
  }, [categoryName, filters]);

  useEffect(() => {
    applyFilters(products, filters);
  }, [filters, products]);

  const applyFilters = (productList, currentFilters) => {
    let filtered = [...productList];

    // Price range filter
    if (currentFilters.priceRange.length > 0) {
      filtered = filtered.filter(product => {
        return currentFilters.priceRange.some(range => {
          switch (range) {
            case '0-50':
              return product.price <= 50;
            case '50-200':
              return product.price > 50 && product.price <= 200;
            case '200-500':
              return product.price > 200 && product.price <= 500;
            case '500+':
              return product.price > 500;
            default:
              return true;
          }
        });
      });
    }

    // Brand filter
    if (currentFilters.brands.length > 0) {
      filtered = filtered.filter(product => 
        currentFilters.brands.includes(product.brand)
      );
    }

    // Rating filter
    if (currentFilters.rating) {
      const minRating = parseFloat(currentFilters.rating);
      filtered = filtered.filter(product => product.rating >= minRating);
    }

    // Sort products
    switch (currentFilters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default:
        // Keep original order for relevance
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleFilterChange = (filterType, value, checked) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      
      if (filterType === 'priceRange' || filterType === 'brands') {
        if (checked) {
          newFilters[filterType] = [...prev[filterType], value];
        } else {
          newFilters[filterType] = prev[filterType].filter(item => item !== value);
        }
      } else {
        newFilters[filterType] = value;
      }
      
      return newFilters;
    });
  };

  const availableBrands = [...new Set(products.map(p => p.brand))].sort();

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  if (!category) {
    return <div className="min-h-screen flex items-center justify-center">Category not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-4">
        <Link href="/sure-findings/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <span>{category.name}</span>
      </nav>

      {/* Category Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
        <p className="text-muted-foreground">{category.description}</p>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-card p-4 rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-4">Filters</h3>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Price Range</h4>
              <div className="space-y-2">
                {[
                  { value: '0-50', label: '$0 - $50' },
                  { value: '50-200', label: '$50 - $200' },
                  { value: '200-500', label: '$200 - $500' },
                  { value: '500+', label: '$500+' }
                ].map(({ value, label }) => (
                  <div key={value} className="flex items-center space-x-2">
                    <Checkbox
                      id={`price-${value}`}
                      checked={filters.priceRange.includes(value)}
                      onCheckedChange={(checked) => handleFilterChange('priceRange', value, checked)}
                      data-testid={`filter-price-${value}`}
                    />
                    <label htmlFor={`price-${value}`} className="text-sm">{label}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Brand</h4>
              <div className="space-y-2">
                {availableBrands.slice(0, 6).map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={filters.brands.includes(brand)}
                      onCheckedChange={(checked) => handleFilterChange('brands', brand, checked)}
                      data-testid={`filter-brand-${brand.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    />
                    <label htmlFor={`brand-${brand}`} className="text-sm">{brand}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Customer Rating</h4>
              <div className="space-y-2">
                {[
                  { value: '4', label: '4 & Up' },
                  { value: '3', label: '3 & Up' },
                  { value: '2', label: '2 & Up' }
                ].map(({ value, label }) => (
                  <div key={value} className="flex items-center space-x-2">
                    <Checkbox
                      id={`rating-${value}`}
                      checked={filters.rating === value}
                      onCheckedChange={(checked) => handleFilterChange('rating', checked ? value : '', checked)}
                      data-testid={`filter-rating-${value}`}
                    />
                    <label htmlFor={`rating-${value}`} className="text-sm">{label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-muted-foreground">
              {filteredProducts.length.toLocaleString()} results for "{category.name}"
            </div>
            <Select 
              value={filters.sortBy}
              onValueChange={(value) => handleFilterChange('sortBy', value)}
            >
              <SelectTrigger className="w-48" data-testid="sort-select">
                <SelectValue placeholder="Sort by: Relevance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Sort by: Relevance</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Customer Rating</SelectItem>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center">
              <nav className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  data-testid="pagination-previous"
                >
                  Previous
                </Button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      onClick={() => setCurrentPage(pageNum)}
                      data-testid={`pagination-${pageNum}`}
                    >
                      {pageNum}
                    </Button>
                  );
                })}
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  data-testid="pagination-next"
                >
                  Next
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
