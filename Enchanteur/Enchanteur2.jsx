import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import './Enchanteur2.css'

function Enchanteur2() {
    const car=[{image:"enn1.webp"},{image:"enn2.webp"},{image:"enn5.webp"}]
    const card=[{image:"en1.jpg",name:'Perfume'},{image:"en2.jpg",name:'Body Soaps'},{image:"en3.jpg",name:'Talc powders'},{image:"en4.jpg",name:'Deodrant'},{image:"en5.jpg",name:'Body lotions'}]
  return (
    <div>
        <Carousel>
            { car.map((pic)=>
      <Carousel.Item>
        <img id='car' src={pic.image} alt="" />
      </Carousel.Item>
           ) }
    </Carousel>
    <p id='para1'>SHOP BY CATEGORY</p>
    <div style={{display:'flex'}}>
        {card.map((cards=>
            <Card id='cimg' style={{ width: '18rem' }}>
            <a href=""><Card.Img  variant="top" src={cards.image} /></a>
            <Card.Body>
              <Card.Title id='tit'>{cards.name}</Card.Title>
              
              
            </Card.Body>
          </Card>
        ))}
    </div>
    </div>
  )
}

export default Enchanteur2