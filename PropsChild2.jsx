import React from 'react'

function PropsChild2({obj,arr}) {
  return (
    <div>
        <h4>Name : {obj.name}</h4>
        <p>Place : {obj.place}</p>

        {arr.map((array)=>
        <>
        <p>Age : {array.age}</p>
        <p>Mark : {array.mark}</p>
        </>
        )}
    </div>
  )
}

export default PropsChild2