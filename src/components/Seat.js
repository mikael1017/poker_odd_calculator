import React from "react";
import back_card from "../img/card_back.png";

export default function Seat() {
  return (
    <div className="Seat">
      <div className="Column">
        <img className="card" src={back_card} width={50} height={50} />
      </div>
      <div className="Column">
        <img className="card" src={back_card} width={50} height={50} />
      </div>
    </div>
  );
}
