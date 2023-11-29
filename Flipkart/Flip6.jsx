import React from 'react'
import './Flip6.css'

function Flip6() {
    const product4=[
        {
            img:'fl49.png',
            name:'Men Footwear'
        },
        {
            img:'fl50.png',
            name:'Women Footwear'
        }]
        const product5=[
        {
            img:'fl62.png',
            name:'Women Kurtas'
        },
        {
            img:'fl52.png',
            name:'Handbags'
        }]
  return (
    <div id='new2' style={{backgroundColor:'#f0eded'}}>
        <div id='section4' style={{backgroundColor:'white'}}>
        <h4 id='producthead'>Best of Electronics </h4><br />
        <div style={{display:'flex'}}>
        <section id='productsection1'>
            
            {product4.map((pro)=>
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

        <div style={{display:'flex'}}>
        <section id='productsection1'>
            
            {product5.map((pro)=>
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
        <div>
            <br />
            <div id='new'>
                <img height={600} width={700} src="https://www.91-cdn.com/hub/wp-content/uploads/2023/08/unnamed-3.png" alt="" />
            </div>
        </div>
        <br />
    </div>
  )
}

export default Flip6