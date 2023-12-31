import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/clients";

function ItemDetailContainer() {
  const { itemid } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productRef = doc(db, "products", itemid);
        const productSnapshot = await getDoc(productRef);
        if (productSnapshot.exists()) {
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          console.error("Producto no encontrado en Firebase");
        }
      } catch (error) {
        console.error("Error al obtener el producto desde Firebase:", error);
      }
    };

    getProduct();
  }, [itemid]);
  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} />
      <p>Categoría: {product.category}</p>
      <p>Descripción: {product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
}

export default ItemDetailContainer;
