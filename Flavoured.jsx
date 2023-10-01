import React from 'react'
import './Flavoured.css'

function Flavoured() {
  return (
    <div>
        <div id='body'>
            <div id='navv' >
                
                    <li id='logo'>Flavored <span  id='logoo'> ♨</span><img src="" alt="" /></li>
                    <li className='nav1'><a href="">Home</a></li>
                    <li className='nav'><a href="">Coffee Menu</a></li>
                    <li className='nav'><a href="">About Us</a></li>
                    <li className='nav'><a href="">Contact Us</a></li>
                    <li className='nav'><button id='cof'>Coffee Shop</button></li>
                     
            </div>
            <hr />
            <div style={{display:'flex',backgroundColor:'#D1C9BC'}}>
            <div >
                <p id='main'>Coffee <br />The Best For You</p>
                <button id='menu'>View Menu</button>
            </div>
            <div>
                <img  height={450} src="c1.png" alt="" />
            </div>
            </div>
            <div style={{display:'flex'}}>
                <div className='card'>
                    <center>
                    <img src="c2.png" height={130} alt="" />
                    <p style={{fontWeight:'bold'}}>Cappuccino</p>
                    <p>Coffee 50%,Milk 50%,280ml</p>
                    <button className='r'>$2.50</button><br />
                    <button className='buy'>BUY</button>
                    </center>
                </div>

                <div className='card'>
                    <center>
                    <img src="c1.png" height={130} alt="" />
                    <p style={{fontWeight:'bold'}}>Americano</p>
                    <p>100% Natural Arabica , 30ml cup</p>
                    <button className='r'>$2.50</button><br />
                    <button className='buy'>BUY</button>
                    </center>
                </div>
                <div className='para'>
                    <p style={{fontSize:'27px',fontWeight:'bold'}}>Exploring Coffee Classics: Cappuccino and Americano</p>
                    <p>Cappuccino, with its harmonious blend of espresso, steamed milk, and velvety foam, is a classic Italian indulgence. Its bold espresso base is complemented by the luxurious creaminess of milk, creating a perfect balance of flavors and textures. In contrast, the Americano offers simplicity with a strong espresso kick, diluted with hot water for a robust, unadulterated coffee experience. Each sip of these iconic beverages tells a tale of two distinct coffee worlds, both equally beloved by coffee enthusiasts worldwide.</p>
                    <button className='buy'>Learn More</button>
                </div>
            </div>
            <div style={{height:90}}></div>
            <div style={{display:'flex'}}>
                <div className='para'>
                    <p>Nestled in the heart of the city, our cozy coffee shop is a warm and inviting haven for coffee lovers and seekers of comfort alike. With the aromatic embrace of freshly brewed coffee wafting through the air, our friendly baristas are ready to craft your perfect cup of java, whether it's a meticulously prepared espresso shot or a frothy cappuccino. As you settle into one of our comfy chairs, the soft hum of conversations and the gentle buzz of coffee machines create a soothing backdrop, making it the ideal spot to savor a moment of tranquility or catch up with friends. Join us in this welcoming oasis where every cup is a crafted masterpiece and every visit feels like coming home.</p>
                </div>
                <div>
                    <img id='c3' src="c3.png" alt="" />
                </div>
            </div>
            <div style={{display:'flex'}}>
            <div style={{width:'500PX',marginLeft:'40px'}}><p style={{fontSize:'40px'}}>Want to Reserve a Table : </p></div>
            <div><button id='contact'>Contact Now</button></div>
            </div>
            <hr />
            <div>
                <div style={{display:'flex'}}>
                <div className=''>
                <li id='logo'>Flavored <span  id='logoo'> ♨</span><img src="" alt="" /></li>
                </div>
                <div className='foot'>
                    <h4>Our Services</h4>
                    <p>Pricing</p>
                    <p>Tracking</p>
                    <p>Report a bug</p>
                    <p>Terms of Srevices</p>
                </div>
                <div className='foot'>
                    <h4>Our Braches</h4>
                    <p>Kochi</p>
                    <p>Calicut</p>
                    <p>Coimbatore</p>
                    <p>Bangalore</p>
                </div>
                <div className='foot'>
                    <h4>Our Address</h4>
                    <p>Meridian Thekkekara Chambers </p>
                    <p>Kusumagiri PO</p>
                    <p>Kochi</p>
                    <p>682030</p>
                </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Flavoured