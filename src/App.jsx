import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Catalogo from "./components/Catalogo";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";

import NavBar from "./components/NavBar";

function App() {
 
  return (
   
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="*" element={<Error404/>}/>
        <Route
          exact
          path="/"
          element={<Catalogo greeting={"Nuestros Productos"} />}
        />
        <Route exact path="/productos" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:categoria" element={<ItemListContainer/>}/>
        <Route exact path="/id/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/carrito" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
