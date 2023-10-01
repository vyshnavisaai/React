import React from 'react'

function Internalcss() {

    const heading={
        color:'red',
        backgroundColor:'yellow'
        
    }
    const para={
        color:'yellow',
        backgroundColor:'red'
    }
  return (
    <div>
        <h3 style={heading}>Styling</h3>
        <p style={para}>Internal Styling</p>
    </div>
  )
}

export default Internalcss