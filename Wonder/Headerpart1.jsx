import React from 'react'
import { Carousel, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './Wonders.css'


function Headerpart1() {
  return (
    <div >
      <center>
    <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand className='a' href="#home">Wonders of the World</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className='b'  style={{marginLeft:'200px'}} href="#home">Home</Nav.Link>
        
        
        <NavDropdown className='b'title="Wonders" id="basic-nav-dropdown">
          <NavDropdown.Item className='b' href="#action/3.1">Colosseum, Rome</NavDropdown.Item>
          <NavDropdown.Item className='b' href="#action/3.2">Chichen Itza, Mexico</NavDropdown.Item>
          <NavDropdown.Item className='b' href="#action/3.3">Machu Picchu, Peru</NavDropdown.Item>
          <NavDropdown.Item className='b' href="#action/3.3">Petra, Jordan</NavDropdown.Item>
          <NavDropdown.Item className='b' href="#action/3.3">Great Wall Of China</NavDropdown.Item>
          <NavDropdown.Item className='b' href="#action/3.3">Christ the Redeemer, Rio de Janeiro</NavDropdown.Item>
          <NavDropdown.Item className='b' href="#action/3.3">Taj Mahal</NavDropdown.Item>

        </NavDropdown>
        <Nav.Link className='b' href="#home">Tickets</Nav.Link>
        <Nav.Link className='b' href="#home">About Us</Nav.Link>
        <Nav.Link className='b' href="#home">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<hr />
</center>
<br /><br />
<center>
<Carousel>
<Carousel.Item>
<img src="3.webp" height={500} alt="" />
</Carousel.Item>
<Carousel.Item>
<img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/05/Colosseum-Rome.jpg" height={500} alt="" />      
</Carousel.Item>
<Carousel.Item>
    <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/04/Chichen-Itza_23rd-oct.jpg" height={500} alt="" />
</Carousel.Item>
<Carousel.Item>
    <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/05/MachuPicchu.jpg" height={500} alt="" />
</Carousel.Item>

<Carousel.Item>
    <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/05/GreatWallOfChina.jpg" height={500} alt="" />
</Carousel.Item>

<Carousel.Item>
    <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/05/ChristTheRedeemer.jpg" height={500} alt="" />
</Carousel.Item>

<Carousel.Item>
    <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/05/PetraJordan.jpg" height={500} alt="" />
</Carousel.Item>
</Carousel>
</center></div>
  )
}

export default Headerpart1