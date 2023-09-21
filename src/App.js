import React, { useEffect, useState } from "react";
import Router from "./router/Router";
import { db } from "./firebase/clients";
import ItemDetailContainer from "./components/itemdetailconteiner/ItemDetailContainer";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getProducts = async () => {
    const productsRef = collection(db, "products");
    const data = await getDocs(productsRef);
    const dataFiltrada = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    console.log(dataFiltrada);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Router />
        {selectedProduct && <ItemDetailContainer product={selectedProduct} />}
      </header>
    </div>
  );
}

export default App;
