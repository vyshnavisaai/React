import React from "react";
import "./Flip1.css";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { AiOutlineShop, AiOutlineShoppingCart } from "react-icons/ai";
import { GoPerson } from 'react-icons/go'
import { SlOptionsVertical } from 'react-icons/sl'

function Flip1() {
  return (
    <div style={{backgroundColor:'#f0eded'}}>
      <div>
        <Navbar  expand="lg" className="bg-body-tertiary">
          <Container id="fnav">
            <Navbar.Brand href="#home">
              <img id="flogo" src="fliplogo.png" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search for Products,Brands and More"
                  className="me-2"
                  aria-label="Search"
                  id="search"
                />
              </Form>
              <div id="navselect">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <Button className="navitem">
                    <AiOutlineShop className="navicon" />
                    Become a Seller
                  </Button>
                </Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <GoPerson className="navicon"/>Sign In
                  </Dropdown.Toggle>

                  <Dropdown.Menu >
                    <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Flipkart Plus Zone
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Orders</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Whishlist</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Rewards</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Gift Cards</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link href="#link">
                  <Button className="navitem">
                    <AiOutlineShoppingCart className="navicon" />
                    Cart
                  </Button>
                </Nav.Link>
                <Dropdown className="a">
                  <Dropdown  id="dropdown-basic">
                    <SlOptionsVertical className="navicon2"/>
                  </Dropdown>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Flip1;
