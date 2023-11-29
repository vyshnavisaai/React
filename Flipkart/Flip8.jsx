import React from 'react'
import './Flip8.css'
import { AiOutlineGift, AiOutlineShop } from 'react-icons/ai'
import { PiShootingStar } from 'react-icons/pi'
import { LiaCopyrightSolid } from 'react-icons/lia'
import { BiHelpCircle } from 'react-icons/bi'
function Flip8() {
  return (
    <div id='footerflip'>
    <div  style={{display:'flex'}}>
        <div className='footflip2'>
            <h4>ABOUT</h4>
            <p className='p'>Contact Us</p>
            <p className='p'>About Us</p>
            <p className='p'>Careers</p>
            <p className='p'>Flipkart Stories</p>
            <p className='p'>Press</p>
            <p className='p'>Flipkart Wholesale</p>
            <p className='p'>Clear Trip</p>
            <p className='p'>Corporate Information</p>
        </div>
        <div className='footflip2'>
            <h4>HELP</h4>
            <p className='p'>Payments</p>
            <p className='p'>Shipping</p>
            <p className='p'>Cancellation & Returns</p>
            <p className='p'>FAQ</p>
            <p className='p'>Report Infringement</p>
        </div>
        <div className='footflip2'>
            <h4>CONSUMER POLICY</h4>
            <p className='p'>Cancellation & Returns</p>
            <p className='p'>Terms Of Use</p>
            <p className='p'>Security</p>
            <p className='p'>Privacy</p>
            <p className='p'>Sitemap</p>
            <p className='p'>Grievance Redressal</p>
            <p className='p'>EPR Compliance</p>
        </div>
        <div className='footflip2'>
            <h4>SOCIAL</h4>
            <p className='p'>Facebook</p>
            <p className='p'>Twitter</p>
            <p className='p'>YouTube</p>
        </div>
        
        <div className='footflip2'>
            <h4>Mail Us</h4>
            <p className='p'>Flipkart Interner Private Limited</p>
            <p className='p' >Buildings Alyssa,Begonia &</p>
            <p className='p'>Clove Embassy Tech Village</p>
            <p className='p'>Outer Ring Road</p>
            <p className='p'>Bangaluru,560103</p>
            <p className='p'>Karnataka, India</p>
        </div>
        <div className='vertical'>

        </div>
        <div className='footflip2'>
            <h4>Registered Office Address</h4>
            <p className='p'>Flipkart Interner Private Limited</p>
            <p className='p'>Buildings Alyssa,Begonia &</p>
            <p className='p'>Clove Embassy Tech Village</p>
            <p className='p'>Outer Ring Road</p>
            <p className='p'>Bangaluru,560103</p>
            <p className='p'>Karnataka, India</p>
            <p className='p'>CIN :U51109KA2012PTC066107</p>
            <p className='p'>Telephone : <a id='number' href="">044-45614700</a></p>
        </div>
        </div>
        <div>
        <hr color='white' />
        <div id='footlastflip'>
        <div className='lastfoot'>
            <p className='p'><AiOutlineShop className='flogogo'/>Become a Seller</p>
        </div>
        <div className='lastfoot'>
            <p className='p'><PiShootingStar className='flogogo'/>Advertise</p>
        </div>
        <div className='lastfoot'>
            <p className='p'><AiOutlineGift className='flogogo'/>Gift Cards</p>
        </div>
        <div className='lastfoot'>
            <p className='p'><BiHelpCircle className='flogogo'/>Help Center</p>
        </div>
        <div className='lastfoot'>
            <p className='p'><LiaCopyrightSolid className='flogogo'/>2007-23 Flipkart.com</p>
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default Flip8