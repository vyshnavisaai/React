import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { HiCake } from "react-icons/hi";
import { GiCakeSlice } from "react-icons/gi";
import "./Cakes.css";
function Cakes1() {
  return (
    <div>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">
              <HiCake id="logo" />
            </Navbar.Brand>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="navlink" href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className="navlink" href="#action2">
                Shop
              </Nav.Link>
              <Nav.Link className="navlink" href="#action2">
                About Us
              </Nav.Link>
              <Nav.Link className="navlink" href="#action2">
                Contact Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="taste">Search</Button>
            </Form>
          </Container>
        </Navbar>
      </div>
      <div id="sec1">
        <div>
          <img src="cakebg.png" height={400} alt="" />
        </div>
        <div id="sec2">
          <h1 id="intro1">
            Baked With Love <GiCakeSlice />
          </h1>
          <p id="intro2">We offers you the best Cakes for you!</p>
          <Button className="taste">Grab It</Button>
        </div>
      </div>
    </div>
  );
}

export default Cakes1;
