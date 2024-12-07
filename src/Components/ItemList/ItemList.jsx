import Item from "../Item"
import "../ItemList/Itemlist.css";

function ItemList({ products }) {
  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Item product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;