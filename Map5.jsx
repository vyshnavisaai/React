import React from 'react'

function Map5() {
    const tea=['black tea','green tea','masala tea']
  return (
   
    <div>
        {
        tea.map((drink)=>
        
        <ul>
            <li>{drink}</li>
        </ul>
        )}
    </div>
  )
}

export default Map5