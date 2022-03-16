import React, { useState } from "react";

export const Name = () => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h1>The state is:</h1>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={Name}
      />
    </form>
  );
};
