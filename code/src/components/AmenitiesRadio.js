import React from 'react';
import { Button } from './Button';

export const AmenitiesRadio = ({setAmenities}) => {
  const amenities = ["Spa", "Gym", "Service", "Restaurant"];
  const onAmenitiesChange = (e) => {
    setAmenities(e.target.value)
  }

  return (
    <>
      <h2 className="question-title"><span className="arrow">➛</span> Which of our amenities did you like the most?</h2>
      <section className="radio-buttons">
        {amenities.map(amenity =>
          <div key={amenity} className="radio-box">
            <label htmlFor={amenity} className="radio-button-label">
              <input 
                type="radio"
                id={amenity}
                value={amenity}
                name="amenities"
                onChange={onAmenitiesChange}
                className="radio-button"
                required/>
              <span className="radio-text">{amenity}</span>
            </label>
          </div>
        )}
      </section>
      <Button 
        button="CONTINUE" />
    </>
  )
}