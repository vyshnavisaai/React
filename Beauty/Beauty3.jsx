import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Beauty.css'

function Beauty3() {
  return (
    <div>
        <div className='bodyy1' style={{display:'flex'}}>
    <div>
    <Card className='aaa' style={{ width: '18rem' }}>
      <center>
      <Card.Img className='cardimgg' variant="top" src="b4.png" />
      <Card.Body>
        <Button className='but1' variant="primary">BUY</Button>
      </Card.Body>
      </center>
    </Card>
    </div>

    <div>
    <Card className='aaa' style={{ width: '18rem' }}>
      <center>
      <Card.Img className='cardimgg' variant="top" src="b1.png" />
      <Card.Body>
        <Button className='but1' variant="primary">BUY</Button>
      </Card.Body>
      </center>
    </Card>
    </div>

    <div>
    <Card className='aaa' style={{ width: '18rem' }}>
      <center>
      <Card.Img className='cardimgg' variant="top" src="b3.png"/>
      <Card.Body>
        <Button className='but1' variant="primary">BUY</Button>
      </Card.Body>
      </center>
    </Card>
    </div>

    <div>
    <Card className='aaa' style={{ width: '18rem' }}>
      <center>
      <Card.Img className='cardimgg' variant="top" src="b7.png" />
      <Card.Body>
        <Button className='but1' variant="primary">BUY</Button>
      </Card.Body>
      </center>
    </Card>
    <br /><br />
    </div>
    </div>
    </div>
  )
}

export default Beauty3