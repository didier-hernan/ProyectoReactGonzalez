import React, { useEffect, useState } from "react";
import Router from "./router/Router";
import { db } from "./firebase/clients";
import ItemDetailContainer from "./components/itemdetailconteiner/ItemDetailContainer";
import product from "./components/itemdetailconteiner/ItemDetailContainer";
// collection es una funcion de firestore
import {
  getDocs,
  collection,
  query,
  where,
  limit,
  getDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Traer toda la data de una coleccion de firebase:
    const productsRef = collection(db, "products");

    const getProducts = async () => {
      try {
        const data = await getDocs(productsRef);
        if (data) {
          const dataFiltrada = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          if (dataFiltrada && dataFiltrada.length > 0) {
            setSelectedProduct(dataFiltrada[0]);
          }
        }
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    getProducts();
  }, []);
  return (
    <div>
      <Router />
      {/* Pasa el producto seleccionado a ItemDetailContainer */}
      {selectedProduct && <ItemDetailContainer product={selectedProduct} />}
    </div>
  );
}

export default App;
