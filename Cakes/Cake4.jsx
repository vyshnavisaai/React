import React from "react";
import { HiCake } from "react-icons/hi";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./Cakes.css";

function Cake4() {
  return (
    <div>
      <center>
        <h1>
          <HiCake id="logo2" />
        </h1>
        <h3 id="head3">Follow Us</h3>
        <a href="">
          <FaInstagramSquare className="sm" />
        </a>
        <a href="">
          <FaTwitterSquare className="sm" />
        </a>
        <a href="">
          <FaFacebookSquare className="sm" />
        </a>
      </center>
      <br />
    </div>
  );
}

export default Cake4;
