import React, { useContext, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEdit, AiFillPlusCircle, AiOutlineArrowRight, AiOutlineDelete } from 'react-icons/ai';
import { CRUDContext } from './CRUDTaskRoute';

function CRUDTaskDetails() {
  const [show, setShow] = useState(false);
  const [Persondetail, setPerson] = useContext(CRUDContext);
  const [deletingId, setDeletingId] = useState(null); // Initialize deletingId here
  const navigate = useNavigate();

  const nav = () => {
    navigate('/add');
  };

  const handleClose = () => {
    setShow(false);
    setDeletingId(null); // Reset deletingId when the modal is closed
  };

  const handleShow = (id) => {
    setShow(true);
    setDeletingId(id);
  };

  const deleting = () => {
    if (deletingId !== null) {
      const filterData = Persondetail.filter((item) => item.id !== deletingId);
      setPerson(filterData);
      setShow(false);
      setDeletingId(null); // Reset deletingId after deletion
    }
  };

  return (
    <div id='bodycrud'>
      <br /><br />
      <center>
        <div id='tablediv'>
          <br />
          <h2 id='headingcrud'>STUDENT DETAILS</h2>
          
          <Table id='table' bordered >
            <thead>
              <tr>
                <th id='th' style={{width:250}}>Name</th>
                <th id='th' style={{width:250}}>Age</th>
                <th id='th' style={{width:250}}>Email</th>
                <th id='th' colSpan={3} style={{width:50}}><center onClick={nav}>< AiFillPlusCircle id='icon1'/></center></th>
              </tr>
            </thead>
            <tbody>
              {Persondetail.map((map) => (
                <tr key={map.id}>
                  <td id='td'>{map.personname}</td>
                  <td id='td'>{map.personage}</td>
                  <td id='td'>{map.personemail}</td>
                  <td><Link></Link><AiOutlineArrowRight id='icon4' onClick={() => navigate(`/studentpage/${map.id}`)} /></td>
                  <td><AiFillEdit id='icon3' onClick={() => navigate(`/edit/${map.id}`)} /></td>
                  <td><AiOutlineDelete id='icon2' onClick={() => handleShow(map.id)} /></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br />

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body style={{ fontSize: 17 }}>Delete.?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                No
              </Button>
              <Button variant="primary" onClick={deleting}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal> 
        </div>
      </center>
    </div>
  );
}

export default CRUDTaskDetails;
