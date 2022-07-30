import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

export default function Homepage() {
  const navigate = useNavigate();
  const goCalculate = () => {
    navigate("/calculate");
  };

  return (
    <div>
      <header className="App-header">
        <Card className="m-5 border-0" style={{ color: "#000" }}>
          {/* <Card.Img src={} /> */}
          <Card.Body>
            <Card.Title>Find your hand's odds</Card.Title>

            <Button variant="primary" onClick={goCalculate}>
              Start!
            </Button>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}
