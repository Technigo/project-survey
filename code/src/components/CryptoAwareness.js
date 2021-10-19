import React from "react";

const awareness = ["Nothing", "Not much", "Some", "A lot"];

const CryptoAwareness = ({
  onStepChange,
  cryptoAwareness,
  onCryptoAwarenessChange,
}) => {
  return (
    <div>
      <h2>How much do you know about cryptocurrencies?</h2>
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
      <button onClick={onStepChange}>Next</button>
    </div>
  );
};

export default CryptoAwareness;
