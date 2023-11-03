import React, { createContext, useState } from 'react'

const newcontext=createContext()

function UseContent({children}) {
    // const name='Vyshnavi'
    // const [first, setfirst] = useState([{a:5,b:9}])
    const [details, setdetails] = useState([{name:'Vyshnavi',age:23},{name:'Avanthika',age:20}])
  return (
    <div>
        <newcontext.Provider value={{details,setdetails}}>
        {children}
        </newcontext.Provider>
    </div>
  )
}

export default UseContent
export {newcontext}