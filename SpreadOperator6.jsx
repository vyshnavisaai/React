import React, { useState } from 'react'

function SpreadOperator6() {
    const [first, setfirst] = useState([{a:1,b:2},{a:3,b:4}])
    const arr2=[{a:3,b:7}]
  return (
    <div>
        <table>
            <tr>
                <th>a</th>
                <th>b</th>
            </tr>
            {first.map((arr)=>
            <tr>
            <>
                <td>{arr.a}</td>
                <td>{arr.b}</td>
            </>
            
            </tr>
            )}
        </table>
        <button onClick={()=>setfirst([...first,...arr2])}>click</button>
    </div>
  )
}

export default SpreadOperator6