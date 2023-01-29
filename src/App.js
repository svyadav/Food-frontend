import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./screens/MyOrder";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/createuser" element={<Signup />} />
              <Route exact path="/myorder" element={<MyOrder/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
