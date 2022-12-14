import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCard from "../components/SingleCard";
import CARD_IMAGES from "../img/index";
import { Button, Card } from "react-bootstrap";
import "./Mainpage.css";
import Seat from "../components/Seat";

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
        <div className="CardContainer">
          {CARD_IMAGES.map((card, idx) => (
            <SingleCard key={card.value} card={card} />
          ))}
        </div>
        <div className="SeatContainer">
          <Seat />
        </div>
      </header>
    </div>
  );
}
