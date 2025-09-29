import Cart from '../models/Cart.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

// @desc    Get user's cart
// @route   GET /api/cart
// @access  Private
const getCart = async (req, res) => {
    try {
        const cartItems = await Cart.find({ user: req.user.id })
            .populate('product', 'id name price images rating reviewCount inStock');

        // Calculate cart totals
        let subtotal = 0;
        cartItems.forEach(item => {
            if (item.product && item.product.price && !isNaN(item.product.price)) {
                subtotal += item.product.price * item.quantity;
            }
        });

        const tax = subtotal * 0.08; // 8% tax
        const total = subtotal + tax;

        // Filter out items with invalid product data
        const validCartItems = cartItems.filter(item =>
            item.product &&
            item.product.price !== undefined &&
            item.product.price !== null &&
            !isNaN(item.product.price)
        );

        res.json({
            success: true,
            count: validCartItems.length,
            subtotal,
            tax,
            total,
            items: validCartItems
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
const addToCart = async (req, res) => {
    try {
        const { productId, quantity = 1, options = {} } = req.body;

        // Check if product exists
        const product = await Product.findOne({ id: productId });
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        // Check if item already in cart
        let cartItem = await Cart.findOne({
            user: req.user.id,
            product: product._id
        });

        if (cartItem) {
            // Update quantity
            cartItem.quantity += quantity;
            await cartItem.save();
        } else {
            // Add new item to cart
            cartItem = await Cart.create({
                user: req.user.id,
                product: product._id,
                quantity,
                options
            });
        }

        // Populate product details
        await cartItem.populate('product', 'id name price images rating reviewCount inStock');

        res.status(201).json({
            success: true,
            message: 'Product added to cart',
            item: cartItem
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Update cart item quantity
// @route   PUT /api/cart/:id
// @access  Private
const updateCartItem = async (req, res) => {
    try {
        const { quantity } = req.body;

        // Don't allow quantity less than 1
        if (quantity < 1) {
            return res.status(400).json({
                success: false,
                message: 'Quantity must be at least 1'
            });
        }

        const cartItem = await Cart.findById(req.params.id);

        if (!cartItem) {
            return res.status(404).json({
                success: false,
                message: 'Cart item not found'
            });
        }

        // Check if user owns this cart item
        if (cartItem.user.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: 'User not authorized'
            });
        }

        // Update quantity
        cartItem.quantity = quantity;
        await cartItem.save();

        // Populate product details
        await cartItem.populate('product', 'id name price images rating reviewCount inStock');

        res.json({
            success: true,
            message: 'Cart item updated',
            item: cartItem
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:id
// @access  Private
const removeFromCart = async (req, res) => {
    try {
        const cartItem = await Cart.findById(req.params.id);

        if (!cartItem) {
            return res.status(404).json({
                success: false,
                message: 'Cart item not found'
            });
        }

        // Check if user owns this cart item
        if (cartItem.user.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: 'User not authorized'
            });
        }

        await cartItem.remove();

        // Get updated cart items
        const updatedCartItems = await Cart.find({ user: req.user.id })
            .populate('product', 'id name price images rating reviewCount inStock');

        res.json({
            success: true,
            message: 'Product removed from cart',
            items: updatedCartItems
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Clear user's cart
// @route   DELETE /api/cart
// @access  Private
const clearCart = async (req, res) => {
    try {
        await Cart.deleteMany({ user: req.user.id });

        res.json({
            success: true,
            message: 'Cart cleared',
            items: [] // Return empty array for consistency
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart
};