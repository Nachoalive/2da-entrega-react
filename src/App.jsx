import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {

  return (
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
        {/*
        <Route path="/ejemplo" element={<Ejemplo />} />
        <Route path="/manejoclick" element={<ManejoClick />} />
        <Route path="/manejochange" element={<ManejoChange />} />
        <Route path="/manejosubmit" element={<ManejoSubmit />} />
        <Route path="/resolucionvocales" element={<ResolucionVocales />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App