import React from 'react'
import { Carousel } from 'react-bootstrap'

function Caroselsample() {
  return (
    <div><Carousel>
    <Carousel.Item>
      <img src="c3.png" height={500} alt="" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src="c1.png" height={500} alt="" />      
    <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img src="c2.png" height={500} alt="" />
          <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}

export default Caroselsample