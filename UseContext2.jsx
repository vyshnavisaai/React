import React, { useContext } from "react";
import { newcontext } from "./UseContent";
import { Button } from "react-bootstrap";

function UseContext2() {
  const display = useContext(newcontext);
  const { details, setdetails } = display;
  const change = () => {
        const details2 = details.map((map)=>{
      if(map.name ==='Vyshnavi'){
         return{...map,age:22}
      }
      return map
  })
  setdetails(details2)
    }
  ;
  return (
    <div>
      <table>
        <tr>
          <th style={{ width: 100 }}>Name</th>
          <th style={{ width: 100 }}>Age</th>
        </tr>
        {details.map((map) => (
          <>
            <tr>
              <td>{map.name}</td>
              <td>{map.age}</td>
            </tr>
          </>
        ))}
      </table>
      <Button onClick={change}>Click</Button>
    </div>
  );
}

export default UseContext2;
