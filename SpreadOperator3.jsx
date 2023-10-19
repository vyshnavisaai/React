import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function SpreadOperator3() {
    const [first, setfirst] = useState([{name:'Vyshnavi',place:'vtk'},{name:'Kavya',place:'knr'},{name:'Nihala',place:'kkd'},{name:'Sandra',place:'tsr'}])
    const array=[{name:'Soorya',place:'tsr'},{name:'Avanthika',place:'vtk'}]
  return (
    <div>
        <Button onClick={()=>setfirst([...first,...array])}>Click</Button>
        <table border={1}>
            <tr>
                <th style={{width:150}}>Name</th>
                <th>Place</th>
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

export default SpreadOperator3