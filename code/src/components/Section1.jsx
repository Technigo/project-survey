import React, { useState } from 'react';

const Section1 = (props) => {
  return (
    <>
      <h2> Marital Status</h2>
      <form>
        <select
          onChange={event =>
            props.setFormData({ ...props.formData, status: event.target.value })
          }
          value={props.formData.status}
        >
          <option value="">--Select--</option>
          <option value="family">Family</option>
          <option value="SingelParent">SingelParent</option>
          <option value="Singel">Singel</option>
        </select>
        <h2> Choose your Gender: </h2>
        <label>
          <input
            type="radio"
            value="female"
            onChange={event =>
              props.setFormData({
                ...props.formData,
                gender: event.target.value,
              })
            }
            checked={props.formData.gender === 'female'}
          />
          Female
        </label>

        <label>
          <input
            type="radio"
            value="male"
            onChange={event =>
              props.setFormData({
                ...props.formData,
                gender: event.target.value,
              })
            }
            checked={props.formData.gender === 'male'}
          />
          Male
        </label>
        <button type="button" onClick={() => props.onPrevStep()}>
          Previous
        </button>
        <button type="button" onClick={() => props.onNextStep()}>
          continue
        </button>
      </form>
    </>
  );
};

export default Section1;
