import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import Navbar from "./Navbar";
import Database from "../Database";

const Profile = () => {
  const shirts = Database.filter((e) => e.type === "shirt");
  const Jackets = Database.filter((e) => e.type === "jacket");
  const accessories = Database.filter((e) => e.type === "accessories");

  const [foo, setFoo] = useState(shirts);

  return (
    <div className="Shop-content">
      <Navbar />
      <div className="container">
        <div className="left-content">
          <h2>
            Shop/<br></br> All Products
          </h2>
          <ul>
            <li onClick={() => setFoo(shirts)}>Shirts</li>
            <li onClick={() => setFoo(Jackets)}>Jackets</li>
            <li onClick={() => setFoo(accessories)}>Accessories</li>
          </ul>
        </div>
        <div className="right-content">
          {!foo.length ? (
            <h1>Seems kinda empty here 🐻</h1>
          ) : (
            foo.map((product) => (
              <div className="Product-Card" key={product.id}>
                <div>
                  <Link
                    to={{
                      pathname: `/shop/${product.name.replace(/\s/g, "-")}-${
                        product.id
                      }`,
                      state: {
                        id: product.id,
                        name: product.name,
                        img: product.img,
                        price: product.price,
                      },
                    }}
                  >
                    <img className="item-img" src={product.img} alt="img" />
                  </Link>
                </div>
                <div className="product-info">
                  <h2>{product.name}</h2>
                  <h4>{product.price}</h4>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
