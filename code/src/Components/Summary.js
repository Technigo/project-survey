import React from "react";

const Summary = ({ name, date, time }) => {
  return (
    <h2>
      {name}, Thanks for registrating! We can´t wait to welcome you!{" "}
      {date + time}
    </h2>
  );
};

export default Summary;
