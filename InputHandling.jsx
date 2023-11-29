import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

function InputHandling() {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Age, setAge] = useState("")

    const changeName=(e)=>
    {
        setName(e.target.value)
        console.log(e);
    }
    const changeEmail=(e)=>
    {
        setEmail(e.target.value)
        console.log(e);
    }
    const changeAge=(e)=>
    {
        setAge(e.target.value)
        console.log(e);
        
    }


    const alertname=()=>
    {
        document.getElementById('display').innerHTML=`NAME : ${Name}  ,  Email : ${Email} , Age :${Age}`
        

    }

    
    
  return (
    <div id='display'>
        <label>NAME:</label>
        <input type='text' value={Name} onChange={changeName}/><br /><br />
        <label>Email:</label>
        <input type='email' value={Email} onChange={changeEmail}/>
        <br /><br />
        <label>Age:</label>
        <input type="number" value={Age} onChange={changeAge}/>
        <br /><br />



        <Button onClick={alertname}>Submit</Button>
    
    </div>
  )
}

export default InputHandling