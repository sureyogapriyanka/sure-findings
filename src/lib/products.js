import api from '../services/api.js';
// Import local products data
import localProducts from '../../products.js';

// Add debugging to check if products are imported correctly
console.log('Local products imported:', localProducts?.length || 'undefined');
if (localProducts && localProducts.length > 0) {
  console.log('First product sample:', {
    id: localProducts[0].id,
    name: localProducts[0].name,
    category: localProducts[0].category
  });
}

// Export the products array directly for easier access
export { localProducts };

export const CATEGORIES = [
  { id: '294', name: 'electronics', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi5GsDx67AnihQNN3i8vCYa1y06gsmcYWu7Q&s' },
  { id: '295', name: 'fashion', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '296', name: 'grocery', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
  { id: '297', name: 'home appliances', image: 'https://d33v4339jhl8k0.cloudfront.net/docs/assets/55e7171d90336027d77078f6/images/5c8f56740428633d2cf3b380/file-wGVV7yqBMZ.png' },
  { id: '298', name: 'health', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dS_7qKom06_ORM-6NLwN9O1t5YBwYB4caA&s' },
  { id: '299', name: 'books', image: 'https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Feature.jpg?fit=569%2C509&ssl=1' },
  { id: '300', name: 'sports', image: 'https://media.gettyimages.com/id/598160468/vector/set-of-sports-equipment.jpg?s=612x612&w=gi&k=20&c=SN_5gqwOotNQn7NYGPCW5DAy-1ajAYP_i9wiLUm4eM4=' },
  { id: '301', name: 'toys', image: 'https://assets.thehansindia.com/h-upload/2024/12/12/1505510-amazon.webp' },
  { id: '302', name: 'automotive', image: 'https://images.unsplash.com/photo-1543429776-2782fc586c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
  { id: '303', name: 'beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
];

// Function to get all products (for ProductList component)
export const getAllProducts = async (page = 1, limit = 300) => {
  try {
    // Use local products instead of API
    const allProducts = localProducts;
    console.log('getAllProducts - localProducts count:', allProducts?.length || 'undefined');

    // Simulate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = allProducts.slice(startIndex, endIndex);

    const result = {
      products: paginatedProducts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(allProducts.length / limit),
        totalProducts: allProducts.length,
        hasNext: endIndex < allProducts.length,
        hasPrev: page > 1
      }
    };

    console.log('getAllProducts result:', result);
    return result;
  } catch (error) {
    console.error('Error fetching all products:', error);
    return {
      products: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalProducts: 0,
        hasNext: false,
        hasPrev: false
      }
    };
  }
};

// Function to get a product by ID from local data
export const getProductById = async (id) => {
  try {
    console.log('getProductById called with ID:', id);
    console.log('Local products available:', localProducts?.length || 'undefined');

    // Search in local products
    const product = localProducts.find(p => {
      console.log(`Comparing ${p.id} with ${id}:`, p.id === id);
      return p.id === id;
    });

    console.log('Product found:', product || 'null');
    return product || null;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return null;
  }
};

// Function to get products by category from local data
export const getProductsByCategory = async (category) => {
  try {
    // Filter local products by category
    const products = localProducts.filter(p =>
      p.category.toLowerCase() === category.toLowerCase()
    );
    return products;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
};

// Function to get related products from local data
export const getRelatedProducts = async (productId) => {
  try {
    console.log('getRelatedProducts called with ID:', productId);
    // First get the product to determine its category
    const product = localProducts.find(p => p.id === productId);
    console.log('Base product for related products:', product);

    if (!product) return [];

    // Then get other products in the same category (excluding the current product)
    const relatedProducts = localProducts
      .filter(p => p.category === product.category && p.id !== productId)
      .slice(0, 4); // Return up to 4 related products

    console.log('Related products found:', relatedProducts.length);
    return relatedProducts;
  } catch (error) {
    console.error('Error fetching related products:', error);
    return [];
  }
};

// Function to get featured products from local data
export const getFeaturedProducts = async () => {
  try {
    // Get more products from each available category to use as featured products
    const featuredProducts = [];

    // Define the categories we want to get products from
    const categoriesToFeature = ['electronics', 'fashion', 'books', 'sports', 'home appliances'];

    // Get multiple products from each category
    for (const category of categoriesToFeature) {
      const products = localProducts
        .filter(p => p.category === category)
        .slice(0, 3); // Get 3 products per category

      // Add all products from this category (up to 3)
      featuredProducts.push(...products);
    }

    return featuredProducts;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }
};

// Function to get deals products from local data
export const getDealsProducts = async () => {
  try {
    // For deals, filter products where originalPrice > price
    const dealsProducts = localProducts
      .filter(product => product.originalPrice > product.price)
      .map(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        return { ...product, discount };
      })
      .slice(0, 12); // Return up to 12 deals

    return dealsProducts;
  } catch (error) {
    console.error('Error fetching deals products:', error);
    return [];
  }
};

// Mock function to fetch products by category (returns a promise)
export const fetchProductsByCategory = async (category) => {
  return await getProductsByCategory(category);
};

// Function to search products from local data
export const searchProducts = async (query) => {
  try {
    console.log('Search query:', query);
    console.log('Local products count:', localProducts?.length || 'undefined');

    // Check if localProducts is valid
    if (!localProducts || !Array.isArray(localProducts)) {
      console.error('Local products is not a valid array:', localProducts);
      return [];
    }

    // Search in local products by name
    const searchResults = localProducts.filter(product => {
      // Check if product has required properties
      if (!product.name) {
        console.log('Product missing name property:', product);
        return false;
      }

      const matches =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(query.toLowerCase())) ||
        (product.brand && product.brand.toLowerCase().includes(query.toLowerCase())) ||
        (product.category && product.category.toLowerCase().includes(query.toLowerCase()));

      return matches;
    });

    console.log('Search results count:', searchResults.length);
    return searchResults;
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
};