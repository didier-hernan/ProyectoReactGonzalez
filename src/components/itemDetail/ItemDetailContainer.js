import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { itemid } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = () => {
      fetch(`https://fakestoreapi.com/products/${itemid}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("No se pudo cargar el producto");
          }
          return response.json();
        })
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchProductDetails();
  }, [itemid]);

  return (
    <div>
      <h1>Detalle del Producto</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />{" "}
          <p>Categoría: {product.category}</p>
          <p>Descripción: {product.description}</p>
          <p>Precio: ${product.price}</p>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
