import React from 'react'
import { Card } from 'react-bootstrap'
import './Wonders.css'

function Wonderpart2() {
  return (
    <div><div style={{display:'flex',margin: '95px'}}>
    <Card style={{ width: '18rem',margin:'30px' }}>
  <Card.Img className='img' variant="top" height={200} src="2.jpg" />
  <Card.Body>
    <Card.Title>Colosseum, Rome</Card.Title>
    <Card.Text>
    Best Time To Visit: October to April
    Location: Piazza del Colosseo, 1, Roma, Italy
    </Card.Text>
    
  </Card.Body>
</Card>

<Card style={{ width: '18rem',margin:'30px' }}>
  <Card.Img variant="top" height={200} src="https://cdn.britannica.com/86/179586-138-8B763D72/Overview-Chichen-Itza-Yucatan-Mexico.jpg" />
  <Card.Body>
    <Card.Title>Chichen Itza, Mexico</Card.Title>
    <Card.Text>
    Best Time To Visit: December to March
Location: Yucatan, Mexico
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '18rem',margin:'30px' }}>
  <Card.Img variant="top" height={200} src="3.webp" />
  <Card.Body>
    <Card.Title>Taj Mahal, India</Card.Title>
    <Card.Text>
    Best Time To Visit: November to March
Location: Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh
    </Card.Text>
  </Card.Body>
</Card>

</div>

<div style={{display:'flex',margin: '95px'}}>
<Card className='cardd' style={{ width: '18rem',margin:'30px' }}>
  <Card.Img variant="top" height={200} src="https://media.cntraveler.com/photos/5bce196031019f0885f7cbc9/16:9/w_2560%2Cc_limit/Machu-Picchu_GettyImages-109401484.jpg" />
  <Card.Body>
    <Card.Title>Machu Picchu, Peru</Card.Title>
    <Card.Text>
    Best Time To Visit: April to October
Location: Mountain Machu Picchu, Peru
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '18rem',margin:'30px' }}>
  <Card.Img variant="top" height={200} src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/05/PetraJordan.jpg" />
  <Card.Body>
    <Card.Title>Petra, Jordan</Card.Title>
    <Card.Text>
    Best Time To Visit: March to May
Location: Jordan
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '18rem',margin:'30px' }}>
  <Card.Img variant="top" height={200} src="china.jpeg" />
  <Card.Body>
    <Card.Title>Great Wall Of China</Card.Title>
    <Card.Text>
    Best Time To Visit: September to October
Location: Huairou, Beijing, China
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div>
    <center>
    <Card style={{ width: '18rem',margin:'30px' }}>
  <Card.Img variant="top" height={200} src="https://destinationlesstravel.com/wp-content/uploads/2022/10/Christ-the-Redeemer-statue-Rio-de-Janeiro-Brazil.jpg" />
  <Card.Body>
    <Card.Title>Christ the Redeemer, Brazil</Card.Title>
    <Card.Text>
    Best Time To Visit: December to March
Location: Parque Nacional da Tijuca – Alto da Boa Vista, Rio de Janeiro, Brazil
    </Card.Text>
  </Card.Body>
</Card>
    </center>
</div></div>
  )
}

export default Wonderpart2