import React from "react"

const Overview = ({
  nameInput,
  location,
  priceConditions,
  departure,
  emailInput,
}) => {
  return (
    <>
      <section className="form-wrapper">
        <div className="summary-section">
          <h2>ORDER CONFIRMATION</h2>
          <p>Thank you for booking with us, {nameInput}!</p>
          <p>
            We have now booked your trip to {location} with a departure on{" "}
            {departure}. You chose the {priceConditions} way. All the details
            have been sent to
            {emailInput}. Enjoy your instant trip!
          </p>
        </div>
        <p className="current-step">
          ➤ Personal Information ➤ Destination ➤ Price conditions ➤ Departure ➤
          Overview
        </p>
      </section>
    </>
  )
}

export default Overview
