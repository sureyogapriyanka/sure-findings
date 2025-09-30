import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster.jsx";
import { TooltipProvider } from "./components/ui/tooltip.jsx";
import Home from "./pages/home.jsx";
import Category from "./pages/category.jsx";
import Product from "./pages/product.jsx";
import Cart from "./pages/cart.jsx";
import Checkout from "./pages/checkout.jsx";
import Orders from "./pages/orders.jsx";
import Profile from "./pages/profile.jsx";
import Wishlist from "./pages/wishlist.jsx";
import Header from "./components/Header.jsx";
import Search from "./pages/search.jsx";
import Index from "./pages/index.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Auth from "./pages/auth.jsx";
import ProductsPage from "./pages/products.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Deals from "./pages/deals.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Services from "./pages/services.jsx";
import FAQ from "./pages/faq.jsx";
import UpiTest from "./pages/upi-test.jsx";
import DebugProduct from "./pages/debug-product.jsx";
import Tracking from "./pages/tracking.jsx";
import NotFound from "./pages/not-found.jsx";

// Set base path for GitHub Pages
const basePath = '/sure-findings';

function Router() {
    return (
        <>
            <Header />
            <Switch base={basePath}>
                <Route path="/sure-findings/" component={Index} />
                <Route path="/sure-findings/login" component={Login} />
                <Route path="/sure-findings/register" component={Register} />
                <Route path="/sure-findings/auth" component={Auth} />
                <Route path="/sure-findings/home">
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/products">
                    <ProtectedRoute>
                        <ProductsPage />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/category/:categoryName">
                    <ProtectedRoute>
                        <Category />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/product/:productId">
                    <ProtectedRoute>
                        <Product />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/debug-product/:productId">
                    <ProtectedRoute>
                        <DebugProduct />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/cart">
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/checkout">
                    <ProtectedRoute>
                        <Checkout />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/orders">
                    <ProtectedRoute>
                        <Orders />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/tracking">
                    <ProtectedRoute>
                        <Tracking />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/profile">
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/wishlist">
                    <ProtectedRoute>
                        <Wishlist />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/search">
                    <ProtectedRoute>
                        <Search />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/deals">
                    <ProtectedRoute>
                        <Deals />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/about">
                    <ProtectedRoute>
                        <About />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/contact">
                    <ProtectedRoute>
                        <Contact />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/services">
                    <ProtectedRoute>
                        <Services />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/faq">
                    <ProtectedRoute>
                        <FAQ />
                    </ProtectedRoute>
                </Route>
                <Route path="/sure-findings/upi-test">
                    <ProtectedRoute>
                        <UpiTest />
                    </ProtectedRoute>
                </Route>
                {/* Fallback route for 404 pages */}
                <Route component={NotFound} />
            </Switch>
        </>
    );
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Router />
            </TooltipProvider>
        </QueryClientProvider>
    );
}

export default App;