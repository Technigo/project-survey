import React from "react";
import Button from "./Button";

const QuestionDestination = (destination, onDestinationChange) => {
  const destinationOptions = [
    "the West",
    "the South",
    "the North",
    "the North-North",
  ];

  return (
    <>
      <p className="question">Where would you like to travel?</p>
      <section className="radio-buttons-wrap">
        {destinationOptions.map((destinationValue) => (
          <label
            key={destinationValue}
            htmlFor="destination-type"
            className="label-destination"
          >
            <input
              className="destination"
              type="radio"
              name="destination-type"
              value={destinationValue}
              onChange={onDestinationChange}
              checked={destination === destinationValue}
              aria-label="Navigate with arrows and then press Enter"
              required
            />
            {destinationValue}
          </label>
        ))}
      </section>
      <Button button="Continue" />
    </>
  );
};

export default QuestionDestination;
