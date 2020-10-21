import React, { useState } from "react";

import Forms from "./Forms";
import { Summary } from "./Summary";

export const App = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [data, setData] = useState({});

  const handleSubmit = (data) => {
    setShowSummary(true);
    setData(data);
  };

  return (
    <>
      {showSummary ? <Summary {...data} /> : <Forms onSubmit={handleSubmit} />};
    </>
  );
};
