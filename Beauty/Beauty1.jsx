import React from 'react'
import './Beauty.css'

function Beauty1() {
  return (
    <div>
        <div className='bodyy'>
          
        <div className='nav'>
            <li className='list1'>HOME</li>
            <li className='list'>SHOP</li>
            <li className='list'>PRODUCTIONS</li>
            <li className='list2'> ❀ BEAUTY ❀ </li>
            <li className='list'>ABOUT US</li>
            <li className='list'>BLOG</li>
            <li className='list'>CONTACT US</li>  
        </div>
        <div className='intro' style={{display:'flex'}}>
        <img src="b11.png" alt="" height={530} id='imgg'/>
        <div>
        <center>
        <p className='a1'>Natural Cosmetics</p>
        <h1 className='b1' >Hi! It's <span className='b2'>beautiful</span> <br />For you</h1>
        <button className='but1'>Explore Now ➮</button>
        <div>
          
        </div>
        </center>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Beauty1