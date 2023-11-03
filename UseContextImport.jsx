import React, { useContext } from 'react'
import { newcontext } from './UseContent'

function UseContextImport() {
    const display=useContext(newcontext)
    const {name,first}=display
  return (
    <div>
        <p>{name}</p>

        {first.map((map)=>
        <>
          <p>a:{map.a}</p>
          <p>b:{map.b}</p>
        </>
        )}
    </div>
  )
}

export default UseContextImport