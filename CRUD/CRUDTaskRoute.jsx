import React, { createContext, useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import CRUDTaskDetails from './CRUDTaskDetails'

import person from './CRUDTask'
import TaskDetail from '../TaskDetail'
import { formToJSON } from 'axios'
import CRUDTask from './CRUDTask'
import CRUDTaskAdd from './CRUDTaskAdd'
import CRUDEdit from './CRUDEdit'
import CRUDStudentPage from './CRUDStudentPage'

export const CRUDContext=createContext()
function CRUDTaskRoute() {
    const [Persondetail, setperson] = useState(person)
  return (
    <div>
        <CRUDContext.Provider value={[Persondetail,setperson]}>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<CRUDTaskDetails/>}/>
                <Route path='/add' element={<CRUDTaskAdd/>}/>
                <Route path='/edit/:id' element={<CRUDEdit/>}/>
                <Route path='/studentpage/:id' element={<CRUDStudentPage/>}/>
            </Routes>
            </BrowserRouter>
        </CRUDContext.Provider>
    </div>
  )
}


export default CRUDTaskRoute