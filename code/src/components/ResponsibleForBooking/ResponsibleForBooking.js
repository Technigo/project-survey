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
      <div class="responsible-booking">
        <div className="responsible-booking__email-number">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            id="email"
            type="email"
            required
            onChange={(e) => onChangeEmail(e.target.value)}
          />
        </div>
        <div className="responsible-booking__email-number">
          <label htmlFor="number">Telephone number</label>
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
