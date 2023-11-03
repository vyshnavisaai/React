import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import UseNavigate1 from './UseNavigate1'
import UseNavigate2 from './UseNavigate2'
import UseNavigate3 from './UseNavigate3'

function UseNavigateRoute() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<UseNavigate1/>}/>
                <Route path='/nav' element={<UseNavigate2/>}/>
                <Route path='/nav2' element={<UseNavigate3/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default UseNavigateRoute