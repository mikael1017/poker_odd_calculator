import React from "react";

export default function SingleCard({ card }) {
  const selectedCard = () => {
    //
  };

  return (
    <div className="card">
      <div>
        <img
          className="front"
          key={card.value}
          src={card.photo}
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
