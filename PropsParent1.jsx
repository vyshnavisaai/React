import React, { useState } from 'react'
import PropsChild1 from './PropsChild1'

function PropsParent1() {
    const [first, setfirst] = useState("Vyshnavi")
  return (
    <div>
        <PropsChild1 first={first}/>
    </div>
  )
}

export default PropsParent1