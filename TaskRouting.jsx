import fruits from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import { createContext, useState } from 'react';
import Task4 from './Task4';
import Task5 from './Task5';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const newcontexttask=createContext()
function TaskRouting() {
  const [Fruit, setFruit] = useState(fruits)
  // console.log(Fruit);
  return (
    <div className="TaskRouting"> 

        <newcontexttask.Provider value={[Fruit,setFruit]}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Task2/>}/>
                <Route path='/display' element={<Task3/>}/>
                <Route path='/card' element={<Task4/>}/>
                <Route path='/table' element={<Task5/>}/>

              </Routes>
            </BrowserRouter>
        </newcontexttask.Provider>
    </div>
    
  );
}

export default TaskRouting;
export {newcontexttask}
