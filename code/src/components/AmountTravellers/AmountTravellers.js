import React from "react";
import "./amountTravellers.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const AmountTravellers = ({
  onAmountOfTravellers,
  amountOfTravellers,
}) => {
  return (
    <>
      <h2>How many travellers?</h2>
      <div className="slidecontainer">
        <Slider
          activeDotStyle={{
            borderColor: "var(--main-color)",
          }}
          handleStyle={{
            color: "var(--main-color)",
          }}
          min={1}
          max={5}
          defaultValue={amountOfTravellers}
          marks={{
            1: { style: { color: "black" }, label: 1 },
            2: { style: { color: "black" }, label: 2 },
            3: { style: { color: "black" }, label: 3 },
            4: { style: { color: "black" }, label: 4 },
            5: { style: { color: "black" }, label: 5 },
          }}
          onChange={(value) => onAmountOfTravellers(value)}
        />
      </div>
    </>
  );
};
