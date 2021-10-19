import React from "react";

const FourthQuestion = ({
  onWeatherInputChange,
  onStepChange,
  weatherInput,
}) => {
  const weathers = ["Sun", "Rain", "Snow", "Windy"];
  return (
    <form onSubmit={onStepChange}>
      <h2>What kind of weather was it during your stay?</h2>
      {weathers.map((weather) => (
        <label key={weather}>
          <input
            type="submit"
            value={weather}
            onClick={(weatherInput === weather, onWeatherInputChange)}
          />
          {weather}
        </label>
      ))}
    </form>
  );
};

export default FourthQuestion;
