import React from 'react'

function Map() {

    const array=[{name:"Sai",age:23,Roll:2},{name:"Vyshnavi",age:22,Roll:3}]
    
    
  return (
    <div>
        {array.map((demo)=>
        <>
        <h1>{demo.name} : {demo.age}</h1>
        <p>{demo.Roll}</p>
        </>
        )}

    </div>
  )
}

export default Map