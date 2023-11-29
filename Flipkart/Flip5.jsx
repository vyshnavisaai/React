import React from 'react'
import './Flip5.css'

function Flip5() {
    const product=[
        {
            img:'fl22.png',
            name:'Smart Phones'
        },
        {
            img:'fl23.png',
            name:'Pendrives'
        },
        {
            img:'fl24.png',
            name:'Speakers'
        },
        {
            img:'fl25.png',
            name:'Projectors'
        },
        {
            img:'fl26.png',
            name:'Keyboards'
        },
        {
            img:'fl27.png',
            name:'Smart TV'
        },
        {
            img:'fl28.png',
            name:'Trimmers'
        },
        {
            img:'fl29.png',
            name:'Head Phones'
        }
    ]
    const product2=[
        {
            img:'fl60.png',
            name:'Kettlea'
        },
        {
            img:'fl53.png',
            name:'Smart Phones'
        },
        {
            img:'fl54.png',
            name:'Head Phones'
        },
        {
            img:'fl56.png',
            name:'Blender'
        },
        {
            img:'fl58.png',
            name:'Oven'
        },
        {
            img:'fl59.png',
            name:'Toaster'
        },

    ]
    const product3=[
        {
            img:'fl49.png',
            name:'Men Footwear'
        },
        {
            img:'fl50.png',
            name:'Women Footwear'
        },
        {
            img:'fl62.png',
            name:'Women Kurtas'
        },
        {
            img:'fl52.png',
            name:'Handbags'
        },
        {
            img:'fl65.png',
            name:'Women Tshirts'
        },
        {
            img:'fl64.png',
            name:'Men Shirts'
        },

    ]
  return (
    <div style={{backgroundColor:'#f0eded'}}>
        <br />
        <div id='section3' style={{backgroundColor:'white'}}>
            <br />
        <h4 id='producthead'>Best of Electronics </h4><br />
        <div style={{display:'flex'}}>
        <section id='productsection1'>
            
            {product.map((pro)=>
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
        <img src="fl30.jpg" id='poster' alt="" />
        </div>
        </div>

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

        <div id='section3' style={{backgroundColor:'white'}}>
            <br />
        <h4 id='headingproduct'>Most Stylish</h4><br />
        <div style={{display:'flex'}}>
        <section id='productsection2'>
            
            {product3.map((pro)=>
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
        <br />
    </div>
  )
}

export default Flip5