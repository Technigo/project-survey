import React, { useState } from "react";


export const Radiobuttons = () => {
  const [temperature, setTemperature] = useState(20);

  const renderMessage = () => {
    return "yay";
  };
  return (
    <div>
      <h1> current temperature: {temperature} degrees </h1>
      <button onClick={() => setTemperature(-5)}> freeze!</button>
      <button onClick={() => setTemperature(30)}> hot!</button>
      <button onClick={() => setTemperature(120)}> Boil!</button>

      {temperature > 100 && <p>Steamy!</p>}
      {temperature < 0 && <p>Ice!</p>}

      {renderMessage()}
    </div>
  );
};
