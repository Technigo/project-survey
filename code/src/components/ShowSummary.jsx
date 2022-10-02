import React from 'react';

const ShowSummary = (props) => {
  return (
    <>
      <h2>Summary:</h2>
      <h4>Gender : {props.formData.gender}</h4>
      <h4>Status : {props.formData.status}</h4>
      <h4>ServiceSatisfaction : {props.formData.serviceSatisfaction}</h4>
      <h4>WebsiteSatisfaction : {props.formData.WebSatisfaction}</h4>

      {/* <pre>{JSON.stringify(props.formData)}</pre> */}
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
    </>
  );
};

export default ShowSummary;
