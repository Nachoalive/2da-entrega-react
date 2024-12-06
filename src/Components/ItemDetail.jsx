import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../hooks/useCart";
const {addItem, isInCart} = useCart();

import { useNotification } from "../hooks/useNotification";
function ItemDetail({ name, img, description, category, price, stock }) {
  const [quantity, setQuantity] = useState(0)
  
  const {addItem, isInCart} = useCart();
  const {setNotification} = useNotification ()

   const handleAdd = (cantidad) => {
    setQuantity(cantidad)
    if (isInCart){

    }else {
      addItem ();
      setNotification ('success' , `Agregaste $ {cantidad} al carrito`)
    }
  }
  
  return (
    <div className="container">
      <h2>{name}</h2>
      <div className="card"> 
        <img
          src={img}
          style={{ width: 300 }}
          className="card-img-top"
          alt={name}
        />
        <div className="card-body">
          <p className="card-text">{description}</p>
          <p className="card-text">Categoria: {category}</p>
          <h2 className="card-text">Precio: $ {price}</h2>
          <h2 className="card-text">Disponible - {stock}</h2>
        </div>
      </div>

      <div>
        {quantity === 0 ? (
          <ItemCount stock={stock} onAdd={handleAdd} />
        ) : (
          <Link to="/cart">Finalizar Compra</Link>
        )}
      </div>
    </div>
  );
}

export default ItemDetail