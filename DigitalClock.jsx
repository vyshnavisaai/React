import React, { useEffect, useState } from 'react'

function DigitalClock() {
    const [date, setdate] = useState(new Date())
    useEffect(() => {
      const intervalId = setInterval(() => {
        setdate(new Date())
      }, 1000);
      return () => clearInterval(intervalId);
      
    },[])
    const para={
        color:'#4A2A1E',
         fontSize: 50,

    }
  return (
    <div>
        <center>
        <p style={para} className="clock">
            {date.toLocaleTimeString()}
        </p>
        </center>
    </div>
  )
}

export default DigitalClock