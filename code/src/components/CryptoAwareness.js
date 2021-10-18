import React, { useState } from "react";

const awareness = ["Yes", "No"];

const CryptoAwareness = () => {
  const [cryptoAwareness, setCryptoAwareness] = useState();

  const onCryptoAwarenessChange = (event) =>
    setCryptoAwareness(event.target.value);

  return (
    <div>
      {awareness.map((item) => (
        <label key={item}>
          <input
            type="radio"
            value={item}
            onChange={onCryptoAwarenessChange}
            checked={cryptoAwareness === item}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default CryptoAwareness;
