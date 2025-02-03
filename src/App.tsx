import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import NavbarContact from "./components/NavbarContact.tsx";
import NavbarSearchBar from "./components/NavbarSearchBar.tsx";
import NavbarLinks from "./components/NavbarLinks.tsx";
import Product from "./pages/ProductDetails.tsx";
import AllProducts from "./pages/AllProducts.tsx";
import FooterSection from "./components/homePage/FooterSection.tsx";
import Cart from "./pages/Cart.tsx";

const Layout = () => {
  return (
    <>
      <NavbarContact />
      <NavbarSearchBar />
      <NavbarLinks />
      <Outlet />
      <FooterSection />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products/:id", element: <Product /> },
      { path: "/AllProducts", element: <AllProducts /> },
      { path: "/Cart", element: <Cart /> },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
