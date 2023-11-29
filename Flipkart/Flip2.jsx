import React from "react";
import "./Flip1.css";
import { Card } from "react-bootstrap";

function Flip2() {
  const fimage = [
    {
      image: "fl1.webp",
      text: "Top Offers",
    },
    {
      image: "fl2.webp",
      text: "Mobiles & Tablets",
    },
    {
      image: "fl3.webp",
      text:'Electronics'
    },
    {
      image: "fl4.webp",
      text:'TVs & Appliances'
    },
    {
      image: "fl5.webp",
      text:'Fashion'
    },
    {
      image: "fl6.webp",
      text:'Beauty'
    },
    {
      image: "fl7.webp",
      text:'Home & Kitchen'
    },
    {
      image: "fl8.webp",
      text:'Furniture'
    },
    {
      image: "fl9.webp",
      text:'Flights'
    },
    {
      image: "fl10.webp",
      text:'Grocery'
    },
  ];
  return (
    <div>
      <div id="cards" style={{ display: "flex"}}>
        {fimage.map((img) => (
          <>
            <Card id="card" style={{ width: "8rem" }}>
              <Card.Img style={{height:65,width:65,marginLeft:20}} variant="top" src={img.image} />
              <Card.Body>
                    <p id="text">{img.text}</p>
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
}

export default Flip2;
