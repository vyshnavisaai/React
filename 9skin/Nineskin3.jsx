import React from 'react'
import './Nineskin2.css'
import { GrFacebookOption } from 'react-icons/gr'
import { FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

function Nineskin3({val,setVal}) {
  return (
    <div>
        <div className={val?'main2dark':"main2"} style={{display:'flex'}}>
            <div className={val?'footdark':'foot'}>
                <p>CONTACT</p>
                <p>India</p>
                <p>contact@9skin.in</p>
                <p>+91 7998643849</p>
            </div>
            <div className={val?'footdark':'foot'}>
                <p>PRODUCTS</p>
                <p>Rejuvalante</p>
                <p>Eternelle</p>
                <p>Illuminate</p>
                <p>Skintillate</p>
            </div>
            <div className={val?'footdark':'foot'}>
                <p>ABOUT US</p>
                <p>Our Story</p>
                <p>Mission & Vision</p>
                <p>Skincare Philosophy</p>
            </div>
            <div className={val?'footdark':'foot'}>
                <p><GrFacebookOption className='soc'/><FaTwitter className='soc'/><RiInstagramFill className='soc'/> </p>
                
            </div>
        </div>
    </div>
  )
}

export default Nineskin3