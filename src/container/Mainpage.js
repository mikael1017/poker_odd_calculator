import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCard from "../components/SingleCard";
import CARD_IMAGES from "../img/index";

export default function Mainpage() {
  const [card, setCards] = useState([]);

  return (
    <div>
      <header className="App-header">
        <div className="card-grid">
          {cards.map((card) => (
            <SingleCard key={card.id} card={card} />
          ))}
        </div>
      </header>
    </div>
  );
}
