import React from 'react'
import PropsChild2 from './PropsChild2'

function PropsParent2() {
    const obj={name:'Vyshnavi',place:'Vatakara'}
    const arr=[{age:23,mark:56}]
  return (
    <div>
        <PropsChild2 obj={obj} arr={arr}/>
    </div>
  )
}

export default PropsParent2