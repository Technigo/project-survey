import React from "react";
import "./travelLocation.css";

export const TravelLocation = ({
  onCityChanged,
  onTravelTypeChanged,
  city,
  travelType,
}) => {
  return (
    <>
      <h2 className="dropdown-header-title">Where do you wanna travel?</h2>
      <div className="dropdown-container">
        <input
          type="text"
          value={city}
          title="Choose destination"
          list="cities"
          placeholder="Choose destination"
          onChange={onCityChanged}
          onSelect={onCityChanged}
          required
        />
        <datalist id="cities">
          <option>London</option>
          <option>Paris</option>
          <option>Stockholm</option>
          <option>New York</option>
          <option>Zagreb</option>
          <option>Sydney</option>
          <option>Dubai</option>
          <option>Prague</option>
        </datalist>
      </div>

      <div className="form__radio-btn-container">
        <label htmlFor="oneway">One way trip</label>
        <input
          id="oneway"
          type="radio"
          name="trip"
          value="One way trip"
          required
          checked={travelType === "One way trip"}
          onChange={() => onTravelTypeChanged("One way trip")}
        />
        <label htmlFor="returntrip">Return trip</label>
        <input
          id="returntrip"
          type="radio"
          name="trip"
          value="Return trip"
          checked={travelType === "Return trip"}
          onChange={() => onTravelTypeChanged("Return trip")}
        />
      </div>
    </>
  );
};
