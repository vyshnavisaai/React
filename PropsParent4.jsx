import React, { useState } from 'react'
import PropsChild4 from './PropsChild4'

function PropsParent4() {
    const [first, setfirst] = useState("Vyshnavi")
  return (
    <div>
        <PropsChild4 first={first} setfirst={setfirst}/>
    </div>
  )
}

export default PropsParent4