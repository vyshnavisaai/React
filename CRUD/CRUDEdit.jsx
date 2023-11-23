import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { CRUDContext } from "./CRUDTaskRoute";
import './CRUDStyle.css'


function CRUDEdit() {
  const [Persondetail, setPerson] = useContext(CRUDContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [editedData, setEditedData] = useState({
    personname: "",
    personage: "",
    personemail: "",
    persongender:"",
    attendance:""
  });

  useEffect(() => {
    const personToEdit = Persondetail.find((person) => person.id === id);

    if (personToEdit) {
      setEditedData({
        personname: personToEdit.personname,
        personage: personToEdit.personage,
        personemail: personToEdit.personemail,
        persongender: personToEdit.persongender,
        attendance: personToEdit.attendance,

      });
    }
  }, [Persondetail, id]);

  const handleInputChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    // Updating
    const updatedData = Persondetail.map((person) =>
      person.id === id ? { ...person, ...editedData } : person
    );

    setPerson(updatedData);
    navigate("/");
  };

  return (
    <div id="bodycrud">
      <br />
      <center>
        <table id='tablediv'>
          <center>
      <h2 id="headingcrud">Update Data</h2>
      <tr>
      <td><label>Name:</label></td>
      <td><input
        type="text"
        name="personname"
        value={editedData.personname}
        onChange={handleInputChange}
      /></td>
      </tr>
      <tr>
      <td><label>Gender:</label></td>
      <td><input
        type="text"
        name="persongender"
        value={editedData.persongender}
        onChange={handleInputChange}
      /></td>
      </tr>
      <tr>
      <td><label>Age:</label></td>
      <td><input
        type="number"
        name="personage"
        value={editedData.personage}
        onChange={handleInputChange}
      /></td>
      </tr>
      <tr>
      <td><label>Email:</label></td>
      <td><input
        type="email"
        name="personemail"
        value={editedData.personemail}
        onChange={handleInputChange}
      /></td>
      </tr>
      <tr>
      <td><label>Attendance:</label></td>
      <td><input
        type="number"
        name="attendance"
        value={editedData.attendance}
        onChange={handleInputChange}
      /></td>
      </tr>
      
      <br />
      <Button id="back" onClick={handleUpdate}>Update</Button><br /><br />
      </center>
      </table>
      </center>
    </div>
  );
}

export default CRUDEdit;
