import React from 'react'
import { Table } from 'react-bootstrap'

function Map3() {
    const table=[
        {
            name:'sai',
            age:23,
            roll:33
        },
        {
            name:'Vyshnavi',
            age:24,
            roll:36
        }
    ]
  return (
    <div>
        
                <Table striped bordered hover>
                <tbody>
                  
                  {
                  table.map((rowcol=>
            
                    <tr>
                    <td>{rowcol.roll}</td>
                    <td>{rowcol.name}</td>
                    <td>{rowcol.age}</td>
                    </tr>
                    
                    )) }
                  
                </tbody>
              </Table> 
        
        
    </div>
  )
}

export default Map3