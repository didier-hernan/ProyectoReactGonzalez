import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/clients";
import ItemDetailContainer from "../itemdetailconteiner/ItemDetailContainer";

function ItemDetail() {
  const { itemid } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRef = doc(db, "products", itemid);
        const productSnapshot = await getDoc(productRef);
        if (productSnapshot.exists()) {
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };
    fetchData();
  }, [itemid]);

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <ItemDetailContainer product={product} />
    </div>
  );
}

export default ItemDetail;
