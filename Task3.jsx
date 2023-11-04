import React, { useContext } from 'react'
import { newcontexttask } from './TaskRouting';
import './Task.css'
import { Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Task3() {
    const [Fruit,setFruit] = useContext(newcontexttask)
    console.log(Fruit);
    const nav=useNavigate()
    const back=()=>{
        nav(-1)
    }
  return (
    <div id='body'>
      <center>
      <h1 style={{fontSize:50}}>Fruits</h1>
        <div id='section1'>          
        {Fruit.map((map1)=>{
            return(
            <>
            <hr />
            <h1>{map1.fruit}</h1>
            <Image src={map1.Image} width={350} height={200} />
            <p>{map1.def}</p>
            <hr style={{color:'red'}}/>
            </>
        )
        }
        )}
        </div>
        <Button id='button' onClick={back}>Back</Button>
        </center>
    </div>
  )
}

export default Task3