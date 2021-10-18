import React, { useState } from "react";

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>My counter is: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
};
