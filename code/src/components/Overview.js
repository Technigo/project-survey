import React from "react"

const Overview = ({ nameInput, location, timeButton }) => {
  return (
    <>
      <section className="form-wrapper">
        <div className="summary-section">
          <h2>ORDER CONFIRMATION</h2>
          <p>Thank you for booking with us, {nameInput}!</p>
          <p>
            We have now booked your trip to {location} for a {timeButton}. Enjoy
            your instant trip!{" "}
          </p>
        </div>
      </section>
    </>
  )
}

export default Overview
