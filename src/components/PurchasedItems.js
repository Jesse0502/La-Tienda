import React, { useState } from "react";
const PurchasedItems = ({ item, removeItem, purchased }) => {
  const [qty, setQty] = useState(+1);
  function decreaseQty() {
    setQty(qty - 1);
    if (qty === 1) {
      removeItem(item);
    }
  }
  function incQty() {
    setQty(qty + 1);
  }
  let abcd = (+item.price.substring(1) * qty).toFixed(2);
  return (
    <div key={item.id}>
      <div className="peepeepoopoo">
        <h2>{purchased.indexOf(item) + 1}.</h2>
        <h2>{item.name}</h2>
        <h2>
          {/* <button onClick={() => decreaseQty()}>-</button> */}
          <span>{qty}</span>
          {/* <button onClick={() => incQty()}>+</button> */}
        </h2>
        <h2>{`$${abcd}`}</h2>
        <button className="remove" onClick={() => removeItem(item)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default PurchasedItems;
