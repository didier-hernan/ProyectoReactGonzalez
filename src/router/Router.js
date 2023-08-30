import NavBar from "../components/navbar/NavBar";
import ItemListContainer from "../components/ItemListConteiner/ItemListConteiner.js";
import ItemDetailContainer from "../components/itemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:itemid" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
