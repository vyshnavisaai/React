import React from 'react'
import { TbTruckDelivery, TbTruckReturn, TbWorldPin } from 'react-icons/tb'
import { LiaCertificateSolid } from 'react-icons/lia'
import { PiClockCountdownDuotone, PiInstagramLogoFill } from 'react-icons/pi'
import { MdOutlinePayment } from 'react-icons/md'
import { FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'
import { AiFillFacebook, AiOutlineFieldTime } from 'react-icons/ai'
import { RiSecurePaymentFill } from 'react-icons/ri'
import './Enchanteur4.css'

function Enchanteur4() {
  return (
    <div>
        <div id='feat'>
            <div className='div'>
                <p className='icon'><TbWorldPin/></p>
                <p className='ab'>loved by women in</p>
                <p className='cd'>40+ countries</p>
            </div>
            <div className='div'>
                <p className='icon'><LiaCertificateSolid/></p>
                <p className='ab'>original wipro unza</p>
                <p className='cd'>imported products</p>
            </div>
            <div className='div'>
                <p className='icon'><PiClockCountdownDuotone/></p>
                <p className='ab'>dispatch within</p>
                <p className='cd'>24 hrs</p>
            </div>
            <div className='div'>
                <p className='icon'><MdOutlinePayment/></p>
                <p className='ab'>payments that are</p>
                <p className='cd'>safe & secure</p>
            </div>
        </div>
        <div id='other'>
            <div className='div2'>
                <p className='abcd'>Shop</p>
                <p className='abc'>By category</p>
                <p className='abc'>By fragrance</p>
                <p className='abc'>By collection</p>
                
            </div>
            <div className='div2'>
                <p className='abcd'>Company</p>
                <p className='abc'> About us</p>
                <p className='abc'>Self care</p>
                <p className='abc'>Contact</p>
            </div>
            <div className='div2'>
            <p className='abcd'>Costumer Care</p>
                <p className='abc'>Return Policy</p>
                <p className='abc'>Payment methods</p>
                <p className='abc'>Shipping and delivery policy</p>
            </div>
            <div className='div2'>
            <p className='abcd'> Reach out to us</p>
                <p className='abc'>Support @enchanteur.in</p>
                <p className='abc'>Follow</p>
                <p className='abcde'><PiInstagramLogoFill/><FaTwitterSquare/><AiFillFacebook/><FaYoutubeSquare/></p>
            </div>
        </div>
        <div style={{display:'flex'}}>
            <div className='div3'>
            <p className='i1'><TbTruckDelivery/></p>
            <p className='i2'>FREE DELIVERY</p>
            </div>
            <div className='div3'>
            <p className='i1'><TbTruckReturn/></p>
            <p className='i2'>EASY RETURNS</p>
            </div>
            <div className='div3'>
            <p className='i1'><RiSecurePaymentFill/></p>
            <p className='i2'>SECURE PAYMENT</p>
            </div>
            <div className='div3'>
            <p className='i1'><AiOutlineFieldTime/></p>
            <p className='i2'>DISPATCH WITHIN 24HRS</p>
            </div>


        </div>
        
    </div>
  )
}

export default Enchanteur4