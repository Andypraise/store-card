import React from "react";
import "./Footer.css";
import whatImage from "../../assets/image34.png";
import callImage from "../../assets/image35.png";
import mailImage from "../../assets/image36.png";
import appleImage from "../../assets/image37.png";
import andriodImage from "../../assets/image38.png";
import faceImage from "../../assets/image39.png";
import twitImage from "../../assets/image40.png";
import instaImage from "../../assets/image41.png";
import youImage from "../../assets/image42.png";
import wiImage from "../../assets/image.png";


function Footer() {
  return (
    <div>
      <div className="footer-all">
        <div className="date">
          <div className="support">
            <div className="latest">
              <img src={whatImage} alt="" width="30px" />
              <h4>
                EMAIL SUPPORT <br />
                <span>help andypraise890@gmail.com</span>
              </h4>
            </div>
            <div className="latest">
              <img src={callImage} alt="" width="30px" />
              <h4>
                PHONE SUPPORT <br />
                <span>09133277350,09134820922</span>
              </h4>
            </div>
            <div className="latest">
              <img src={mailImage} alt="" width="30px" />
              <h4>
                WHATSAPP <br />
                <span>09133277350,09134820922</span>
              </h4>
            </div>
            <div className="latest">
              <img src="" alt="" />
              <h4>
                GET LATEST DEALS <br />
                <span>Our best promotions sent to your inbox.</span>
              </h4>
            </div>
             <form >

            <div className="latest last">
              <input type="email" placeholder="Email Address" required/>
              <button>Subscribe</button>
            </div>
             </form>
          </div>
        </div>
        <div className="footer-link">
          <div className="link-all">
            <div className="link">
              <h4>ABOUT ANDREAM</h4>
              <ul>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Our Blog</a>
                </li>
                <li>
                  <a href="">Forum</a>
                </li>
                <li>
                  <a href="">Terms & Condition</a>
                </li>
              </ul>
            </div>
            <div className="link">
              <h4>PAYMENT</h4>

              <ul>
                <li>
                  <a href="">AndreamPay</a>
                </li>
                <li>
                  <a href="">Wallet</a>
                </li>
                <li>
                  <a href="">Verve</a>
                </li>
                <li>
                  <a href="">Mastercard</a>
                </li>
                <li>
                  <a href="">Visa</a>
                </li>
              </ul>
            </div>
            <div className="link">
              <h4>BUYING ON ANDREAM</h4>
              <ul>
                <li>
                  <a href="">Buyer Safety Centre</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">Delivery</a>
                </li>
                <li>
                  <a href="">Andream Return Policy</a>
                </li>
                <li>
                  <a href="">Bulk Purchase</a>
                </li>
              </ul>
            </div>
            <div className="link">
              <h4>MORE INFO</h4>
              <ul>
                <li>
                  <a href="">Site Map</a>
                </li>
                <li>
                  <a href="">Track My Order</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Authentic Items Policy</a>
                </li>
              </ul>
            </div>
            <div className="link">
              <h4>MAKE MONEY ON ANDREAM</h4>
              <ul>
                <li>
                  <a href="">Become a Andream Affiliate</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="play-all">
            <div className="play">
              <div className="apple">
                <img src={appleImage} alt="" width="30px" />
                <h4>
                  Download on <br />
                  <span>App Store</span>
                </h4>
              </div>
              <div className="apple">
                <img src={andriodImage} alt="" width="30px" />
                <h4>
                  Download on <br />
                  <span>Goggle Play</span>
                </h4>
              </div>
            </div>
            <div className="connect">
              <h4>CONNECT WITH US</h4>
              <div className="face">
                <div>
                  <img src={faceImage} alt="" width="30px" />
                </div>
                <div>
                  
                  <img src={twitImage} alt="" width="30px" />
                </div>
                <div>
                  
                  <img src={instaImage} alt="" width="30px" />
                </div>
                <div>
                  
                  <img src={youImage} alt="" width="30px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hr">
            <hr size="1"/>
        <p>Copyright&copy; 2025 Andream.com.All rights reserved.</p><hr size="1"/>
        </div>
        <div className="today-1">
            <div className="help">
                <p>Hi there! Thanks for stopping by. <br />
                How can i help you today?</p>
            </div>
            <div className="with">
 <img src={wiImage} alt="" width="30px"/>
 <p>Widget</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
