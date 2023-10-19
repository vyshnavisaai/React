import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./DarkAndLightMode2.css";
import { GiNightSleep } from 'react-icons/gi'
import { BsSunFill } from 'react-icons/bs'

function DarkAndLightMode2() {
  const [val, setVal] = useState(false);
  return (
    <div className={val ? "black" : "white"}>
      <center>
        <h2>{val ? "DARK MODE" : "LIGHT MODE"}</h2>
        <Button
          className={val ? "black1" : "white1"}
          onClick={() => setVal(!val)}
        >
          {val ? <BsSunFill/> : <GiNightSleep/>}
        </Button>
        
      </center>
    </div>
  );
}

export default DarkAndLightMode2;
