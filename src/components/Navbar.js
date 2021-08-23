import { Link } from "react-router-dom";
import "./Navbar.css";
import ShoppingCart from "../assets/ShoppingCart.png";
import React, { useContext } from "react";
import { ItemsContext } from "../context/context";
const Navbar = (props) => {
  const { items } = useContext(ItemsContext);
  const purchased = new Set(items);
  if (purchased.size === false) {
    console.log(purchased.size);
  }
  if (purchased.size === true) {
    console.log("true");
  }
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link className="NavLinks" to="/">
            La Tienda
          </Link>
        </li>
        <li>
          <Link className="NavLinks" to="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img src={ShoppingCart} alt="cart" />
            {purchased.size ? (
              <span className="cartNotification">{purchased.size}</span>
            ) : (
              ""
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
