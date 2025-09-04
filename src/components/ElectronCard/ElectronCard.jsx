import React from "react";
import "./ElectronCard.css";

function ElectronCard(props) {
  return (
    <div>
      <div className="imc">
        <img src={props.url} alt="" />
      </div>
    </div>
  );
}

export default ElectronCard;
