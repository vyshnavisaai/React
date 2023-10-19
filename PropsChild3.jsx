import React from 'react'

function PropsChild3({a}) {

    
  return (
    <div>
        <h5>Age : {a}</h5>
        <h5>Candidate is {a>18?'an Adult':'a Minor'}</h5>
    </div>
  )
}

export default PropsChild3