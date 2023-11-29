import React, { useState } from "react";
import { Button } from "react-bootstrap";

function InputHandlingTask() {
  const [Input, setInput] = useState({
    username: "",
    userabout: "",
  });

  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...Input, [name]: value });
  };

  const Submit = () => {
    document.getElementById("details").innerHTML = "Details";
    document.getElementById("name1").innerHTML = `Name: ${Input.username}`;
    document.getElementById("abt1").innerHTML = `Address: ${Input.userabout}`;
    
    // document.getElementById("letter").innerHTML = `Number of letter :${letter}`;
    // document.getElementById("word").innerHTML = `Number of words :${word}`;
  };
  const clear = (e) => {
    document.getElementById("text").value = "";
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...Input, [name]: value });
  };
  const letter = Input.userabout.length;
  const word = Input.userabout.split(" ").length;
  return (
    <div style={{margin:50}}>
        <h1>Enter the details</h1>
        <br />
        <label>Name : </label>
        <input
          name="username"
          value={Input.username}
          type="text"
          onChange={inputChange}
        />
        <br />
        <br />
        <label>About You : </label>
        <textarea
          id="text"
          name="userabout"
          rows="3"
          cols="30"
          onChange={inputChange}
        ></textarea>
        <p style={{fontSize:13}} id="letter">Number of letter :{letter} Number of words :{word}</p>
        <br /><br />
        <Button onClick={Submit}>Submit</Button> <br /> <br />
        <Button onClick={clear}>Clear</Button>

        <br />
        <br />
        
        <h2 id="details"></h2>
        <p id="name1"></p>
        <p id="abt1"></p>
      
    </div>
  );
}

export default InputHandlingTask;
