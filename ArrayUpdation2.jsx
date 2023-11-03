import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const ArrayUpdation2 = () => {
    const [details, setdetails] = useState([{name:'Vyshnavi',age:22},{name:'Avanthika',age:'20'},{name:'Kavya',age:27},{name:'Sandra',age:23}])
    const update=()=>{
        if(details[2].name=='Kavya'){
    const details2=[...details]
    details2[2].name='Soorya'

    setdetails(details2)
    }}

    return (
    <div>
        {details.map((map)=>
        <ul>
            <li>{map.name} : {map.age}</li>
        </ul>
        
        )}
        <Button onClick={update}>Update</Button>
    </div>
  )
}

export default ArrayUpdation2