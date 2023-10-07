import React, { useState } from "react";
import { Card } from "react-bootstrap";

function ArrayInUsestate2() {
  const flower = [
    {
      image:
        "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonas-kakaroto-736230.jpg&fm=jpg",
      name: "rose",
      color: "pink",
    },
    {
      image:
        "https://www.bhg.com/thmb/h3Pu9kSEi6oNzfcOk9dNMDBGSHU=/1280x0/filters:no_upscale():strip_icc()/jasmine-4120cd7d-fef73520ff69493d8b07acaca0b1a8e8.jpg",
      name: "jasmine",
      color: "white",
    },
  ];
  const [first, setfirst] = useState(flower);
  return <div>
    
    {first.map((display)=>
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img height={300} variant="top" src={display.image} />
      <Card.Body>
        <Card.Title>{display.name}</Card.Title>
        <Card.Text>{display.color}</Card.Text>
      </Card.Body>
    </Card>
    </div>
    )}
    </div>
}

export default ArrayInUsestate2;
