import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import ItemListContainer from "../components/ItemListConteiner/ItemListConteiner";
import ItemDetailContainer from "../components/itemdetailconteiner/ItemDetailContainer";
import ShoppingCartPage from "../components/cart/ShoppingCartPage";
import ProductDetail from "../components/itemDetail/ProductDetail";
import Checkout from "../components/cart/Checkout";
import { CartProvider } from "../components/cart/CartContext";
import CheckoutForm from "../components/cart/CheckoutForm";
import CheckoutSuccess from "../components/brief/CheckoutSuccess";

export default function Router() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:itemid" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/carrito" element={<ShoppingCartPage />} />
          <Route path="/detalle/:productId" element={<ProductDetail />} />
          <Route path="/checkout/:orderNumber" element={<Checkout />} />
          <Route
            path="/checkout/:orderNumber/form"
            element={<CheckoutForm />}
          />
          <Route
            path="/checkout/:orderNumber/success"
            element={<CheckoutSuccess />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
