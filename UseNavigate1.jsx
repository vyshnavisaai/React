import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const UseNavigate1 = () => {
    const nav=useNavigate()
    const click=()=>{
        nav('/nav')
    }
    const change=()=>{
        nav('/nav2')
    }
  return (
    <div>
        <h2 onClick={change}>Welcome</h2>
        
        <Button onClick={()=>nav(-1)}>PREV</Button>
        <Button onClick={click}>NEXT</Button>
    </div>
  )
}

export default UseNavigate1