import Navbar from "./Navbar";
import "./Product.css";
import React, { useContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ItemsContext } from "../context/context";
const Product = () => {
  let data = useLocation();
  const { items, setItems } = useContext(ItemsContext);
  const [popup, setPopup] = useState(false);
  const buyBtn = useRef();
  function addToCart(e) {
    setItems([...(items || ""), e]);
    console.log(items);
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 1000);
  }
  return (
    <div className="product-container">
      {popup && <div className="item-added">Item added</div>}
      <Navbar />
      <div className="product-content">
        <div className="left-side">
          <h1>{data.state.name}</h1>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium iusto exercitationem repellendus temporibus sapiente
            tenetur obcaecati optio facilis aut voluptas.
          </h2>
          <h2>{data.state.price}</h2>

          <button ref={buyBtn} onClick={() => addToCart(data.state)}>
            Buy Now
          </button>
        </div>
        <div className="right-side">
          <img className="img-banner" src={data.state.img} alt="shirt" />
        </div>
      </div>
    </div>
  );
};

export default Product;
