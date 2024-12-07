import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { db } from "../../services/firebase";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";

export default function Checkout() {
  const [buyer, setBuyer] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  });
  const [orderCreated, setOrderCreated] = useState(false);
  const { cart, totalQuantity, getTotal, clearCart } = useCart();
  const total = getTotal();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const objOrder = {
      buyer,
      items: cart,
      totalQuantity,
      total,
      date: new Date(),
    };

    const ids = cart.map((item) => item.id);
    const productRef = collection(db, "products");

    const productsAddedFromFirestore = await getDocs(
      query(productRef, where(documentId(), "in", ids))
    );

    const { docs } = productsAddedFromFirestore;
    const outOfStock = [];
    const batch = writeBatch(db);

    docs.forEach((doc) => {
      const dataDoc = doc.data();
      const stockDb = dataDoc.stock;

      const productAddedToCart = cart.find((prod) => prod.id === doc.id);
      const prodQuantity = productAddedToCart.quantity;

      if (stockDb >= prodQuantity) {
        batch.update(doc.ref, { stock: stockDb - prodQuantity });
      } else {
        outOfStock.push({ id: doc.id, ...dataDoc });
      }
    });

    if (outOfStock.length === 0) {
      await batch.commit();
      const orderRef = collection(db, "orders");
      const orderAdded = await addDoc(orderRef, objOrder);
      console.log(`El id de su orden es ${orderAdded.id}`);
      clearCart();
      setOrderCreated(true);
    } else {
      console.log("Hay productos fuera de stock");
    }
  };

  if (orderCreated) {
    return <h1>La orden fue creada correctamente</h1>;
  }

  return (
    <div className="container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={buyer.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Apellido:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={buyer.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono:</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={buyer.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={buyer.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Generar Orden
        </button>
      </form>
    </div>
  );
}