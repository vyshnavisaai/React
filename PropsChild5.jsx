import React from 'react'

function PropsChild5(props) {
    const arr=props.arr;
    console.log(arr);
  return (
    <div>
        {arr.map((map)=>
        <>
            <p>a:{map.a}</p>
            <p>b:{map.b}</p>
            </>
        )}
    </div>
  )
}

export default PropsChild5