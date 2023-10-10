import React from "react";
import { Carousel } from "react-bootstrap";
import "./Cakes.css";

function Cake3() {
  const car = [
    {
      img: "cake1.jpg",
      h: "Cupcake Fiesta",
    },
    {
      img: "cake2.jpg",
      h: "Heavenly Pound Cakes",
    },
    {
      img: "cake3.webp",
      h: "Cozy Cake in Paper",
    },
  ];
  return (
    <div>
      <Carousel>
        {car.map((cop) => (
          <Carousel.Item>
            <center>
              <img src={cop.img} id="carimg" alt="" />
            </center>
            <Carousel.Caption id="carcap">
              <h3 id="cap">{cop.h}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <hr />
    </div>
  );
}

export default Cake3;
