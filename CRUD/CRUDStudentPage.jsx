import React, { useContext } from 'react'
import './CRUDStyle.css'
import { CRUDContext } from './CRUDTaskRoute'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

function CRUDStudentPage() {
    const [Persondetail, setperson]=useContext(CRUDContext)
    // console.log(Persondetail);
    const navigate=useNavigate()
    const {id}=useParams()
    console.log(id)
    // const id2= parseInt(id)
    const studentdetail = Persondetail.find(item=>item.id === id)
    console.log(studentdetail.persongender);

    
  return (
    <div id='bodycrud'>
        <br /><br /><br />
        <center>
        <div id='tablediv'>
        <h2 id='headingcrud'>STUDENT DETAILS</h2>
            <br />
            <table  >
            <tr >
                    <td style={{width:100}}>Id :</td>
                    <td style={{width:100}}>{studentdetail.id}</td>  
                </tr>
                <tr >
                    <td >Name :</td>
                    <td >{studentdetail.personname}</td>  
                </tr>
                <tr >
                    <td >Gender :</td>
                    <td >{studentdetail.persongender}</td>  
                </tr>
                <tr>
                    <td >Age :</td>
                    <td>{studentdetail.personage}</td>  
                </tr>
                <tr >
                    <td >Attendace :</td>
                    <td >{studentdetail.attendance}%</td>  
                </tr>
                <tr>
                    <td>Email :</td>
                    <td>{studentdetail.personemail}</td>  
                </tr>
            </table>
            <br />
            <Button id='back' onClick={()=>navigate(-1)}>Back</Button><br /><br />
        </div>
        </center>
    </div>
  )
}

export default CRUDStudentPage