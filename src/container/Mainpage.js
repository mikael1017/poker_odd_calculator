import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCard from "../components/SingleCard";
import CARD_IMAGES from "../img/index";
import { Button, Card } from "react-bootstrap";

export default function Mainpage() {
  const [cards, setCards] = useState();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <header className="App-header">
        <div className="m-5 border-0">
          <Button variant="secondary" onClick={goHome}>
            Home
          </Button>
        </div>
        <div className="m-2 border-0">
          {CARD_IMAGES.map((card, idx) => (
            <SingleCard key={card.value} card={card} />
          ))}
        </div>
      </header>
    </div>
  );
}
