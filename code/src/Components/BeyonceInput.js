import React from "react";

const BeyonceInput = ({ id, adjective, onBeyonceChange }) => {
  return (
    <div className="beyonce-input-field">
      <label htmlFor="beyonce">
        <h1 tabIndex="0" className="beyonce-header">
          Describe Beyonce with an adjective:
        </h1>
      </label>
      <input
        className="beyonce-text"
        type="text"
        id={id}
        value={adjective}
        placeholder="Type an adjective"
        required
        onChange={onBeyonceChange}
      />
    </div>
  );
};

export default BeyonceInput;
