import React from 'react'
import './Nykaa.css'

function Nykaa() {
  return (
    <div>
        <div id='nav'>
        <ol>
           <li> <img height={35} src="logo.png" alt="" /></li>
           <li><a href="">CATEGORIES</a></li>
           <li><a href="">BRANDS</a></li>
           <li><a href="">NYKAA FASHION</a></li>
           <li><a href="">BEAUTY ADVICE</a></li>
           <li><input id='search' type="search" placeholder='       Search on Nykaa' /></li>
           <li><button id='signin'>Sign In</button></li>
           <li><a href=""><img id='bag' height={30} width={30} src="bag.png" alt="" /></a></li>
        </ol>
        </div>
        <hr />
        <div id='division'>
            <br />
            <hr />
        </div>
        <div>
            <a href=""><img className='a' src="111.jpeg" alt="" /></a>
            <a href=""><img className='a' src="333.jpeg" alt="" /></a>
            <a href=""><img className='a' src="222.jpeg" alt="" /></a>
            <a href=""><img className='a' src="444.jpeg" alt="" /></a>
        </div>
        <br />
        <hr />
        <br />
        <div className='bg'>
          <br /><br />
            <a href=""><img id='carosel'  src="555.jpg" alt="" /></a>        
            <a href=""><img id='carosel'  src="666.jpg" alt="" /></a>  
                                
        <br /><br />
        </div>
        <div className='bg2'>
            <hr />
            <p style={{marginLeft:'10px'}} className='foot'>EXPERIENCE THE NYKAA MOBILE APP</p>
            <div id='appp'>
              <center>
            <img className='app' height={35} src="app1.png" alt="" /></center>
            <img className='app' height={35} src="app2.png" alt="" />
            </div>
            <br />

            <div id='f'>
            <div id='foot2'>
              <br />
              <img id='nyk' src="logonyk.png" alt="" />
              <p className='f1'>Who are we?</p>
              <p className='f1'>Career</p>
              <p className='f1'>Authencity</p>
              <p className='f1'>Press</p>
              <p className='f1'>Testimonials</p>
              <p className='f1'>Nykaa CSR</p>
              <br />
            </div>

            <div id='foot2'>
              <br />
              <p className='f11'>Help</p>
              <p className='f1'>Contact Us</p>
              <p className='f1'>Frequently asked questions</p>
              <p className='f1'>Store locator</p>
              <p className='f1'>Cancellation and Return</p>
              <p className='f1'>Shipping & Delivery</p>
              <br />
            </div>

            <div id='foot2'>
              <br />
              <p className='f11'>Quick Links</p>
              <p className='f1'>Offer Zone</p>
              <p className='f1'>New Launches</p>
              <p className='f1'>Nykaa Man</p>
              <p className='f1'>Nykaa Fashion</p>
              <p className='f1'>Nykaa Pro</p>
              <br />
            </div>

            <div id='foot2'>
              <br />
              <p className='f11'>Top Categories</p>
              <p className='f1'>Make Up</p>
              <p className='f1'>Skin</p>
              <p className='f1'>Hair</p>
              <p className='f1'>Natural</p>
              <p className='f1'>Mom and Baby</p>
              <br />
            </div>
            </div>
        </div>
        <div id='last'>
          <center>
          <p id='social'>Show us ♥ some love on social media</p>
          <img height={60} src="sm.png" alt="" />
          </center>
        </div>

        <div id='last'>

        </div>
    </div>
  )
}

export default Nykaa