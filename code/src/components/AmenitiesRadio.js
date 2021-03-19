import React from 'react';
import { Button } from './Button';

export const AmenitiesRadio = ({setAmenities}) => {
  const amenities = ["Spa", "Gym", "Service", "Restaurant"];
  const onAmenitiesChange = (e) => {
    setAmenities(e.target.value)
  }

  return (
    <>
      <h2 className="question-title" tabIndex="0"><span className="arrow">➛</span> Which of our amenities did you enjoy the most?</h2>
      <section className="radio-buttons-container">
        {amenities.map(amenity =>
          <div key={amenity} className="radio-box">
            <label htmlFor={amenity} className="radio-button-label" aria-label="Use up and down arrows to choose and then press enter to move to next question">
              <input 
                type="radio"
                name="amenities"
                className="radio-button"
                id={amenity}
                value={amenity}
                onChange={onAmenitiesChange}
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