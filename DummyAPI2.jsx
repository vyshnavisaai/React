import axios from "axios";
import React, { useEffect, useState } from "react";

function DummyAPI2() {
  const [first, setfirst] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((display) => {
      setfirst(display.data.products);
    });
  }, []);

  return (
    <div>
      {first.map((display) => (
        <>
          <h1>{display.brand}</h1>
          <p>{display.category}</p>
        </>
      ))}
    </div>
  );
}

export default DummyAPI2;
