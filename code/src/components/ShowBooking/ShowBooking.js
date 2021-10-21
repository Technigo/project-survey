import React from "react";
import "./showBooking.css";

//Function where all the information of the booking gets written out.
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
        You have ordered a <b>{travelType}</b> to <b>{city}</b>.
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
        We will send updates about your trip to <b>{email}</b> and to your
        telephone number <b>{telephoneNumber}.</b>
      </span>
      <span>Have an awesome trip!</span>
    </div>
  );
};
