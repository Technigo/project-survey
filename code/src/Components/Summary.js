import React from "react";

export const Summary = ({ name, activity, color }) => {
  return (
    <div className="summary" tabIndex="0">
      <p>Hello {name}!</p>
      {activity === "Nothing, I hate Halloween!" ? (
        <>
          <p>
            You hate Halloween, I'm sorry you feel that way. But cheer up,
            Christmas is coming! Or are you also the grinch?!
          </p>
          <p>Is this true? Do you really hate Halloween?</p>
        </>
      ) : (
        <>
          <p>
            You want to {activity.toLowerCase()} on halloween and your favourite
            color is {color.toLowerCase()}.
          </p>
          <p>Is this true?</p>
        </>
      )}
    </div>
  );
};
