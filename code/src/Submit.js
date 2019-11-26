import React, { useState } from "react";
import { Summary } from "Summary";

export const Submit = props => {
  const [answer, setAnswer] = useState();

  return (
    <div>
      <button onClick={() => setAnswer(true)}>Submit</button>

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
