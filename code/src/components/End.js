import React from 'react';

export const End = ({ name, yesno, shape }) => {
  // console.log(name,yesno,shape, "--------")
  if (yesno === 'No') {
    yesno = 'Just like you';
  } else if (yesno === 'Yes') {
    yesno = 'Unlike you';
  }
  if (shape === 'kiki') {
    shape = "95% of the people we've asked before you would disagree –";
  } else if (shape === 'bouba') {
    shape = "95% of the people we've asked before you would agree –";
  }
  return (
    <div>
      <p>
        Thank you {name} for your contribution!
        <br />{yesno}, most people haven't heard of the Bouba Kiki Effect.
        <br />{shape} Bouba is the shape to the right and Kiki the one one the left.
      </p>
    </div>
  );
};
