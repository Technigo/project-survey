import React, { useState } from 'react'

export const PersonalInfo = ({ formData, setFormData }) => {

    const handleChange = event => {
      const target = event.target
      const name = target.name
      const value = target.value
      setFormData({
        ...formData,
        [name] : value  
      })
    }

    return(
      <div className="personal-info-container">
        <div>
          <lable>The moon</lable>
        <input type="radio" name="destination" value="The moon" onChange={handleChange} checked={formData.destination=="The moon"} />
        </div>
        <div>
          <lable>Mars</lable>
        <input type="radio" name="destination" value="Mars" onChange={handleChange} checked={formData.destination=="Mars"} />
        </div>
        <div>
          <lable>ISS</lable>
        <input type="radio" name="destination" value="ISS" onChange={handleChange} checked={formData.destination=="ISS"} />
        </div>
        <div>
          <lable>Mercury</lable>
        <input type="radio" name="destination" value="Mercury" onChange={handleChange} checked={formData.destination=="Mercury"} />
        </div>
      </div>
    );
  }