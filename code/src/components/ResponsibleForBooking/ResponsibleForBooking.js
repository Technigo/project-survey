import React from "react";
import "./responsibleForBooking.css";

export const ResponsibleForBooking = ({
  onChangeEmail,
  onChangeTelephoneNumber,
  email,
  telephoneNumber,
}) => {
  return (
    <>
      <h2>Who is responsible for the booking?</h2>
      <h3>Contact information</h3>
      <div className="responsible-booking">
        <div className="responsible-booking__email-number">
          <span>Email</span>
          <label htmlFor="email" />
          <input
            value={email}
            id="email"
            type="email"
            required
            onChange={(e) => onChangeEmail(e.target.value)}
          />
        </div>
        <div className="responsible-booking__email-number">
          <span>Phone nr</span>
          <label htmlFor="number" />
          <input
            value={telephoneNumber}
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
