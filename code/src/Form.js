import React, { useState } from "react";

import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";

const Form = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [colors, setColors] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleColorsChange = (colorValue) => {
    colors.includes(colorValue)
      ? setColors(colors.filter((item) => item !== colorValue))
      : setColors([...colors, colorValue]);
  };
  console.log(colors);

  return (
    <form className="form-container">
      <Question1 userName={name} onNameChange={handleNameChange} />
      <Question2 city={city} onCityChange={handleCityChange} />
      <Question3 colors={colors} onColorsChange={handleColorsChange} />
    </form>
  );
};
export default Form;
