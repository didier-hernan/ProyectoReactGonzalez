import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ItemStyle.css";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/clients";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Productos - ${categoryId || "Todos los productos"}`;
    const fetchData = async () => {
      try {
        const productCollection = collection(db, "products");
        let q = query(productCollection);
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
        setCargando(false);
      }
    };
    fetchData();
  }, [categoryId]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    navigate(`/detalle/${product.id}`);
  };

  const renderSelectedProduct = () => {
    if (selectedProduct) {
      return (
        <div>
          <h2>{selectedProduct.title}</h2>
          <img
            className="product-image"
            src={selectedProduct.img}
            alt={selectedProduct.title}
          />
          <p>Categoría: {selectedProduct.category}</p>
          <p>Descripción: {selectedProduct.description}</p>
          <p>Precio: ${selectedProduct.price}</p>
          <p>Stock: {selectedProduct.stock}</p>
        </div>
      );
    }
    return null;
  };

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
              <div
                key={product.id}
                className="card"
                onClick={() => handleProductClick(product)}
              >
                <h2>{product.title}</h2>
                <img src={product.img} alt={product.title} />
              </div>
            ))}
          </div>
          {renderSelectedProduct()}
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
