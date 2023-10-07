import React, { useState } from 'react'

function Usestatesample() {
    const [life, setlife] = useState('enjoy')
    const change=()=>{
        setlife("explore")
    }
  return (
    <div>
        {/* <h1>{life} Your Life</h1>
        <button onClick={(()=>setlife("explore"))}>Change</button> */}

        <h1>{life} Your Life</h1>
        <button onClick={change}>Change</button>
    </div>
  )
}

export default Usestatesample