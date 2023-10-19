import React from 'react'
import PropsChild3 from './PropsChild3'

function PropsParent3() {
    let a=2
  return (
    <div>
        <PropsChild3 a={a}/>
    </div>
  )
}

export default PropsParent3