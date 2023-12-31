import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/clients";
import { useCart } from "../cart/CartContext";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productRef = doc(db, "products", productId);
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
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 5000);
    }
  };

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
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
      {showConfirmation && (
        <p>El producto se ha añadido al Carrito de Compras</p>
      )}
    </div>
  );
}

export default ProductDetail;
