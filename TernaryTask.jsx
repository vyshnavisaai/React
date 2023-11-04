import React, { useState } from 'react'
import { Button, Image } from 'react-bootstrap'

const TernaryTask = () => {
    const [val, setval] = useState(false)
    console.log(val);
  return (
    <div style={{margin:30}}>
        <Button onClick={()=>setval(!val)}>Show Content</Button><br />

        {val?
        <>
        <Image src='https://assets-global.website-files.com/63062129119620a44791a2eb/63e2e74675de8b1c29acdc2a_team-meeting-games.jpg'/>
        <br /><br />
        <Button onClick={()=>setval(!val)}>X</Button>
        </>:''}
        
    </div>
  )
}

export default TernaryTask