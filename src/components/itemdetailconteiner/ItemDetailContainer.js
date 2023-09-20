import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; // Importa las funciones necesarias de Firebase
import { db } from "../../firebase/clients"; // Importa la configuración de tu base de datos

function ItemDetailContainer() {
  const { itemid } = useParams(); // Obtén el itemid de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Función asincrónica para obtener el producto desde Firebase
    const getProduct = async () => {
      try {
        const productRef = doc(db, "products", itemid); // Referencia al documento del producto en Firebase
        const productSnapshot = await getDoc(productRef); // Obtiene el documento del producto

        if (productSnapshot.exists()) {
          // Si el producto existe en Firebase, actualiza el estado con los datos del producto
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          console.error("Producto no encontrado en Firebase");
        }
      } catch (error) {
        console.error("Error al obtener el producto desde Firebase:");
      }
    };

    getProduct(); // Llama a la función para obtener el producto
  }, [itemid]);

  if (!product) {
    return;
  }

  // Si product está definido, muestra la información relevante
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
