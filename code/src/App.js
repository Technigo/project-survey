import React, { useState } from "react";

import Survey from "./components/survey/Survey";
import Summary from "./components/Summary";

export const App = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [data, setData] = useState({});

  const handleSubmit = (data) => {
    setData(data);
    setShowSummary(true);
  };

  return showSummary ? <Summary {...data} /> : <Survey onSubmit={handleSubmit} />
};
