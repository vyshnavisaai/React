import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Enchanteur3.css'

function Enchanteur3() {
    const ecard=[
        {image:"ennn2.webp",
         title:"Indulgent Bath & Body Essentials",
        cap:"Infused With French Perfume",
        butn:"SHOP NOW"
        },
        {image:"ennn1.webp",
            title:"Shop Gift Bags",
           cap:"Win Over That Someone Special",
           butn:"SHOP NOW"
           },
           {image:"enn4.webp",
           title:"Indulgent Body Lotions",
          cap:"Get Soft, Smooth, Perfumed Skin",
          butn:"SHOP NOW"
          }
    ]
  return (
    <div>
        <div style={{display:'flex',column:2}}>
        {ecard.map((ecards)=>
        <Card id='ecards' style={{ width: '35rem' }}>
      <Card.Img variant="top" src={ecards.image} />
      <Card.Body>
        <Card.Title>{ecards.title}</Card.Title>
        <Card.Text>{ecards.cap}</Card.Text>
        <Button id='btnshop' variant="primary">{ecards.butn}</Button>
      </Card.Body> 
    </Card>)}
    </div>
    </div>
  )
}

export default Enchanteur3