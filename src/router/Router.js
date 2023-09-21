import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import ItemListContainer from "../components/ItemListConteiner/ItemListConteiner";
import ItemDetailContainer from "../components/itemdetailconteiner/ItemDetailContainer";

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:itemid" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
