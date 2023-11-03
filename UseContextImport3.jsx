import React, { useContext } from 'react'
import { newcontext2 } from './UseContext3'
import { Button } from 'react-bootstrap';

function UseContextImport3() {
    const [data,setData] = useContext(newcontext2)
    console.log(data);

    const change=()=>
    {
        const details2=data.map((map)=>{
        if(map.flower=='Rose'){
            return {...map,colour:'red'}
        }
        return map
    })
    setData(details2)
}
    
  return (
    <div>
        {data.map((obj)=>
            <ul>
                <li>{obj.flower}</li>
                <li>{obj.colour}</li>
            </ul>
        )}
        <Button onClick={change}>change</Button>
    </div>
  )
}

export default UseContextImport3