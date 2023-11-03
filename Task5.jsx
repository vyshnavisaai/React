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
        <Table style={{width:'700px'}} striped bordered hover>
      <thead>
        {/* <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr> */}
      </thead>
      <tbody>
        {Fruit.map((map3)=>
        <tr>
          <td style={{fontWeight:'bold'}}>{map3.fruit}</td>
          <td><Image src={map3.Image} height={100}/></td>
          <td>{map3.def}</td>
        </tr>
        )}
      </tbody>
      
    </Table>
    <Button id='button' onClick={back}>Back</Button>
    </div>
  )
}

export default Task5