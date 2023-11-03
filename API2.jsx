import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Carousel, CarouselItem, Image } from "react-bootstrap";

function API2() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((display) => {
      setproducts(display.data.products);
      console.log(display);
    });
  }, []);

  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
        {products.map((display)=>
      <Card style={{ width: "18rem" }}>
        
          <Carousel>
                {display.images.map((show)=>
                <CarouselItem>
              <img height={250} src={show}/>
              </CarouselItem>
              )}
          </Carousel>
        
        <Card.Body>
          <Card.Title>{display.brand}</Card.Title>
          <Card.Text>Discount:{display.discountPercentage}%</Card.Text>
          <Card.Text>Price:{display.price}</Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      )}
    </div>
  );
}

export default API2;
