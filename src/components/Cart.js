import React, { useContext } from "react";
import ShoppingBag from "../assets/ShoppingBag.svg";
import { ItemsContext } from "../context/context";

import "./cart.css";
import PurchasedItems from "./PurchasedItems";
import Navbar from "./Navbar";
const Cart = () => {
  const { items, setItems } = useContext(ItemsContext);

  const purchased = new Set(items);
  const foo = Array.from(purchased);
  const sum = foo.map((item) => +item.price.substring(1));
  let abc = 0;
  for (let i = 0; i < sum.length; i++) {
    abc += sum[i];
  }
  console.log(abc);
  function removeItem(e) {
    setItems(items.filter((item) => item !== e));
  }
  function checkout(e) {
    alert("Thanks for shopping with us!");
    window.location.reload();
  }
  return (
    <div className="cart-content">
      <Navbar />
      <div className="cart">
        <h2 className="heading">El Carte</h2>

        {purchased.size ? (
          <div>
            <div className="items">
              {foo.map((item) => (
                <PurchasedItems
                  item={item}
                  removeItem={() => removeItem(item)}
                  key={item.id}
                  purchased={foo}
                />
              ))}
            </div>
            <div className="total">
              <h2>Total: ${`${abc.toFixed(2)}`}</h2>
              <button className="checkout" onClick={() => checkout()}>
                Checkout/Verificàr
              </button>
            </div>
          </div>
        ) : (
          <div className="emptyCart">
            <img src={ShoppingBag} className="emptyBag" alt="Empty Cart" />
            <h2>Seems kinda empty here</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
