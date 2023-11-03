import axios from 'axios'
import React, { useEffect, useState } from 'react'

function APIuseEffect() {
    const [data, setdata] = useState([])

    useEffect(() => {
      getdata()
    }, [])
    
    const getdata=async()=>{
        let product=await axios.get("https://dummyjson.com/products")
        console.log(product.data);
        setdata(product.data.products)
    }
  return (
    <div>
        {data.map((map)=>
        <>
        <h2>Brand:{map.brand}</h2>
        <h3>Category:{map.category}</h3>
        <h5>price:{map.price}</h5>
        <h6>Discount:{map.discountPercentage}%</h6>
        </>)}
    </div>
  )
}

export default APIuseEffect