import React, { useState } from "react";

export default function IncCount() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 5)}>Inc</button>
    </div>
  );
}
