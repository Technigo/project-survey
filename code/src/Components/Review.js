import React from 'react'

export const Review = ({ formData, setFormData }) => {

    return(
      <div className="review-container">
        <li>First name: {formData.firstName}</li>
        <li>Last name: {formData.lastName}</li>
        <li>Email: {formData.email}</li>
        <li>Destination: {formData.destination}</li>
        <li>Space ship: {formData.spaceship}</li>
      </div>
    );
  }