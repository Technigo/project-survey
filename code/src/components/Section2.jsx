import React, { useState } from 'react';

const Section2 = (props) => {
  return (
    <>
      <h2>Section 2| Your recently purchased reasons: </h2>
      <p>- What is the main factor for you to purchese our product</p>
      <form>
        <select
          value={props.formData.reason}
          onChange={(e) =>
            props.setFormData({ ...props.formData, reason: e.target.value })
          }
        >
          <option value="">Main Factor is about... </option>
          <option value="design">Design</option>
          <option value="features">Features</option>
          <option value="price">Price</option>
          <option value="other">Other</option>
        </select>

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

export default Section2;
