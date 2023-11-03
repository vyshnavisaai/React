import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Enchanteur from './Enchanteur/Enchanteur'
import Enchanteur2 from './Enchanteur/Enchanteur2'

function UpdatedRoute() {
    const newroute=createBrowserRouter([
        {
            path:'/',
            element:<Enchanteur/>
        },
        {
            path:'/abc',
            element:<Enchanteur2/>
        }
    ])
  return (
    <div>
        <RouterProvider router={newroute}/>
    </div>
  )
}

export default UpdatedRoute