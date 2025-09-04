import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import searchImage from "../../assets/image3.png";
import helpImage from "../../assets/image4.png";
import topImage from "../../assets/start.png";
import homeImage from "../../assets/image5.png";
import productImage from "../../assets/image6.png";
import AdCard from "../../components/AdCard/AdCard";
import phoneNumber from "../../assets/image7.png";
import phoneImage from "../../assets/image8.png";
import signImage from "../../assets/image9.png";
import ProductCard from "../../components/ProductCard/ProductCard";
import laptopImage from "../../assets/image10.png";
import psImage from "../../assets/image11.png";
import hpImage from "../../assets/image12.png";
import downImage from "../../assets/image13.png";
import infinixImage from "../../assets/image14.png";
import upImage from "../../assets/image15.png";
import electronImage from "../../assets/image16.png";
import ElectronCard from "../../components/ElectronCard/ElectronCard";
import textImage from "../../assets/image17.png";
import wearImage from "../../assets/image18.png";
import fitImage from "../../assets/image19.png";
import SliderCard from "../../components/SliderCard/SliderCard";
import ourImage from "../../assets/image28.png";
import houseImage from "../../assets/image29.png";
import plusImage from "../../assets/image30.png";
import roseImage from "../../assets/image31.png";
import fastImage from "../../assets/image32.png";
import footImage from "../../assets/image33.png";
import Footer from "../../components/Footer/Footer"

function Home() {
  return (
    <div>
      <Navbar
        searchImage={searchImage}
        helpImage={helpImage}
        topImage={topImage}
      />

      <div className="home-section">
        <div className="home-feature">
          <div className="feature">
            <SliderCard
              slides={[
                { image: homeImage },
                { image: ourImage },
                { image: houseImage },
                { image: fastImage },
                { image: roseImage },
                { image: plusImage },
                { image: footImage },
              ]}
            />
          </div>
          <div className="product">
            <AdCard url={productImage} />
            <AdCard url={phoneNumber} />
            <AdCard url={phoneImage} />
            <AdCard url={signImage} />
            {/* <div>
              <img src={productImage} alt="" width="10px" />
            </div>
            <div>
              <img src={productImage} alt="" width="10px" />
            </div>
            <div>
              <img src={productImage} alt="" width="10px" />
            </div>
            <div>
              <img src={productImage} alt="" width="10px" />
            </div> */}
          </div>
        </div>
        <div className="blog-section">
          <div className="konga">
            <a href="">Konga Blog</a>
          </div>
          <div className="konga">
            <a href="">Pay Bills</a>
          </div>
          <div className="konga">
            <a href="">Offline Stores</a>
          </div>
          <div className="konga">
            <a href="">Konga Blog</a>
          </div>
          <div className="konga">
            <a href="">Konga Blog</a>
          </div>
        </div>
      </div>
      <div className="today">
        <div className="deal">
          <h2>Today's Deals</h2>
          <a href="">See All Items</a>
        </div>
        <div className="card-2">
          <ProductCard
            url={laptopImage}
            sure="Starlink Standard Kit (Gen 3)"
            amount="$590,000"
            name="$700,000"
            age="You save $110,000"
          />
          <ProductCard
            url={psImage}
            sure="Starlink Mini"
            amount="$318,000"
            name="$330,000"
            age=" You save $12,000"
          />
          <ProductCard
            url={hpImage}
            text="HP Hp Elitebook 1040 G9 "
            amount="$1,311,632"
          />
          <ProductCard
            url={downImage}
            sure="Lenovo ThinkBook Nbln G2-14"
            amount="$792,720"
            name="$812,113"
            age="You save $19,393"
          />
          <ProductCard
            url={infinixImage}
            sure="Infinix Hot 50 Pro+"
            amount="$246,400"
            name="$289,400"
            age="You save $43,000"
          />
          <ProductCard
            url={upImage}
            sure="Inifinix Hot 60i-X6728b "
            amount="$143,000"
            name="$159,900"
            age="You save $16,900"
          />
        </div>
        <div className="electron">
          <img src={electronImage} alt="" />
          <img src={electronImage} alt="" />
          <img src={electronImage} alt="" />
          <img src={electronImage} alt="" />
          <img src={electronImage} alt="" />
          <img src={electronImage} alt="" />
        </div>
        <div className="btm">
          <h4>Official Store</h4>
        </div>
        <div className="laptop-section">
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
          <div>
            <img src={textImage} alt="" />
          </div>
        </div>
        <div className="wears">
          <div>
            <img src={wearImage} alt="" />
          </div>
          <div>
            <img src={fitImage} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
