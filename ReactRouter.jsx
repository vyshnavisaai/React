import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TernaryOperatorTask from './TernaryOperatorTask'
import DarkAndLightMode from './DarkAndLightMode'
import Nineskin1 from './9skin/Nineskin1'
import Cakes1 from './Cakes/Cakes1'
import Enchanteur from './Enchanteur/Enchanteur'
import Enchanteur3 from './Enchanteur/Enchanteur3'
import Enchanteur2 from './Enchanteur/Enchanteur2'
import UseParams from './UseParams'

function ReactRouter() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Enchanteur/>}/>
                <Route path='/abc/:name' element={<UseParams/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default ReactRouter