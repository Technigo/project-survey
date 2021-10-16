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
          <h3>Passenger {i}</h3>

          <div className="form__name">
            <div>
              <span>First Name</span>
              <label htmlFor="firstName" />
              <input
                id="firstName"
                type="text"
                onChange={(e) => onChangeFirstName(e.target.value, i)}
                required
              />
            </div>
            <div>
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
      <h2>Passenger Information</h2>
      {items}
    </>
  );
};
