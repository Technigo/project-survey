import React from "react";
import "./passengerInformation.css";

export const PassengerInformation = ({
  amountOfTravellers,
  onChangeFirstName,
  onChangeLastName,
}) => {
  const items = [];

  for (let i = 1; i <= amountOfTravellers; i++) {
    items.push(
      <div className="form__passengers-information" key={i}>
        <div>
          <h3 tabIndex="2">Passenger {i}</h3>

          <div className="form__names">
            <div className="form__name">
              <label htmlFor="firstName">
                <span>First Name</span>
              </label>
              <input
                autoFocus
                id="firstName"
                type="text"
                onChange={(e) => onChangeFirstName(e.target.value, i)}
                required
              />
            </div>
            <div className="form__name">
              <span>Last Name</span>
              <label htmlFor="lastName" />
              <input
                id="lastName"
                type="text"
                required
                onChange={(e) => onChangeLastName(e.target.value, i)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <h2 tabIndex="1">Passenger Information</h2>
      {items}
    </>
  );
};
