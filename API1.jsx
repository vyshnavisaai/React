import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

function API1() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((display) => {
      setproducts(display.data.products);
    });
  }, []);

  return (
    <div style={{display:'flex', flexWrap: 'wrap'
    }}>
      {products.map((display) => 
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" height={200} width={100} src={display.images[0]} />
          <Card.Body>
            <Card.Title>{display.brand}</Card.Title>
            <Card.Text>Discount:{display.discountPercentage}%</Card.Text>
            <Card.Text>₹:{display.price}</Card.Text>
            
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default API1;
