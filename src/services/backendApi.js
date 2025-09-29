// Real API service that connects to the backend
// NOTE: This service is not currently being used as the application uses localStorage mock API
class BackendAPIService {
    constructor() {
        this.baseURL = 'http://localhost:5005/api';
        this.token = localStorage.getItem('token');
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

    // Generic request method
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };

        // Add auth header if token exists
        if (this.token) {
            config.headers.Authorization = `Bearer ${this.token}`;
        }

        try {
            const response = await fetch(url, config);
            
            // Check if response is HTML (which means we got the index.html instead of JSON)
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('text/html')) {
                throw new Error('Received HTML instead of JSON - backend server may not be running');
            }
            
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            return data;
        } catch (error) {
            // If we get a network error or parsing error, it might mean the backend is not running
            if (error instanceof TypeError && error.message.includes('fetch')) {
                throw new Error('Could not connect to backend server. Please make sure the backend server is running.');
            }
            throw error;
        }
    }

    // Auth endpoints
    async register(userData) {
        const response = await this.request('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
        this.setToken(response.data.token);
        return response;
    }

    async login(credentials) {
        const response = await this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        });
        this.setToken(response.data.token);
        return response;
    }

    async getProfile() {
        return await this.request('/auth/profile');
    }

    async updateProfile(userData) {
        return await this.request('/auth/profile', {
            method: 'PUT',
            body: JSON.stringify(userData)
        });
    }

    // Product endpoints
    async getProducts(params = {}) {
        const queryParams = new URLSearchParams(params).toString();
        const url = queryParams ? `/products?${queryParams}` : '/products';
        return await this.request(url);
    }

    async getProductById(id) {
        return await this.request(`/products/${id}`);
    }

    async searchProducts(query) {
        return await this.request(`/products?q=${encodeURIComponent(query)}`);
    }

    // Cart endpoints
    async getCart() {
        return await this.request('/cart');
    }

    async addToCart(productId, quantity = 1, options = {}) {
        return await this.request('/cart', {
            method: 'POST',
            body: JSON.stringify({ productId, quantity, options })
        });
    }

    async updateCartItem(itemId, quantity) {
        return await this.request(`/cart/${itemId}`, {
            method: 'PUT',
            body: JSON.stringify({ quantity })
        });
    }

    async removeFromCart(itemId) {
        return await this.request(`/cart/${itemId}`, {
            method: 'DELETE'
        });
    }

    async clearCart() {
        return await this.request('/cart', {
            method: 'DELETE'
        });
    }

    // Wishlist endpoints
    async getWishlist() {
        return await this.request('/wishlist');
    }

    async addToWishlist(productId) {
        return await this.request('/wishlist', {
            method: 'POST',
            body: JSON.stringify({ productId })
        });
    }

    async removeFromWishlist(itemId) {
        return await this.request(`/wishlist/${itemId}`, {
            method: 'DELETE'
        });
    }

    async clearWishlist() {
        return await this.request('/wishlist', {
            method: 'DELETE'
        });
    }

    // Order endpoints
    async createOrder(orderData) {
        return await this.request('/orders', {
            method: 'POST',
            body: JSON.stringify(orderData)
        });
    }

    async getOrders() {
        return await this.request('/orders');
    }

    async getOrderById(orderId) {
        return await this.request(`/orders/${orderId}`);
    }
}

// Create and export an instance of the backend API service
// NOTE: This service is not currently being used as the application uses localStorage mock API
const backendApiService = new BackendAPIService();
export default backendApiService;