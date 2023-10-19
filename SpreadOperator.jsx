import React from 'react'

function SpreadOperator() {
    const arr1=[1,2,3]
    const array=[...arr1]
    const arr2=[4,5,6]
    const array2=[...arr1,...arr2]
    console.log(array)
    console.log(array2)

    const obj1={a:1,b:2}
    const object={...obj1}
    const obj2={c:4,d:5}
    const object2={...obj1,...obj2}
    console.log(object)
    console.log(object2)
  return (
    <div>
        <p></p>
    </div>
  )
}

export default SpreadOperator