import React from "react";
import "./responsibleForBooking.css";

export const ResponsibleForBooking = ({
  onChangeEmail,
  onChangeTelephoneNumber,
}) => {
  return (
    <>
      <h2>Who is responisble for the booking?</h2>
      <div className="responsible-booking">
        <div>
          <span>Email</span>
          <label htmlFor="email" />
          <input
            id="email"
            type="email"
            required
            onChange={(e) => onChangeEmail(e.target.value)}
          />
        </div>
        <div>
          <span>Telephone number</span>
          <label htmlFor="number" />
          <input
            id="number"
            type="tel"
            required
            onChange={(e) => onChangeTelephoneNumber(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};
