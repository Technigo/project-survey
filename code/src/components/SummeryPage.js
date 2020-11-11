import React from "react";
import "./summery.css";

const SummeryPage = ({
  firstName,
  email,
  eventDate,
  location,
  wantsNewsletter,
}) => {
  const news = wantsNewsletter
    ? " Thank you for subscribing!"
    : " Hope you will subscribe on our newsletter next time :)";

  return (
    <div>
      <h2 className="summery-heading">
        Thank you for your registration, {firstName}!
      </h2>
      <div className="summery-text-container">
        <p className="summery-text">
          You have a {location} for {eventDate} at our event. We have sent you a
          confirmation to {email} and we hope you will have an amazing time.
          {news}
        </p>
      </div>
    </div>
  );
};

export default SummeryPage;
