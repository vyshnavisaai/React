import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function UseEffect() {
    const [first, setfirst] = useState("WELCOME")
    useEffect(() => {
        alert('Do you wanna continue..!!')
      }, [first])
  return (
    <div>
        <h1>{first}</h1>
        <Button onClick={()=>setfirst('HELLOO')}>Click</Button>
    </div>
  )
}

export default UseEffect