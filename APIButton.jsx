import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function APIButton() {
    const [data, setdata] = useState([])

    const getdata=async()=>{
        let store=await axios.get("https://dummyjson.com/products")
        console.log(store.data)
        setdata(store.data.products)
    }
  return (
    <div>
        <h1>API</h1>
        <br />
        <Button onClick={getdata}> Get data</Button>
        {data.map((map)=>
        <>
        <h5>Brand:{map.brand}</h5>
        <p>Price:{map.price}</p>
        </>
)}
    </div>
    
  )
}

export default APIButton