import React, { useContext } from 'react'
import { Button, Image, Table } from 'react-bootstrap'
import { newcontexttask } from './TaskRouting';
import { useNavigate } from 'react-router-dom'

function Task5() {
    const [Fruit,setFruit] = useContext(newcontexttask)
    const nav=useNavigate()
    const back=()=>{
        nav(-1)
    }
  return (
    <div>
      <center>
        <h1>Fruits</h1>
        <Table id='table' style={{width:'700px'}} striped bordered hover>
      <thead>
        <tr>
          <th>Fruit</th>
          <th>Image</th>
          <th>Definition</th>
        </tr>
      </thead>
      <tbody>
        {Fruit.map((map3)=>
        <tr>
          <td style={{fontWeight:'bold'}}>{map3.fruit}</td>
          <td><Image src={map3.Image} height={130} width={190}/></td>
          <td>{map3.def}</td>
        </tr>
        )}
      </tbody>
      
    </Table>
    <Button id='button' onClick={back}>Back</Button>
    </center>
    </div>
  )
}

export default Task5