import React, { useState } from 'react';

const Section3 = (props) => {
  return (
    <>
      <h2>Section 3| This esction is about your satisfaction. </h2>
      {/* <p>Would you rate the overal quality of our products? </p> */}
      <form>
        <p>How did u perfer your order? </p>
        <label>
          <input
            className="radio"
            type="radio"
            value="Store"
            onChange={(event) =>
              props.setFormData({
                ...props.formData,
                where: event.target.value,
              })
            }
            checked={props.formData.where === 'Store'}
          />
          Store
        </label>
        <label>
          <input
            className="radio"
            type="radio"
            value="Website"
            onChange={(event) =>
              props.setFormData({
                ...props.formData,
                where: event.target.value,
              })
            }
            checked={props.formData.where === 'Website'}
          />
          Website
        </label>

        <p>
          if it is store, Are you statisfied with our service and our collegues?
        </p>
        <label>
          <input
            className="radio"
            type="radio"
            value="Yes"
            onChange={(event) =>
              props.setFormData({
                ...props.formData,
                serviceSatisfaction: event.target.value,
              })
            }
            checked={props.formData.serviceSatisfaction === 'Yes'}
          />
          Yes
        </label>
        <label>
          <input
            className="radio"
            type="radio"
            value="No"
            onChange={(event) =>
              props.setFormData({
                ...props.formData,
                serviceSatisfaction: event.target.value,
              })
            }
            checked={props.formData.serviceSatisfaction === 'No'}
          />
          No
        </label>

        <p>If in the website, How quick and representative is our website? </p>
        {/* fast, medium, slow */}

        {/* Bottons */}
        <span className="btn">
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
        </span>
      </form>
    </>
  );
};

export default Section3;
