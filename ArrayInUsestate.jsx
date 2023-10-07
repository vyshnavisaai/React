import React, { useState } from "react";

function ArrayInUsestate() {
  const [a, setage] = useState([
    { name: "Sai", place: "Vtk" },
    { name: "Vyshnavi", place: "Clt" },
  ]);
  const [b, setmark] = useState([
    { age: 22, mark: 55 },
    { age: 23, mark: 56 },
  ]);

  return (
    <div>
      {a.map((person, mark) => (
        <>
          <h1>Name : {person.name}</h1>
          <p>Place : {person.place}</p>
        </>
      ))}
      {b.map((c) => (
        <>
          <h3>Age : {c.age}</h3>
          <p> Mark : {c.mark}</p>
          <p></p>
        </>
      ))}
    </div>
  );
}

export default ArrayInUsestate;
