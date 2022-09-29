import React, { useState } from 'react';

const Section3 = (props) => {
  return (
    <>
      <h2>Section 3| This esction is about your satisfaction. </h2>
      <p>Would you rate the overal quality of our products? </p>
      <form>
        <p>How did u perfer your order? </p>
        <label>
          <input
            type="radio"
            value="Store"
            onChange={event =>
              props.setFormData({
                ...props.formData,
                where: event.target.value
              })
            }
          />
        </label>
        <label>
          <input
            type="radio"
            value="Website"
            onChange={event =>
              props.setFormData({
                ...props.formData,
                where: event.target.value
              })
            }
          />
        </label>

        <p>
          if it is store, Are you statisfied with our service and our collegaes
          service?
        </p>
        {/* Yes No */}

        <p>If in the website, How quich and representative is our website? </p>
        {/* fast, medium, slow */}
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

export default Section3;
