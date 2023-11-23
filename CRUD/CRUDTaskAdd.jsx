import React, { useContext, useState } from "react";
// import { CRUDContext } from "./CRUD/CRUDTaskRoute";
import { Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import "./CRUDStyle.css";
import { CRUDContext } from "./CRUDTaskRoute";

function CRUDTaskAdd() {
  const [Persondetail, setperson] = useContext(CRUDContext);
  const [Persondetails, setfirst] = useState({
    personname: "",
    personage: "",
    personemail: "",
  });

  const navigate = useNavigate();
  const personCreate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfirst({ ...Persondetails, [name]: value });
    console.log(Persondetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const New=[...Persondetail,Persondetails]
    setperson(New)
    navigate("/");
  };
  return (
    <div id='bodycrud'>
      <br /><br />
      <center>
      <div id="addtable">
        <br />
      <h2 id='headingcrud'>ADD NEW STUDENT</h2>
      <br />
        <table>
        <tr>
            <td>
              <label id="label">Id :</label>
            </td>
            <td>
              
              <input
                type="text"
                name="id"
                value={Persondetail.id}
                onChange={personCreate}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label id="label">Name :</label>
            </td>
            <td>
              
              <input
                type="text"
                name="personname"
                value={Persondetail.personname}
                onChange={personCreate}
              />
            </td>
          </tr>
          <tr>
            <td><label id="label">Age : </label></td>
            <td><input
          type="number"
          name="personage"
          value={Persondetail.personage}
          onChange={personCreate}
        /></td>
          </tr>
          <tr>
            <td>
              <label id="label">Gender :</label>
            </td>
            <td>
              
              <input
                type="text"
                name="persongender"
                value={Persondetail.persongender}
                onChange={personCreate}
              />
            </td>
          </tr>
          <tr>
            <td><label id="label">Email : </label></td>
            <td><input
          type="email"
          name="personemail"
          value={Persondetail.personemail}
          onChange={personCreate}
        /></td>
          </tr>
          <tr>
            <td><label id="label">Attendace : </label></td>
            <td><input
          type="number"
          name="attendance"
          value={Persondetail.attendance}
          onChange={personCreate}
        /></td>
          </tr>
        </table><br />
        <Button id="save" onClick={(e) => handleSubmit(e)} type="submit">
          SAVE 
        </Button>
        <br /><br />
      </div>
      </center>
    </div>
  );
}

export default CRUDTaskAdd;
