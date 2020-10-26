import React from "react";
import "./check.css";

const CheckPage = ({
  setWantsNewsletter,
  wantsNewsletter,
  setAcceptTerms,
  acceptTerms,
}) => {
  return (
    <div className="check-container">
      <h2>Sign up for out newsletter?</h2>
      <div className="wrapper-row">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={wantsNewsletter}
            onChange={(event) => setWantsNewsletter(event.target.checked)}
          />
          <span className="custom-checkbox"></span>
        </label>
        <label className="checkbox-container-text">
          Yes, I want to subscribe!
        </label>

        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(event) => setAcceptTerms(event.target.checked)}
          />
          <span className="custom-checkbox"></span>
        </label>
        <label className="checkbox-container-text">
          Yes, I agree to the <a href="">terms & conditions</a>
        </label>
      </div>
    </div>
  );
};

export default CheckPage;
