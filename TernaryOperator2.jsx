import React, { useState } from "react";

function TernaryOperator2() {
  const [a, setfirst] = useState(false);

  return (
    <div>
      {a ? <p>Show this text</p> : ""}
      <button onClick={() => setfirst(!a)}>{a ? "Hide" : "Show"}</button>
    </div>
  );
}

export default TernaryOperator2;
