import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const proData = useSelector((state) => state.products.products);
  const handleCart = (id) => {
    const selectedProduct = proData.find((item) => item.id === id);
    dispatch(addtoCart(selectedProduct));
  };
  console.log(proData);
  return (
    <div className="container">
      <div className="card">
        {proData.map((item) => (
          <div key={item.id} className="cards">
            <h5>{item.brand}</h5>
            <div className="cardcont">
              <img src={item.thumbnail} alt="products" className="cardimg" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button onClick={() => handleCart(item.id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
