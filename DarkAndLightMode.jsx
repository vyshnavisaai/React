import React, { useState } from 'react'
import './DarkAndLightMode.css'
import { Button } from 'react-bootstrap'

function DarkAndLightMode() {
    const [a, setfirst] = useState(false)
  return (
    <div className='body' style={{backgroundColor:a?'white':'black'}}>
        
        <h1 style={{color:a?'black':'white'}}>Welcome To My Page</h1>
        <Button id='but' style={{backgroundColor:a?'black':'white',color:a?'white':'black'}} onClick={()=>setfirst(!a)}>{a?'Dark':'Light'}</Button>
        
        
    </div>
  )
}

export default DarkAndLightMode