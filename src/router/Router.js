import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import ItemListContainer from "../components/ItemListConteiner/ItemListConteiner";
import ItemDetailContainer from "../components/itemdetailconteiner/ItemDetailContainer";
import ShoppingCartPage from "../components/cart/ShoppingCartPage";
import ProductDetail from "../components/itemDetail/ProductDetail";
import { CartProvider } from "../components/cart/CartContext";
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
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
