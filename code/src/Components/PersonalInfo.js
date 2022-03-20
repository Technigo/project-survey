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
          <lable>
        <input type="radio" row className="radio" name="destination" value="The moon" onChange={handleChange} checked={formData.destination=="The moon"} />
        The moon</lable>
        </div>
        <div>
          <lable>
        <input type="radio" name="destination" value="Mars" onChange={handleChange} checked={formData.destination=="Mars"} />
        Mars
        </lable>
        </div>
        <div>
          <lable>
        <input type="radio" name="destination" value="ISS" onChange={handleChange} checked={formData.destination=="ISS"} />
        ISS
        </lable>
        </div>
        <div>
          <lable>
        <input type="radio" name="destination" value="Mercury" onChange={handleChange} checked={formData.destination=="Mercury"} />
        Mercury
        </lable>
        </div>
      </div>
    );
  }