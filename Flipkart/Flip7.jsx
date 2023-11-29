import React from 'react'

function Flip7() {
    const product2=[
        {
            img:'fl74.png',
            name:'Smart Watches'
        },
        {
            img:'fl73.png',
            name:'Jackets'
        },
        {
            img:'fl70.png',
            name:'Leather Footwears'
        },
        {
            img:'fl71.png',
            name:'Handbags'
        },
        {
            img:'fl72.png',
            name:'Home Lights'
        },
        {
            img:'fl75.png',
            name:'Refridgerator'
        }]

  return (
    <div id='new2' style={{backgroundColor:'#f0eded'}}>
        <div id='section3' style={{backgroundColor:'white'}}>
            <br />
        <h4 id='headingproduct'>Most Purchased</h4><br />
        <div style={{display:'flex'}}>
        <section id='productsection2'>
            
            {product2.map((pro)=>
            <div className='product'>
                <div id='body'>
                <picture>
                    <img id='proimage' height={150} width={150} src={pro.img} alt="" />
                </picture>
                <div className='details'>
                    <p id='pname'>{pro.name}</p>
                    <a href="" id='shopnow'>Shop Now</a>
                </div>
                </div>
            </div>
            )}
            
            
        </section>
        </div>
        </div>
    </div>
  )
}

export default Flip7