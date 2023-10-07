import React from 'react'
import { Carousel } from 'react-bootstrap'

function Map4() {

    const offer=[
    {
        image:"https://images.unsplash.com/photo-1597633244018-0201d0158aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFnc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        cap:"LADIES BAG",
        off:"UPTO 80% OFF"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftzDpuhIR0zxipIC5fyRNd5Wkr5SLZngKdN8mJCoVa2X9cfRBFZ6Mw-JNGRiUxzRUI2w&usqp=CAU",
        cap:"LEATHER SHOES FOR MEN",
        off:"UPTO 40% OFF"
    },
    {
        image:"https://5.imimg.com/data5/SELLER/Default/2022/2/RV/KU/VL/118738989/poster-500x500.jpg",
        cap:"SALWAR SUITS",
        off:"UPTO 70% OFF"
    }
    ]
  return (
    <div>
        <Carousel>
            { offer.map((offers)=>
      <Carousel.Item>
        <img height={500} src={offers.image} alt="" />
        <Carousel.Caption>
          <h3 style={{color:'black'}}>{offers.cap}</h3>
          <p style={{color:'black'}}>{offers.off}</p>
        </Carousel.Caption>
      </Carousel.Item>
           ) }
    </Carousel>
    </div>
  )
}

export default Map4