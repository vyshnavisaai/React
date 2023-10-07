import React, { useState } from 'react'

function TernaryOperator() {

    const [a, setfirst] = useState(false)
  return (
    <div>
        <button onClick={()=>setfirst(!a)}>Toggle</button>

        {a ? <p>Show this text</p> : ""}   
    </div>
  )
}

export default TernaryOperator