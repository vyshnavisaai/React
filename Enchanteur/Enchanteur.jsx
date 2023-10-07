import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './Enchanteur.css'
import { FaRegHeart } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'


function Enchanteur() {
  return (
    <div>

      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img id='logo' src="elogo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="fragrance" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="collection" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="combo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='navlink' href="#home">selfcare</Nav.Link>
            <Nav.Link className='navlink' href="#link"><FaRegHeart id='like'/> wishlist</Nav.Link>
            <div id='icons' >
            <Nav.Link className='navlink2' href="#home"><CgProfile/></Nav.Link>
            <Nav.Link className='navlink2' href="#home"><AiOutlineShoppingCart/></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <center>
    <input type="search" id='search' placeholder='What are you looking for?' /></center>
    </div>
  )
}

export default Enchanteur