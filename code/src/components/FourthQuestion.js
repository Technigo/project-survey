import React from "react";

const FourthQuestion = ({
  onWeatherInputChange,
  onStepChange,
  weatherInput,
}) => {
  const weathers = ["Sun", "Rain", "Snow", "Wind"];
  return (
    <form onSubmit={onStepChange}>
      <h2>What kind of weather was it during your stay?</h2>
      {weathers.map((weather) => (
        <label key={weather} className="weather-buttons">
          <input
            className="input-padding"
            type="submit"
            value={weather}
            onClick={(weatherInput === weather, onWeatherInputChange)}
          />
        </label>
      ))}
    </form>
  );
};

export default FourthQuestion;
