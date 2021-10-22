import React from "react";

const Overview = props => {
  return (
    <section>
      <h2>My values from form :</h2>
      <p>Name : {props.nameInput}</p>
      <p>Role : {props.roleInput}</p>
      <p>Class : {props.classInput}</p>
    </section>
  );
};

export default Overview;
