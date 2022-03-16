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
        {destinationOptions.map((chosenDestination) => (
          <label
            key={chosenDestination}
            htmlFor="destination-type"
            className="label-destination"
          >
            <input
              id="destination"
              type="radio"
              name="destination-type"
              value={chosenDestination}
              onChange={onDestinationChange}
              checked={destination === chosenDestination}
              aria-label="Navigate with arrows and then press Enter"
              required
              className="input-radio"
            />
            {chosenDestination}
          </label>
        ))}
      </section>
      <Button button="Continue" />
    </>
  );
};

export default QuestionDestination;
