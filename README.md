# SureFindings E-commerce Application

A full-stack e-commerce application with MongoDB, Express, React, and Node.js.

## Folder Structure

```
project-root/
├─ backend/
|  ├─ package.json
|  ├─ .env
|  └─ src/
|     ├─ server.js
|     ├─ config/
|     |  └─ db.js
|     ├─ models/
|     |  └─ Product.js
|     ├─ controllers/
|     |  └─ productController.js
|     ├─ routes/
|     |  └─ productRoutes.js
|     ├─ middleware/
|     |  └─ errorHandler.js
|     ├─ seed/
|     |  └─ seedProducts.js
|     └─ data/
|        └─ products.js
└─ frontend/
   ├─ package.json
   └─ src/
      ├─ components/
      |  └─ ProductList.jsx
      ├─ pages/
      |  ├─ checkout.jsx
      |  ├─ upi-test.jsx
      |  └─ ...
      ├─ hooks/
      |  ├─ useCart.js
      |  ├─ useAuth.js
      |  └─ ...
      ├─ lib/
      |  ├─ storage.js
      |  └─ ...
      ├─ services/
      |  ├─ api.js
      |  └─ ...
      └─ ...
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your MongoDB URI:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

5. Start the backend server:
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

## Frontend Architecture

The frontend is built with React and uses the following key technologies:

- **React** - Core UI library
- **Wouter** - Lightweight routing solution
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **TanStack Query** - Server state management
- **Vite** - Build tool and development server

### Key Features

1. **Authentication System**
   - Login/Registration with JWT tokens
   - Protected routes for authenticated users
   - User session management

2. **Product Management**
   - Product listings with search and filtering
   - Product detail pages
   - Category-based navigation

3. **Shopping Cart**
   - Add/remove items from cart
   - Quantity adjustment
   - Persistent cart storage

4. **Wishlist**
   - Save products for later
   - Add/remove items from wishlist

5. **Checkout Process**
   - Multi-step checkout flow (Shipping → Payment → Review)
   - Multiple payment methods (Credit Card, UPI, Wallet, Cash on Delivery)
   - Order confirmation and tracking

6. **Order Management**
   - Order history
   - Order tracking
   - Status updates

## Backend Integration

The frontend communicates with the backend through a RESTful API, providing a seamless user experience with real-time data synchronization.

### API Service Structure

The frontend uses a service-oriented approach for API communication, ensuring clean separation of concerns and maintainable code:

1. **API Service** (`src/services/api.js`)
   - Centralized service for all backend API calls
   - Handles authentication tokens and request/response processing
   - Provides consistent error handling across the application

2. **Data Models**
   - Product data models for consistent data handling
   - User profile and authentication models
   - Order and cart data structures

### Backend Endpoints

The backend exposes the following RESTful API endpoints:

#### Authentication
- `POST /api/auth/register` - User registration with validation
- `POST /api/auth/login` - Secure user authentication with JWT tokens
- `GET /api/auth/profile` - Retrieve authenticated user profile
- `PUT /api/auth/profile` - Update user profile information

#### Products
- `GET /api/products` - Retrieve all products with pagination, search, and filtering capabilities
- `GET /api/products/:id` - Get detailed information for a specific product

#### Wishlist
- `GET /api/wishlist` - Fetch user's personalized wishlist
- `POST /api/wishlist` - Add products to user's wishlist
- `DELETE /api/wishlist/:id` - Remove products from user's wishlist

#### Cart
- `GET /api/cart` - Retrieve user's current shopping cart
- `POST /api/cart` - Add items to shopping cart
- `PUT /api/cart/:id` - Update item quantities in cart
- `DELETE /api/cart/:id` - Remove specific items from cart
- `DELETE /api/cart` - Clear entire shopping cart

#### Orders
- `GET /api/orders` - Retrieve user's order history
- `POST /api/orders` - Create new orders from cart items
- `GET /api/orders/:id` - Get detailed information for specific orders

### Real-time Data Synchronization

The application implements efficient data synchronization patterns:
- Automatic token refresh for continuous user sessions
- Optimistic UI updates for responsive user interactions
- Background data fetching for seamless experience
- Error recovery mechanisms for network failures

### Security Features

- JWT-based authentication with secure token storage
- Input validation and sanitization on both frontend and backend
- Protected routes ensuring only authenticated users access sensitive features
- Secure password handling with proper encryption

## Payment System

The application integrates with multiple payment providers for a comprehensive checkout experience:

### UPI Payment Integration
- Direct UPI app redirection for instant payments
- Support for all major UPI applications (Google Pay, PhonePe, Paytm, etc.)
- QR code generation for scan-and-pay functionality
- Transaction status tracking and confirmation

### Card Payments
- Secure credit/debit card processing
- PCI-compliant payment form with validation
- Support for major card networks (Visa, Mastercard, Rupay)

### Digital Wallets
- Integration with popular digital wallet providers
- One-click payment options for returning customers

### Cash on Delivery
- Flexible COD option for customer convenience
- Order confirmation and delivery tracking

## Demo Users

The application comes with two pre-configured demo users for testing purposes:

1. **Bhetapudi.Manasa**
   - Username: `Bhetapudi.Manasa`
   - Password: `231FA07036`

2. **Sure.Yoga Priyanka**
   - Username: `Sure.Yoga Priyanka`
   - Password: `231FA07046`

These credentials are displayed on the login page for easy access during testing.

## Development

The frontend is configured to communicate with the backend server through proper API endpoints. During development, the Vite proxy configuration ensures seamless API request handling without CORS issues.

## Deployment to GitHub Pages

This project can be easily deployed to GitHub Pages using the provided PowerShell deployment script.

### Prerequisites

1. Make sure you have committed all your changes to the repository
2. Ensure you have PowerShell installed (comes pre-installed on Windows)
3. Make sure you have npm installed

### Automated Deployment

Run the provided PowerShell script to automatically build and deploy your site:

```powershell
.\deploy-gh-pages.ps1
```

This script will:
1. Install dependencies
2. Build the React application
3. Move the built files to the `docs/` folder
4. Commit and push the changes to trigger GitHub Pages deployment

### Manual Deployment Steps

If you prefer to deploy manually, follow these steps:

1. Build the React application:
   ```bash
   npm run build
   ```

2. Create a `docs/` folder (if it doesn't exist) and copy all contents from the `dist/` folder to `docs/`:
   ```bash
   # On Windows (PowerShell)
   mkdir docs
   cp -r dist/* docs/
   
   # On macOS/Linux
   mkdir docs
   cp -r dist/* docs/
   ```

3. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

### Configure GitHub Pages

1. Go to your GitHub repository
2. Navigate to Settings → Pages
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/docs`
4. Click "Save"
5. Wait 1-2 minutes for GitHub Pages to deploy your site

Your site will be available at: `https://<username>.github.io/<repository-name>/`

### Notes

- The deployment script assumes your default branch is named `main`
- GitHub Pages will automatically rebuild and deploy your site whenever you push changes to the `docs/` folder
- Remember to always run the build process before deploying to ensure your latest changes are included
- The PowerShell script has been tested and works correctly with this project setup
