import React from "react";
import "./showBooking.css";

export const ShowBooking = ({
  travelType,
  city,
  nameList,
  email,
  telephoneNumber,
}) => {
  return (
    <div className="show-booking">
      <h2>Booking Summary</h2>
      <p>
        You have ordered a {travelType} to {city}.
      </p>
      <h3>Passengers</h3>

      {nameList
        .filter((passenger) => passenger.firstName !== "")
        .map((passenger) => {
          return (
            <div className="names-container" key={passenger.passengerNumber}>
              {passenger.firstName} {passenger.lastName}
            </div>
          );
        })}
      <span>
        We will send any updates about your trip to your emailadress: {email}{" "}
        and telephone number: {telephoneNumber}
      </span>
    </div>
  );
};
