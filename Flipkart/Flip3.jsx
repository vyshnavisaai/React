import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Flip3.css'

function Flip3() {
    const carousel=[
        {
            cimg:'fl11.webp'
        },
        {
            cimg:'fl12.webp'
        },
        {
            cimg:'fl13.webp'
        },
        {
            cimg:'fl14.webp'
        }
    ]
  return (
    <div>
        <div style={{backgroundColor:'#F8F9FA'}} id='cdiv'>
        <Carousel id='fcarousel'>
        {carousel.map((car)=>
      <Carousel.Item>
        
        <img id='carouselimage' src={car.cimg} alt="" />
        
      </Carousel.Item>
      )}
    </Carousel>
    </div>
    </div>
  )
}

export default Flip3