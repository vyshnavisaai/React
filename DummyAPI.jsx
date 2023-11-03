import axios from 'axios'
import React from 'react'

function DummyAPI() {
    axios.get('https://dummyjson.com/products').then((display)=>{
        console.log(display)
    })
  return (
    <div>DummyAPI</div>
  )
}

export default DummyAPI