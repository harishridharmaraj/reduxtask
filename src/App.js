import React from "react";
import ProductsPage from "./component/productsPage";
import { Route, Routes, Link } from "react-router-dom";
import CartPage from "./component/cartPage";
import { selectCartItems } from "./redux/cartSlice";
import { useSelector } from "react-redux";

const App = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="container">
      <div className="navbar">
        <nav>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart {cartItems.length}</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/">
          <Route index element={<ProductsPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
