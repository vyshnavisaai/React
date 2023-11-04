import React from "react";
import { Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Task.css'

function Task2() {
  return (
    <div>
        <center>
        <h1>FRUITS</h1>
      <Nav id="nav">
      <Nav.Item>
          <Nav.Link>
            <Link className="link" to={"/list"}>List</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="link" to={"/display"}>Display</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="link" to={"/card"}>Card</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="link"  to={"/table"}>Table</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Image src="https://t4.ftcdn.net/jpg/05/57/32/21/360_F_557322170_EI9CC6cjIOpyHAXFrfm9W2CoHO7LAN62.jpg"/>     
      </center>
    </div>
  );
}

export default Task2;
