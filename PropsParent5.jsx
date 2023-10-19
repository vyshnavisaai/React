import React from 'react'
import PropsChild5 from './PropsChild5'

function PropsParent5() {
    const arr=[{a:3,b:7}]
  return (
    <div>
        <PropsChild5 arr={arr}/>
    </div>
  )
}

export default PropsParent5