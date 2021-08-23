import React from "react";
import "./app.css";
import RightArrow from "./assets/RightArrow.svg";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-content">
        <h2>The perfect place to find the clothes that fit your body</h2>
        <Link to="./shop" className="hero-btn">
          <button>
            Shop Now
            <span>
              <img className="arrow" src={RightArrow} alt="arrow" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
