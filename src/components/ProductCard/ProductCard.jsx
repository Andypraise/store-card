import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div>
      <div className="text">
        <img src={props.url} alt="" />
        <div>
          <h4>{props.sure}</h4>
          <p>{props.amount} <span>{props.name}</span></p>
          <p className="stat">{props.age}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
