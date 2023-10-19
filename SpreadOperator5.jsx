import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function SpreadOperator5() {
    
    const [first, setfirst] = useState({name:'BALENO',colour:'NEXA BLUE'})     

  return (
    <div>
        <p>My car is maruthi {first.name} and colour is {first.colour}</p>
        <Button onClick={()=>
    setfirst({...first,colour:'DELTA BLUE'})}>click</Button>
    </div>
  )
}

export default SpreadOperator5