import { useTheme } from './context/context.jsx'; // Importa tu contexto
import NavBar from "../src/Components/Navbar/NavBar.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from "./Components/ItemListContainer.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
import Checkout from "../src/Components/Checkout/Checkout.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import { NotificationProvider } from './context/NotificationContext.jsx';
import { CartProvider } from './context/CartContext';

function App() {
  const { isDarkMode } = useTheme();

  return (
    <CartProvider>
      <NotificationProvider>
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
          <BrowserRouter>
            <NavBar cartCount={0} title="SupremeFit" />
            <Routes>
              <Route
                exact
                path="/"
                element={<ItemListContainer greetings={"Suplementos para la vida"} />}
              />
              <Route
                exact
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                exact
                path="/detail/:productId"
                element={<ItemDetailContainer />}
              />
              <Route
                exact
                path="/cart"
                element={<Cart />}
              />
              <Route
                exact
                path="/checkout"
                element={<Checkout />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </NotificationProvider>
    </CartProvider>
  );
}

export default App;