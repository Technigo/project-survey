import React from "react";
import Button from "./Button";

const QuestionDestination = ({ destination, onDestinationChange }) => {
  const destinationOptions = [
    "the West",
    "the South",
    "the North",
    "the North-North",
  ];

  return (
    <section className="main">
      <p className="question">Where would you like to travel?</p>
      <form className="form">
        {destinationOptions.map((destinationValue) => (
          <label
            key={destinationValue}
            htmlFor="destination-option"
            className="destination-label"
          >
            <input
              className="destination-option"
              type="radio"
              name="destination-option"
              value={destinationValue}
              onChange={onDestinationChange}
              defaultChecked={destination === destinationValue}
              required
              aria-label="Navigate with arrows and then press Enter"
            />
            {destinationValue}
          </label>
        ))}
      </form>
      <Button button="Continue" />
    </section>
  );
};

export default QuestionDestination;
