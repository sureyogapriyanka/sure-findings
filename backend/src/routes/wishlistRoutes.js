import express from 'express';
import {
    getWishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist
} from '../controllers/WishlistController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(protect, getWishlist)
    .post(protect, addToWishlist)
    .delete(protect, clearWishlist);

router.route('/:id')
    .delete(protect, removeFromWishlist);

export default router;