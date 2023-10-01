import React from 'react'
import { Carousel } from 'react-bootstrap'

function Beauty2() {
  return (
    <div className='bodyy1'>
        <hr />
    <center>
        <br />
        <br />   
    <Carousel fade>
      <Carousel.Item>
        <img className='carr' src="car1.png" height={500} alt="" />
      </Carousel.Item>
      <Carousel.Item>
          <img className='carr' src="car2.png" height={500} alt="" />                 
      </Carousel.Item>
      <Carousel.Item>
        <img className='carr' src="car3.png" height={500} alt="" />
      </Carousel.Item>
    </Carousel>
    </center>
    </div>
  )
}

export default Beauty2