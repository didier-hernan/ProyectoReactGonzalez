import React, { useEffect, useState } from "react";
import "./ItemStyle.css";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import Cart from "../cart/Cart";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/clients";

function ItemListContainer() {
  const { categoryId } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  const addToCart = (selectedProduct) => {
    setCart([...cart, selectedProduct]);
  };

  useEffect(() => {
    document.title = `Productos - ${categoryId || "Todos los productos"}`;

    const fetchData = async () => {
      try {
        const productCollection = collection(db, "products");
        let q = query(productCollection);

        // Si se proporciona una categoría en la URL, filtrar por categoría
        if (categoryId) {
          const categoryFilter = where("category", "==", categoryId);
          q = query(productCollection, categoryFilter);
        }

        const querySnapshot = await getDocs(q);
        const productsData = [];

        querySnapshot.forEach((doc) => {
          productsData.push({ id: doc.id, ...doc.data() });
        });

        setProducts(productsData);
        setCargando(false);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        setCargando(false); // Agrega esta línea para manejar el error y evitar mostrar "Producto no encontrado"
      }
    };

    fetchData();
  }, [categoryId, location.pathname]);

  return (
    <div>
      <h1>Lista de Productos</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : products.length === 0 ? (
        <p>No se encontraron productos</p>
      ) : (
        <div>
          <div className="product-container">
            {products.map((product) => (
              <div key={product.id} className="card">
                <h2>{product.title}</h2>
                <img src={product.img} alt={product.title} />
                <p>Categoría: {product.category}</p>
                <p>Descripción: {product.description}</p>
                <p>Precio: ${product.price}</p>
                <p>Stock: {product.stock}</p>
                <Link to={`/item/${product.id}`} className="btn-ver">
                  VER
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
