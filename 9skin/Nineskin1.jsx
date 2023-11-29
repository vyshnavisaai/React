import React, { useState } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './Nineskin1.css'
import { BiSearch } from 'react-icons/bi'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { PiHandbagSimple } from 'react-icons/pi'
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import Nineskin2 from './Nineskin2'
import Nineskin3 from './Nineskin3'

function Nineskin1() {
    const [val, setVal] = useState(false);
  return (
    <div className=''>
        <div className='sect1'>
        <Navbar expand="lg">
      <Container className='navbar'> 
        <Navbar.Brand href="#home"><img id='logo' src="9s1.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto">
            <Nav.Link className={val?'nav1d':'nav1d'} href="#home">HOME</Nav.Link>
            <Nav.Link className={val?'nav2d':'nav2'} href="#link">SHOP</Nav.Link>
            <Nav.Link className={val?'nav2d':'nav2'} href="#link">ABOUT</Nav.Link>
            <Nav.Link className={val?'nav2d':'nav2'} href="#link">CONTACT</Nav.Link>
            <Nav.Link className={val?'nav3d':'nav3'} href="#link"><BiSearch/></Nav.Link>
            <Nav.Link className={val?'nav4d':'nav4'} href="#link"><MdOutlinePersonOutline/></Nav.Link>
            <Nav.Link className={val?'nav4d':'nav4'} href="#link"><PiHandbagSimple/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        <Nineskin2 val={val} setVal={setVal}/>
        <Nineskin3 val={val} setVal={setVal}/>
    </div>

    
  )
}

export default Nineskin1