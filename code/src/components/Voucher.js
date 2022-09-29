import React, { useState } from "react";

const Voucher() {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <h1> Hello World </h1>
      {!hidden ? <p>You can see me!</p> : null}
      <button onClick={() => setHidden(s => !s)}>
        react show hide component
      </button>
    </div>
  );
}