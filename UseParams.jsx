import React from 'react'
import { useParams } from 'react-router-dom'

const UseParams = () => {
    const {name}=useParams()
  return (
    <div>
        <h1>Details</h1>
        <p>Name : {name}</p>
    </div>
  )
}

export default UseParams