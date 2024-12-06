import Item from "../Item"
import "../ItemList/Itemlist.css";

function ItemList({products}) {
  return (
    <div className="container">
        {products.map( product => <Item key={product.id} product={product} />)}
    </div>
  )
}

export default ItemList