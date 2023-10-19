import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function SpreadOperator2() {
    const [first, setfirst] = useState([{name:'Vyshnavi',place:'vtk'},{name:'Kavya',place:'knr'},{name:'Nihala',place:'kkd'},{name:'Sandra',place:'tsr'}])
    const array=[{name:'Soorya',place:'tsr'},{name:'Avanthika',place:'vtk'}]
    
    return (
    <div>
        
        <Button onClick={()=>setfirst([...first,...array])}>click</Button>
        {first.map((add)=>
        <>
        <p>Name : {add.name}</p>
        <p>Place : {add.place}</p>
        </>)}
        
    </div>
  )
}

export default SpreadOperator2