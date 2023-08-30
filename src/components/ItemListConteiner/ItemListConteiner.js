import React, { useState, useEffect } from "react";
import "./ItemStyle.css";
import { useParams, useLocation, Link } from "react-router-dom";
import Cart from "../cart/Cart";

function ItemListContainer() {
  const { categoryName } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Función para agregar un producto al carrito
  const addToCart = (selectedProduct) => {
    setCart([...cart, selectedProduct]);
  };

  useEffect(() => {
    document.title = `Productos - ${categoryName || "Todos los productos"}`;

    const apiUrl = categoryName
      ? `https://fakestoreapi.com/products/category/${categoryName}`
      : "https://fakestoreapi.com/products?limit=10";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setCargando(false);
      })
      .catch((e) => console.error(e));
  }, [categoryName, location.pathname]);

  return (
    <div>
      <h1>Lista de Productos</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <div className="product-container">
            {products.map((product) => (
              <div key={product.id} className="card">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                />
                <div className="card-info">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <Link to={`/item/${product.id}`} className="btn-ver">
                    VER
                  </Link>
                  <button
                    onClick={() => addToCart(product)}
                    className="btn-agregar-carrito"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Cart cartItems={cart} />
    </div>
  );
}

export default ItemListContainer;
