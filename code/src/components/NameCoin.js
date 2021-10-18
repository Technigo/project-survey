import React, { useState } from "react";

const NameCoin = () => {
  const [nameCoin, setNameCoin] = useState("");

  const onNameCoinChange = (event) => setNameCoin(event.target.value);

  return (
    <div>
      <input type="text" onChange={onNameCoinChange} value={nameCoin} />
    </div>
  );
};

export default NameCoin;
