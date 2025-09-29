// Mock API service that works with localStorage instead of real backend
class MockAPIService {
    constructor() {
        this.token = localStorage.getItem('token');
        // Load users from localStorage or initialize with demo users
        this.users = JSON.parse(localStorage.getItem('users')) || [
            {
                id: '1',
                name: 'Bhetapudi Manasa',
                username: 'Bhetapudi.Manasa',
                email: 'manasa@example.com',
                password: '231FA07036',
                address: {}
            },
            {
                id: '2',
                name: 'Sure Yoga Priyanka',
                username: 'Sure.Yoga Priyanka',
                email: 'priyanka@example.com',
                password: '231FA07046',
                address: {}
            }
        ];
        // Save initial users to localStorage
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    // Get current token
    getToken() {
        return this.token;
    }

    // Set token for authenticated requests
    setToken(token) {
        this.token = token;
        localStorage.setItem('token', token);
    }

    // Remove token
    clearToken() {
        this.token = null;
        localStorage.removeItem('token');
    }

    // Generate a simple token (in a real app, this would be from the server)
    generateToken() {
        return 'mock-jwt-token-' + Date.now();
    }

    // Auth endpoints
    async register(userData) {
        // Check if username already exists
        const existingUser = this.users.find(user => user.username === userData.username);
        if (existingUser) {
            throw new Error('Username already exists');
        }

        // Create new user
        const newUser = {
            id: String(this.users.length + 1),
            name: userData.name,
            username: userData.username,
            email: userData.email,
            password: userData.password,
            address: userData.address || {}
        };

        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        // Generate token
        const token = this.generateToken();
        this.setToken(token);

        return {
            data: {
                token,
                user: newUser
            }
        };
    }

    async login(credentials) {
        const user = this.users.find(user =>
            (user.username === credentials.username || user.email === credentials.username) &&
            user.password === credentials.password
        );

        if (!user) {
            throw new Error('Invalid username or password');
        }

        // Generate token
        const token = this.generateToken();
        this.setToken(token);

        return {
            data: {
                token,
                user
            }
        };
    }

    async getProfile() {
        if (!this.token) {
            throw new Error('No token found');
        }

        // In a real app, we would decode the token to get user info
        // For this mock, we'll just return a generic profile
        const user = this.users[0]; // Return first user as example

        return {
            data: user
        };
    }

    async updateProfile(userData) {
        // This is a mock implementation
        return {
            data: {
                user: userData
            }
        };
    }

    // Product endpoints - using local products data
    async getProducts(params = {}) {
        // Import products data
        const productsData = await import('../../products.js');
        let products = productsData.default || productsData.products;

        // Apply filters if provided
        if (params.category) {
            products = products.filter(product =>
                product.category.toLowerCase() === params.category.toLowerCase()
            );
        }

        // Apply search query if provided
        if (params.q) {
            const query = params.q.toLowerCase();
            products = products.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.brand.toLowerCase().includes(query) ||
                (product.subcategory && product.subcategory.toLowerCase().includes(query))
            );
        }

        // Pagination simulation
        const page = parseInt(params.page) || 1;
        const limit = parseInt(params.limit) || 20;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedProducts = products.slice(startIndex, endIndex);

        return {
            products: paginatedProducts,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(products.length / limit),
                totalProducts: products.length,
                hasNext: endIndex < products.length,
                hasPrev: startIndex > 0
            }
        };
    }

    async getProductById(id) {
        // Import products data
        const productsData = await import('../../products.js');
        const products = productsData.default || productsData.products;

        const product = products.find(p => p.id === id);
        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    }

    async searchProducts(query) {
        return await this.getProducts({ q: query });
    }

    // Cart endpoints (mock implementations)
    async getCart() {
        const STORAGE_KEY = 'ecommerce_app_data';
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        const cart = data.cart || [];
        return {
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
    }

    async addToCart(productId, quantity = 1, options = {}) {
        const STORAGE_KEY = 'ecommerce_app_data';
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

        // Initialize cart if it doesn't exist
        if (!data.cart) {
            data.cart = [];
        }

        const existingItemIndex = data.cart.findIndex(item => item.productId === productId);
        if (existingItemIndex >= 0) {
            data.cart[existingItemIndex].quantity += quantity;
        } else {
            // Get product info (in a real app, this would come from the backend)
            const productsData = await import('../../products.js');
            const products = productsData.default || productsData.products;
            const product = products.find(p => p.id === productId);

            if (product) {
                data.cart.push({
                    id: Date.now().toString(),
                    productId,
                    name: product.name,
                    price: product.price,
                    quantity,
                    image: product.images[0],
                    options
                });
            }
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        return {
            items: data.cart,
            total: data.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
    }

    async updateCartItem(itemId, quantity) {
        const STORAGE_KEY = 'ecommerce_app_data';
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

        // Initialize cart if it doesn't exist
        if (!data.cart) {
            data.cart = [];
        }

        const itemIndex = data.cart.findIndex(item => item.id === itemId);
        if (itemIndex >= 0) {
            if (quantity <= 0) {
                data.cart.splice(itemIndex, 1);
            } else {
                data.cart[itemIndex].quantity = quantity;
            }
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        return {
            items: data.cart,
            total: data.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
    }

    async removeFromCart(itemId) {
        const STORAGE_KEY = 'ecommerce_app_data';
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

        // Initialize cart if it doesn't exist
        if (!data.cart) {
            data.cart = [];
        }

        data.cart = data.cart.filter(item => item.id !== itemId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        return {
            items: data.cart,
            total: data.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
    }

    async clearCart() {
        const STORAGE_KEY = 'ecommerce_app_data';
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        data.cart = [];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        return {
            items: [],
            total: 0
        };
    }

    // Wishlist endpoints (mock implementations)
    async getWishlist() {
        const STORAGE_KEY = 'ecommerce_app_data';
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        const wishlist = data.wishlist || [];
        return wishlist;
    }

    async addToWishlist(productId) {
        const STORAGE_KEY = 'ecommerce_app_data';
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

        // Initialize wishlist if it doesn't exist
        if (!data.wishlist) {
            data.wishlist = [];
        }

        if (!data.wishlist.includes(productId)) {
            data.wishlist.push(productId);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        }

        return data.wishlist;
    }

    async removeFromWishlist(itemId) {
        const STORAGE_KEY = 'ecommerce_app_data';
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

        // Initialize wishlist if it doesn't exist
        if (!data.wishlist) {
            data.wishlist = [];
        }

        data.wishlist = data.wishlist.filter(id => id !== itemId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        return data.wishlist;
    }

    async clearWishlist() {
        const STORAGE_KEY = 'ecommerce_app_data';
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        data.wishlist = [];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return [];
    }

    // Order endpoints (mock implementations)
    async createOrder(orderData) {
        const STORAGE_KEY = 'ecommerce_app_data';
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

        // Initialize orders if it doesn't exist
        if (!data.orders) {
            data.orders = [];
        }

        const newOrder = {
            id: 'ORDER-' + Date.now(),
            ...orderData,
            createdAt: new Date().toISOString(),
            status: 'Processing'
        };

        data.orders.push(newOrder);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        return newOrder;
    }

    async getOrders() {
        const STORAGE_KEY = 'ecommerce_app_data';
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        const orders = data.orders || [];
        return orders;
    }

    async getOrderById(orderId) {
        const STORAGE_KEY = 'ecommerce_app_data';
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        const orders = data.orders || [];
        const order = orders.find(o => o.id === orderId);

        if (!order) {
            throw new Error('Order not found');
        }

        return order;
    }
}

// Create and export an instance of the mock API service
const mockApiService = new MockAPIService();
export default mockApiService;