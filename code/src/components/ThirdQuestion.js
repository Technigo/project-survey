import React from "react";
import RelateOne from "../images/hello-world.png";
import RelateTwo from "../images/margin-maxout.png";
import RelateThree from "../images/stackoverflow-fail.png";
import RelateFour from "../images/cheaper-option.png";

export const ThirdQuestion = ({
  relateToImg,
  onRelateToImgChange,
  onStepChange,
  radioValue,
  setRadioValue,
}) => {
  return (
    <section className="form-container">
      <div className="img-wrapper">
        <h2>What image do you relate to the most?</h2>
        <h3>You can only choose one of the options, I know it's hard</h3>
        <div className="img-wrapper--images">
          <label htmlFor="relate">
            {/* <div className="description relate-img">1. Hello World</div> */}
            <input
              id="relate"
              type="radio"
              name="relate"
              value={RelateOne}
              onChange={(event) => setRadioValue(event.target.value)}
              checked={radioValue === RelateOne}
              //   onChange={onRelateToImgChange}
              //   checked={(relateToImg = "helloworld")}
              //   className="relate"
            />
            <img
              className="img-option"
              src={RelateOne}
              alt="page with only a heading"
            />
          </label>

          <label htmlFor="maxout">
            {/* <div className="description relate-img">2. Margin max-out</div> */}
            <input
              id="maxout"
              type="radio"
              name="maxout"
              value={RelateTwo}
              onChange={(event) => setRadioValue(event.target.value)}
              checked={radioValue === RelateTwo}
              //   onChange={onRelateToImgChange}
              //   checked={(relateToImg = "maxout")}
              //   className="relate"
            />
            <img
              className="img-option"
              src={RelateTwo}
              alt="air-conditioner in top right corner"
            />
          </label>

          <label htmlFor="fail">
            {/* <div className="description relate-img">
              3. Stackoverflow is offline and under maintenance
            </div> */}
            <input
              id="fail"
              type="radio"
              name="fail"
              value={RelateThree}
              onChange={(event) => setRadioValue(event.target.value)}
              checked={radioValue === RelateThree}
              //   onChange={onRelateToImgChange}
              //   checked={(relateToImg = "fail")}
              //   className="relate"
            />
            <img
              className="img-option"
              src={RelateThree}
              alt="Stackoverflow is down and under construction"
            />
          </label>

          <label htmlFor="cheaper">
            {/* <div className="description relate-img">
              4. Don't ask for the cheaper option
            </div> */}
            <input
              id="cheaper"
              type="radio"
              name="cheaper"
              value={RelateFour}
              onChange={(event) => setRadioValue(event.target.value)}
              checked={radioValue === RelateFour}
              //   onChange={onRelateToImgChange}
              //   checked={(relateToImg = "cheaper")}
              //   className="relate"
            />
            <img
              className="img-option"
              src={RelateFour}
              alt="you get what you pay for"
            />
          </label>

          <button onClick={onStepChange}> Next Question </button>
        </div>
      </div>
    </section>
  );
};
