import React from "react";
import "./Navbar.css";

function Navbar({ searchImage, helpImage, topImage }) {
  return (
    <div className="nav"> 
      <nav className="nav-container">
        <div className="delivery">
          <div className="delivery-2">
            <h1 className="now">AndreamNow </h1>{" "}
            <h1 className="set">SAME DAY DELIVERY!</h1>
          </div>
          <div className="select">
            <div className="open-all">
              <p className="fast">
                Need it fast? Get your orders delivered in same day in <br />
                <span>Owerri-Aba-Port Harcourt</span>
              </p>
              <span className="sup set">ORDER NOW 3PM</span>
            </div>
            <div className="btn">
              <button>T&C Apply</button>
            </div>
          </div>
        </div>
        <div className="open">
          <img src={topImage} alt="" />
        </div>

        <div className="store">
          <h1>Andream</h1>

          <div>
            <ul className="navbar">
              <li>
                <a href="">Store Locator</a>
              </li>
              <li>
                <a href="">Sell on Andream</a>
              </li>
            </ul>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Search for products, brands and categories..."
            />
            <img src={searchImage} alt="" />
          </div>
          <div className="drop-out">
            <ul className="navbar">
              <li className="drop">
                <div>
                  <a href="">
                    <img src={helpImage} alt="help" width="20px" />
                    Help
                  </a>
                </div>

                <ul className="dropdown">
                  <li>
                    <a href="">Help Centre</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">Track My Order</a>
                  </li>
                  <li>
                    <a href="">Andream Return Policy </a>
                  </li>
                  <li>
                    <a href="">FAQs</a>
                  </li>
                  <li>
                    <a href="">Store Locator</a>
                  </li>
                  <li>
                    <a href="">Sell on Andream</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Login / Signup</a>
              </li>
            </ul>
          </div>

          <div className="btc">
            <button>My Cart</button>
          </div>
        </div>
        <div className="cart">
          <h2>All Categories &#9776;</h2>

          <ul className="navbar">
            <li>
              <a href="">Computers and Accessories</a>
            </li>
            <li>
              <a href="">Phone and Tablets</a>
            </li>
            <li>
              <a href="">Electronics</a>
            </li>
            <li>
              <a href="">Andream Fashion</a>
            </li>
            <li>
              <a href="">Home and Kitchen</a>
            </li>
            <li>
              <a href="">Baby,Kids and Toys</a>
            </li>
            <li>
              <a href="">Beauty, Health & Personal Care </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
