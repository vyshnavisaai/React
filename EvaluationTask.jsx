import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './EvaluationTask.css'

function EvaluationTask() {
  return (
    <div id='body'>
        <div>
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand id='navbrand' href="#home">Booldey.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id='navlink' className="me-auto"> 
            <Nav.Link className='navlink1' href="#home">Home</Nav.Link>
            <Nav.Link className='navlink1' href="#link">About Us</Nav.Link>
            <Nav.Link className='navlink1' href="#link">Services</Nav.Link>
            <Nav.Link className='navlink1' href="#link">Portfolio</Nav.Link>
            <Nav.Link className='navlink1' href="#link">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        <div id='main'>
            <center>
            <h1>Bootstrap 4 Navbar</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Integer net elit ex.Etiam elementum iectus et tempor <br/>molestine</p>
            <Button id='buttontask'>Learn More</Button>
            </center>
        </div>
    </div>
  )
}

export default EvaluationTask