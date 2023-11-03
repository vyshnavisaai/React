import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const ArrayUpdationUsingMap = () => {
    const [array1, setfirst] = useState([{name:'Vyshnavi',age:23},{name:'Soorya',age:22}])

    const update=()=>{
    const change= array1.map((obj)=>{
        if(obj.name==='Vyshnavi'){
            return {...obj,age:21}
        }
        return obj
    })
    setfirst(change)
}
  return (
    <div>
        {array1.map((map)=>
            <ul>
                <li>{map.name} : {map.age}</li>
            </ul>
            
        )}
        <Button onClick={update}>Update</Button>
    </div>
  )
}

export default ArrayUpdationUsingMap