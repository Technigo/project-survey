import React from 'react';

const ShowSummary = (props) => {
  return (
    <>
      <h3>Summary:</h3>
      {/* <hr /> */}
      <p>Gender : {props.formData.gender}</p>
      <p>Status : {props.formData.status}</p>
      <p>Reason : {props.formData.reason}</p>
      <p>At Store/ Website : {props.formData.where}</p>
      <p>ServiceSatisfaction : {props.formData.satisfaction}</p>
      <p>WebsiteSatisfaction : {props.formData.websiteSatisfactionquality}</p>

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
