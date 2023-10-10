import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./Cakes.css";
import Cake3 from "./Cake3";

function Cake2() {
  const [a, setbut] = useState(false);
  const card = [
    {
      img: "cak1.jpeg",
      name: "Snowy Violet Velvet",
    },
    {
      img: "cak5.jpeg",
      name: "Heavenly Blue Vanilla Cake",
    },
    {
      img: "cak8.jpeg",
      name: "Sunshine Swirl Cake",
    },
    {
      img: "cak7.jpeg",
      name: "Strawberry Fantasy Cake",
    },
  ];
  const card2 = [
    {
      img: "cak3.jpeg",
      name: "Purple Majesty Cake",
    },
    {
      img: "cak2.jpeg",
      name: "Cherry Blossom Cake",
    },
    {
      img: "cak4.jpeg",
      name: "Cocoa Lavender Cake",
    },
    {
      img: "cak6.jpeg",
      name: "Snowy Seascape Cake",
    },
  ];
  return (
    <div>
      <h2 className="head1">Our Specials</h2>
      <div style={{ display: "flex" }}>
        {card.map((copy) => (
          <Card id="card" style={{ width: "18rem" }}>
            <Card.Img className="cardimg" variant="top" src={copy.img} />
            <Card.Body>
              <Card.Title>{copy.name}</Card.Title>
              <Button className="taste">Taste Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        {card2.map((copy) => (
          <Card id="card" style={{ width: "18rem" }}>
            <Card.Img className="cardimg" variant="top" src={copy.img} />
            <Card.Body>
              <Card.Title>{copy.name}</Card.Title>
              <Button className="taste">Taste Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <hr />
      <h1 className="head1">Our Specials</h1>
      <center>
        <Button onClick={() => setbut(!a)} className="taste">
          {a ? "HIDE" : "EXPLORE"}
        </Button>
        {a ? <Cake3 /> : ""}
      </center>
      <hr style={{ marginTop: 50 }} />
    </div>
  );
}

export default Cake2;
