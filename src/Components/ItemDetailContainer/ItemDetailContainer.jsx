import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail";
import { useNotification } from "../../hooks/useNotification";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const { setNotification } = useNotification();

  useEffect(() => {
    console.log("Inicio de useEffect para obtener el producto");
    console.log("ID del producto recibido:", productId);

    getDoc(doc(db, "products", productId))
      .then((querySnapshot) => {
        if (querySnapshot.exists()) {
          const prod = { id: querySnapshot.id, ...querySnapshot.data() };
          console.log("Producto obtenido:", prod);
          setProduct(prod);
          setNotification("success", "Producto encontrado");
        } else {
          console.warn("Producto no encontrado en la base de datos");
          setNotification("warning", "Producto no encontrado");
        }
      })
      .catch((err) => {
        console.error("Error al obtener el producto:", err);
        setNotification("danger", "Error al obtener el producto");
      });
  }, [productId]);

  console.log("Estado actual del producto:", product);

  if (!product) {
    console.log("Producto aún no cargado, mostrando mensaje de carga");
    return <p>Cargando producto...</p>;
  }

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
}

export default ItemDetailContainer;