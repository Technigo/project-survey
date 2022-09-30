import React, { useState } from 'react';

const Section1 = (props) => {
  return (
    <>
      <form>
        <section className="MaritalStatus">
          <h4> Marital Status</h4>
          <select
            onChange={(event) =>
              props.setFormData({
                ...props.formData,
                status: event.target.value,
              })
            }
            value={props.formData.status}
          >
            <option value="">--Select--</option>
            <option value="family">Family</option>
            <option value="SingelParent">SingelParent</option>
            <option value="Singel">Singel</option>
          </select>

          <h4> Choose your Gender: </h4>
          <section>
          <label>
            <input
              className="radio"
              type="radio"
              value="female"
              onChange={(event) =>
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
              className="radio"
              type="radio"
              value="male"
              onChange={(event) =>
                props.setFormData({
                  ...props.formData,
                  gender: event.target.value,
                })
              }
              checked={props.formData.gender === 'male'}
            />
            Male
          </label>
        </section>
        </section>
        <section className="allbtns">
          <button
            type="button"
            className="btn"
            onClick={() => props.onPrevStep()}
          >
            Previous page
          </button>
          <button
            type="Submit"
            className="btn"
            onClick={() => props.onNextStep()}
          >
            Next Page
          </button>
        </section>
      </form>
    </>
  );
};

export default Section1;
