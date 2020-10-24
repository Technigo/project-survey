import React from "react";

const Summary = ({ name, colors, city }) => {
  return (
    <section>
      <h1>Summary</h1>
      <h3>
        {name} {colors} {city}
      </h3>
    </section>
  );
};
export default Summary;
