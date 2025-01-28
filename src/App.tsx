import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home.tsx";
import NavbarContact from "./components/NavbarContact.tsx";
import NavbarSearchBar from "./components/NavbarSearchBar.tsx";
import NavbarLinks from "./components/NavbarLinks.tsx";
import Product from "./pages/ProductDetails.tsx";
import AllProducts from "./pages/AllProducts.tsx";
import FooterSection from "./components/homePage/FooterSection.tsx";
import Cart from "./pages/Cart.tsx";
// import Practise from "./pages/practise.tsx"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavbarContact />
          <NavbarSearchBar />
          <NavbarLinks />
          <Home />
          <FooterSection />
        </>
      ),
    },
    {
      path: "/products/:id",
      element: (
        <>
          <NavbarContact />
          <NavbarSearchBar />
          <NavbarLinks />
          <Product />
          <FooterSection />
        </>
      ),
    },
    {
      path: "/AllProducts",
      element: (
        <>
          <NavbarContact />
          <NavbarSearchBar />
          <NavbarLinks />
          <AllProducts />
          <FooterSection />
        </>
      ),
    },
    {
      path: "/Cart",
      element: (
        <>
          <NavbarContact />
          <NavbarSearchBar />
          <NavbarLinks />
          <Cart />
          <FooterSection />
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
