import React, { useState } from "react";

export const Submit = props => {
  console.log("props", props);
  const [answer, setAnswer] = useState(false);

  return (
    <div>
      <button onClick={() => setAnswer(true)} type="submit">
        Submit
      </button>

      {answer && (
        <Summary
          name={props.name}
          size={props.size}
          location={props.location}
        />
      )}
    </div>
  );
};
