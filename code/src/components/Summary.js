import React from "react";
import Sunflower from "icons/sunflower.png";

const Summary = ({ email, name, ageGroup, location }) => {
  return (
    <div className="form-container">
      <div className="text-container">
        <h1>
          Thank you {name} for signing up to our {location} gardening course!
        </h1>
        <p>
          You will receive more information and booking confirmation at {email}
        </p>
        <p>
          During the following weeks you will tend one of our {location} gardens
          together whit other enthusiasts in ages between {ageGroup}
        </p>
        <p>See you soon!</p>
        <p>The Garden Group</p>
      </div>
      <div className="icon-container">
        <img src={Sunflower} className="icon" alt="Sunflower" />
      </div>
    </div>
  );
};
export default Summary;
