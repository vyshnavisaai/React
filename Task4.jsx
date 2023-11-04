import React, { useContext } from 'react'
import { newcontexttask } from './TaskRouting';
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Task4() {
    const [Fruit,setFruit] = useContext(newcontexttask)
    const nav=useNavigate()
    const back=()=>{
        nav(-1)
    }
  return (
    <div>
      <center><h1>Fruits</h1></center>
    <div style={{display:'flex',flexWrap:'wrap'}}>
        {Fruit.map((map2)=>
        <Card id='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" height={220} src={map2.Image} />
      <Card.Body>
        <Card.Title>{map2.fruit}</Card.Title>
        <Card.Text>
          {map2.def}
        </Card.Text>
        <Button id='button' variant="primary">KNOW MORE</Button>
      </Card.Body>
    </Card>
    )}
    </div>
    <br />
    <Button id='button' onClick={back}>Back</Button>
    </div>
  )
}

export default Task4