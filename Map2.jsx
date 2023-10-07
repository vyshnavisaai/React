import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Map2() {
    const flowers=[
        {
            name:'Rose',
            image:"https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZSUyMHJlZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
            colour:'Red'
        },
        {
            name:'Jasmine',
            image:"https://m.media-amazon.com/images/I/41e1LA0W3jL._AC_UF1000,1000_QL80_.jpg",
            colour:'White'
        },
        {
            name:'Sunflower',
            image:"https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
            colour:'Yellow'
        },
        {
            name:'Hybiscus',
            image:"https://m.media-amazon.com/images/I/41EkvSW5ZUS._AC_UF1000,1000_QL80_.jpg",
            colour:'Red'
        },
        {
            name:'Lilly',
            image:"https://upload.wikimedia.org/wikipedia/commons/3/30/Lilium_candidum_1.jpg",
            colour:'White'
        }

    ]
  return (
    <div style={{display:'flex'}}>
        {flowers.map((flower=>
            <Card style={{ width: '18rem' }}>
            <Card.Img height={300} variant="top" src={flower.image} />
            <Card.Body>
              <Card.Title>{flower.name}</Card.Title>
              <Card.Text>
                {flower.colour}
              </Card.Text>
              
            </Card.Body>
          </Card>
        ))}
    </div>
  )
}

export default Map2