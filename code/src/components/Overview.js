import React from "react";

const Overview = ({name, surname}) => {
  return (
    <section>
      <h3>My values from form:</h3>
      <p>Name:{name}</p>
      <p>Surname:{surname}</p>
      {/* <button onClick={onStepChange}>second question</button> */}

    </section>
  );
};
export default Overview;