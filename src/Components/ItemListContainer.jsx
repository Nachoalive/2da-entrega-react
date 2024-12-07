import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import ItemList from "./ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNotification } from "../hooks/useNotification.js";
import HomeSlider from "./HomeSlider/HomeSlider.jsx";

function ItemListContainer({ greetings }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const { setNotification } = useNotification();

  useEffect(() => {
    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((querySnapshot) => {
        const productos = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(productos);
        setNotification("success", "Producto encontrado");
      })
      .catch((error) => {
        setNotification("danger", "Producto no encontrado");
        console.log(error);
      });
  }, [categoryId]);

  return (
    <>
      <h2 className="greetings">{greetings}</h2>
      <HomeSlider />
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;