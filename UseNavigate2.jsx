import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function UseNavigate2() {
    const nav=useNavigate()
    const navigate=()=>{
        nav('/nav2')
    }
  return (
    <div>
        <h1>Hellooo</h1>
        
        <Button onClick={()=>nav(-1)}>PREV</Button>
        <Button onClick={navigate}>NEXT</Button>
    </div>
  )
}

export default UseNavigate2