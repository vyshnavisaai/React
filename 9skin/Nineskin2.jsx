import React, { useState } from "react";
import "./Nineskin2.css";
import { Button, Card } from "react-bootstrap";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

function Nineskin2({val,setVal}) {
  const skin = [
    {
      image: "9s5.jpg",
      name: "SKINTILLATE - Booster Oil",
      pr: "Rs.999",
    },
    {
      image: "9s11.jpg",
      name: "ETERNELLE - Moisturizer",
      pr: "Rs.1,499",
    },
    {
      image: "9s3.jpg",
      name: "ILLUMINATE - Glow Serum",
      pr: "Rs.1.199",
    },
    {
      image: "9s6.jpg",
      name: "REJUVINATE - Night Cream",
      pr: "Rs.1,899",
    },
  ];
  return (
    <div className={val?"maindark":"main"}>
      
      
      <button id={val?"darklight2":"darklight"} onClick={() => setVal(!val)}>{val?<BsSunFill/>:<BsFillMoonStarsFill/>}</button>
      <h1 id={val?"productdark":"product"}>Our Products</h1>
      <div className="" style={{ display: "flex" }}>
        {skin.map((card) => (
          <Card id={val?"card9dark":"card9"} style={{ width: "18rem" }}>
            <Card.Img  variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <Card.Text>{card.pr}</Card.Text>
              <Button id={val?"button9dark":"button9"} variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Nineskin2;
