import { useEffect, useState } from "react"
// import {getProducts, getProductsByCategory} from '../asyncMock.js'
import {db} from "../services/firebase"
import ItemList from "./ItemList/ItemList.jsx"
import { useParams } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNotification } from "../hooks/useNotification.js";



function ItemListContainer({greetings}) {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    const {setNotification} = useNotification();

    useEffect(()=>{

      const collectionRef = categoryId
      ? query (collection (db, "products"),where ("category", "==", categoryId))
      : collection (db, "products");

      getDocs(collectionRef)
      .then((querySnapshot) => {
        const productos = querySnapshot.docs.map((doc)=>{
          return {id: doc.id, ...doc.data() };
        });
        setProducts(productos);
        setNotification ('success', 'Porducto encontrado')
      })
      .catch((error)=>{
        setNotification ('danger', 'Porducto no encontrado')
        console.log(error);
      });
      
      },[categoryId]);
        // const asyncFunctions = categoryId ? getProductsByCategory : getProducts
        // asyncFunctions(categoryId)
        //     .then(data => setProducts(data))
  
  return (
    <>
        <h2>{greetings}</h2>
        <ItemList products={products} />
    </>
  )
}

export default ItemListContainer