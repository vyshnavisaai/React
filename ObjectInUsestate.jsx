import React, { useState } from 'react'

function ObjectInUsestate() {
    const flower={name:'Vyshnavi',Age : 23}
    const [first, setfirst] = useState(flower)
  return (
    <div>
        <h1>{first.name}</h1>
        <p>{first.Age}</p>
    </div>
  )
}

export default ObjectInUsestate