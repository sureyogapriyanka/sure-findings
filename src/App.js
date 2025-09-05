import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/home.jsx";
import Category from "./pages/category.jsx";
import Product from "./pages/product.jsx";
import Cart from "./pages/cart.jsx";
import Checkout from "./pages/checkout.jsx";
import Orders from "./pages/orders.jsx";
import Profile from "./pages/profile.jsx";
import Wishlist from "./pages/wishlist.jsx";
import Header from "./components/Header.jsx";

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/sure-findings/" component={Home} />
        <Route path="/sure-findings/category/:categoryName" component={Category} />
        <Route path="/sure-findings/product/:productId" component={Product} />
        <Route path="/sure-findings/cart" component={Cart} />
        <Route path="/sure-findings/checkout" component={Checkout} />
        <Route path="/sure-findings/orders" component={Orders} />
        <Route path="/sure-findings/profile" component={Profile} />
        <Route path="/sure-findings/wishlist" component={Wishlist} />
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
