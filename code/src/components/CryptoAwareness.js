import React from "react";

const awareness = ["Nothing", "Not much", "Some", "A lot"];

const CryptoAwareness = ({
  cryptoAwareness,
  onCryptoAwarenessChange,
  onStepChange,
}) => {
  return (
    <div className="question-wrapper">
      <h2 className="question-header">
        How much do you know about cryptocurrencies?
      </h2>
      {awareness.map((item) => (
        <div key={item} className="label-container">
          <label htmlFor="awareness" className="label">
            <input
              id="awareness"
              className="input-radio"
              type="radio"
              value={item}
              onChange={onCryptoAwarenessChange}
              checked={cryptoAwareness === item}
            />
            {item}
          </label>
        </div>
      ))}
      <button
        disabled={!cryptoAwareness}
        className="button"
        onClick={onStepChange}
      >
        Next
      </button>
    </div>
  );
};

export default CryptoAwareness;
