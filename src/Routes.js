import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Product from "./components/Product";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { ItemsContext } from "./context/context";
import React, { useState } from "react";
import { totalCartContext } from "./context/totalcart";

const Routes = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState();

  return (
    <BrowserRouter>
      <Switch>
        <ItemsContext.Provider value={{ items, setItems }}>
          <Route exact path="/" component={App} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:id" component={Product} />
          <totalCartContext.Provider value={{ total, setTotal }}>
            <Route exact path="/cart" component={Cart} />
          </totalCartContext.Provider>
        </ItemsContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
