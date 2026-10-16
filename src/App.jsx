import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import LandingPage02 from "./LandingPage02.jsx";

const StoreLayout = lazy(() => import("./components/StoreLayout.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));

const Page01 = lazy(() => import("./Pgae01.jsx"));
const LandingPage01 = lazy(() => import("./LandingPage01.jsx"));

const Error = lazy(() => import("./components/Error"));
const ThankYou = lazy(() => import("./components/ThankYou"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public store pages: navbar + footer. */}
        <Route element={<StoreLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>

        {/* Product and landing pages keep their own standalone layout. */}
        <Route path="/product/:id" element={<Page01 />} />
        <Route path="/landing/:id" element={<LandingPage01 />} />

        {/* Existing routes, kept for links that are already in use. */}
        <Route path="/products/landingpage01" element={<LandingPage01 />} />
        <Route path="/products/landingpage02" element={<LandingPage02 />} />
        <Route path="/products/page01" element={<Page01 />} />

        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default App;
