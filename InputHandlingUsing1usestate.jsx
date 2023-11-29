import React, { useState } from "react";
import { Button } from "react-bootstrap";

function InputHandlingUsing1usestate() {
  const [Input, setInput] = useState({
    username: "",
    usermail: "",
    userage: "",
  });

  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...Input, [name]: value });
  };

  const inputAlert = () => {
    alert(
      `Name : ${Input.username} \n Age :${Input.userage} \n Email : ${Input.usermail}`
    );
  };
  return (
    <div>
      <label>NAME:</label>
      <input
        type="text"
        value={Input.username}
        name="username"
        onChange={inputHandle}
      />
      <br />
      <br />
      <label>Email:</label>
      <input
        type="email"
        value={Input.usermail}
        name="usermail"
        onChange={inputHandle}
      />
      <br />
      <br />
      <label>Age:</label>
      <input
        type="number"
        value={Input.userage}
        name="userage"
        onChange={inputHandle}
      />
      <br />
      <br />
      <Button onClick={inputAlert}>Submit</Button>
    </div>
  );
}

export default InputHandlingUsing1usestate;
