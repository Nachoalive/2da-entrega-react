import { Link } from 'react-router-dom';

function Item({ product }) {
  const { id, name, price, img } = product;

  return (
    <div className="card item-card">
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: ${price}</p>
        <Link to={`/detail/${id}`} className="btn btn-primary">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;