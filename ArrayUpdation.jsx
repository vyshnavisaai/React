import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const ArrayUpdation = () => {
    const [arr1, setfirst] = useState(['item1','item2','item3'])

    const update=()=>{
        const arr2=[...arr1]
        arr2[1]='updated item'

        setfirst(arr2)
    }
  return (
    <div>
        {arr1.map((map)=>
        <ul>
            <li>{map}</li>
        </ul>
        )}
        <Button onClick={update}>update</Button>
    </div>
  )
}

export default ArrayUpdation