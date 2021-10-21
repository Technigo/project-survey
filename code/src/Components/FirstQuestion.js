import React from "react";
import ImageComponent from "./FirstImg";

// lägg till en key till labels?

const FirstQuestion = ({ radioChecked, setRadioChecked }) => {
  //const [radioChecked, setRadiochecked] = useState("");
  return (
    <div className="container">
      <div className="contentWrapper">
        <p>Do you watch Rupaul's Drag Race?</p>
        <div className="radioForm">
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              <input
                type="radio"
                value="yes"
                onChange={(event) => setRadioChecked(event.target.value)}
                checked={radioChecked === "yes"}
              />
              Yes!
            </label>
            <label>
              <input
                type="radio"
                value="no"
                onChange={(event) => setRadioChecked(event.target.value)}
                checked={radioChecked === "no"}
              />
              No.
            </label>
          </form>
        </div>
        <ImageComponent />
      </div>
    </div>
  );
};

export default FirstQuestion;
