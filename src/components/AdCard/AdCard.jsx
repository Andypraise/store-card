import React from "react";
import "./AdCard.css";

export default function AdCard(props) {
  return (
    <div>
      <div>
        <img src={props.url} alt="" width="10px" className="img" />
        <p>{props.text}</p>
      </div>
    </div>
  );
}
