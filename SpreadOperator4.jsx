import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function SpreadOperator4() {
    const [first, setfirst] = useState([{name:'Vyshnavi',place:'vtk'},{name:'Kavya',place:'knr'},{name:'Nihala',place:'kkd'},{name:'Sandra',place:'tsr'}])
    const obj={name:'Surya',place:'tsr'}
    
  return (
    <div>
        <Button onClick={()=>setfirst([...first,{...obj}])}> Click</Button>
        <table border={1}>
            <tr>
                <th style={{width:100}}>Name</th>
                <th style={{width:100}}>Place</th>
            </tr>
            {first.map((add)=>
            <tr>
                <td>{add.name}</td>
                <td>{add.place}</td>
            </tr>
            )}
        </table>
    </div>
  )
}

export default SpreadOperator4