import React , {useState} from "react";


const ShowSummary = (props) => {
  //  <p>Store/Online: {props.formData.where}</p>;
  return (
    <>
      <h3>Summary:</h3>
      <hr />
      <p>Gender: {props.formData.gender}</p>
      <p>Status: {props.formData.status}</p>
      <p>Reason: {props.formData.reason}</p>
      <p>Quality: {props.formData.quality}</p>
      <p>satisfaction: {props.formData.satisfaction}</p>

      <pre>{JSON.stringify(props.formData, null, 2)}</pre>
    </>
  );
};

export default ShowSummary;
