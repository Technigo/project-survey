import React, { useState } from 'react'

export const Review = ({ formData, setFormData }) => {

    return(
      <div className="review-container">
        <li>Email: {formData.email}</li>
        <li>Password: {formData.password}</li>
        <li>Destination: {formData.destination}</li>
        <li>Last Name:{formData.lastName}</li>
        <li>Username:{formData.username}</li>
        <li>Nationality: {formData.nationality}</li>
        <li>Other: {formData.other}</li>
      </div>
    );
  }