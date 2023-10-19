import React from 'react'
import { Button } from 'react-bootstrap'

function PropsChild4({first,setfirst}) {
    const change=()=>{
        setfirst("Kavya")
    }

  return (
    <div>
        <h1>{first}</h1>
        <Button onClick={change}>Change</Button>
    </div>
  )
}

export default PropsChild4