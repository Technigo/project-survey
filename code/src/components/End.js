import React from 'react';

export const End = ({ name, yesno, shape }) => {
  // console.log(name,yesno,shape, "--------")
  if (yesno === 'No') {
    yesno = 'Just like you';
  } else if (yesno === 'Yes') {
    yesno = 'Unlike you';
  }
  if (shape === 'kiki') {
    shape = "But 95% of the people we've asked before you would disagree –";
  } else if (shape === 'bouba') {
    shape = "But 95% of the people we've asked before you would agree –";
  }
  return (
    <div className="end-container">
      <div className="question">
        Thank you {name} for your contribution!
        <br />{yesno}, most people haven't heard of the Bouba Kiki Effect.
        <br />{shape}
        <br />the blue hair style would be Bouba while the pink would be Kiki.
      </div>
    </div>
  );
};
