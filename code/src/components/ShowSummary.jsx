import React, { useState } from 'react';
// import Section1 from './Section1';
// import Section2 from './Section2';
// import Section3 from './Section3';

const ShowSummary = (props) => {
  return (
    <>
      <h3>Summary:</h3>
      <hr />
      <p>Gender: {props.formData.gender}</p>
      <p>Status: {props.formData.status}</p>
      <p>Reason: {props.formData.reason}</p>
      <p>Where: {props.formData.where}</p>
      <p>ServiceSatisfaction: {props.formData.satisfaction}</p>
      <p>WebsiteSatisfaction: {props.formData.websiteSatisfactionquality}</p>

      {/* <pre>{JSON.stringify(props.formData)}</pre> */}
      <button type="button" onClick={() => props.onPrevStep()}>
        Previous
      </button>
      <button type="Submit" onClick={() => props.onNextStep()}>
        Submit
      </button>
    </>
  );
};

export default ShowSummary;
