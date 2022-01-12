import React from "react";
import ImageComponent from "components/OverviewImage";

const Overview = ({ checked, selectOption, radioChecked }) => {
  return (
    <div className="container">
      <div className="contentWrapper">
        <p className="summaryQuestion">
          Which character do you mostly identify with?
        </p>{" "}
        <p className="summaryAnswer">
          {radioChecked === "Cher"
            ? "You chose Cher from Clueless, you sure are a 90's queen"
            : "You chose Samantha from 16 candles, you are the awkward 80's babe"}
        </p>
        <p className="summaryQuestion">
          Which one of the following movies do you prefer?{" "}
        </p>
        <p className="summaryAnswer"> {selectOption}</p>
        <p className="summaryQuestion">Your next movie to watch is...</p>
        <p className="summaryAnswer"> {radioChecked}</p>
        <ImageComponent />
      </div>
    </div>
  );
};

export default Overview;
