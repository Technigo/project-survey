import React from "react";

const Summary = ({ email, name, ageGroup, location }) => {
  return (
    <div>
      <h1>
        Thank you {name} for signing up to our {location} gardening course!
      </h1>
      <p>
        You will recive more information and booking confirmation at {email}
      </p>
      <p>
        During the following weeks you will tend one of our {location} gardens
        thogeter whit other entusiasts in ages between {ageGroup}
      </p>
      <p>See you soon!</p>
      <p>The Garden Group</p>
    </div>
  );
};
export default Summary;
