import React from "react";
import "./check.css";

const CheckPage = ({
  setWantsNewsletter,
  wantsNewsletter,
  setAcceptTerms,
  acceptTerms,
}) => {
  return (
    <div className="wrapper-row">
      <h2>Sign up for out newsletter?</h2>
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={wantsNewsletter}
          onChange={(event) => setWantsNewsletter(event.target.checked)}
        />
        <span className="custom-checkbox"></span>
      </label>
      <label className="checkbox-container checkbox-container-text">
        Yes! I want to subscribe
      </label>

      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={acceptTerms}
          onChange={(event) => setAcceptTerms(event.target.checked)}
        />
        <span className="custom-checkbox"></span>
      </label>
      <label className="checkbox-container checkbox-container-text">
        Yes! I agree
      </label>
    </div>
  );
};

export default CheckPage;
