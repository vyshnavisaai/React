import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function UseNavigate3() {
    const prev=useNavigate()
    
  return (
    <div>
      <h3>HEYYYY</h3>
        <Button onClick={()=>prev(-1)}>PREV</Button>
    </div>
  )
}

export default UseNavigate3