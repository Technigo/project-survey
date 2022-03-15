import React, { useState } from "react";

export const App = () => {
  const [name, setName] = useState("");
  return (
    <form>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
    </form>
  );
};
