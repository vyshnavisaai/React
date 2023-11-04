import React, { useContext } from 'react'
import { newcontexttask } from './TaskRouting';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Task6() {
    const [Fruit,setFruit] = useContext(newcontexttask)
    console.log(Fruit);
    
  return (
    <div>
        <center>
        <h3 id='li2'>List Of Fruits</h3>
        {Fruit.map((map)=>
        
            <Link id='li' to={`/detail/${map.id}`}><li>{map.fruit}</li></Link>
        )}
        </center>
    </div>
  )
}

export default Task6