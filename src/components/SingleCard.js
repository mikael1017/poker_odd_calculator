import React from "react";

export default function SingleCard({ card }) {
  const handleClick = (e) => {
    console.log(e.target.id);
  };

  return (
    <div className="card">
      <img
        className="front"
        id={card.value}
        src={card.photo}
        width={50}
        height={50}
        onClick={handleClick}
      />
    </div>
  );
}
