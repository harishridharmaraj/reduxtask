import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart, updateQuantity } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.cart);
  console.log(quantity);
  const productsData = useSelector((state) => state.cart.cart);
  const handleRemove = (id) => {
    dispatch(delCart(id));
    if (productsData.length === 0) {
      // navigate.push("/products");
      navigate("/products");
    }
  };
  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };
  const handleChange = (id, e) => {
    const newQuantity = parseInt(e.target.value);
    console.log(newQuantity);
    handleQuantityChange(id, newQuantity);
  };
  return (
    <div className="pages">
      {productsData.map((item) => (
        <div className="containercart" key={item.id}>
          <div className="imgqtycart">
            <div className="imagescart">
              <div>
                <img
                  src={item.thumbnail}
                  alt="ProductImagescart"
                  style={{ width: "150px" }}
                />
              </div>

              <div>
                <h3 style={{ textTransform: "uppercase" }}>{item.title}</h3>
                <p style={{ width: "200px" }}>{item.description}</p>
              </div>
            </div>
            <div className="qtyscart">
              <div>
                <select
                  onChange={(e) => handleChange(item.id, e)}
                  value={item.quantity}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div>
                <h4> ${item.price}.00</h4>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="middlecart">
            <div>
              <h4>SUBTOTAL :</h4>
              <h4>SHIPPING :</h4>
            </div>
            <div>
              <h4>${item.quantity * item.price}.00</h4>
              <h4>FREE</h4>
            </div>
          </div>
          <hr />
          <div className="totalcart">
            <h4>TOTAL :</h4>
            <h4>${item.quantity * item.price}.00</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
