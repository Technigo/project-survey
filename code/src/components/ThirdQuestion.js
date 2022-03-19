import React from "react";
import RelateOne from "../images/hello-world.png";
import RelateTwo from "../images/margin-maxout.png";
import RelateThree from "../images/stackoverflow-fail.png";
import RelateFour from "../images/cheaper-option.png";

export const ThirdQuestion = ({ state, onHandleImgChange, onStepChange }) => {
  return (
    <section className="form-container">
      <div className="img-wrapper">
        <h2>What image do you relate to the most?</h2>
        <h3>You can only choose one of the options, I know it's hard</h3>
        <div className="img-wrapper--images">
          <label htmlFor="imageRelate">
            <div className="description relate-img">1. Hello World</div>
            <input
              type="radio"
              name="relate"
              value="helloworld"
              onChange={onHandleImgChange}
              checked={(state = "helloworld")}
              //   className="relate"
            />
            <img
              className="img-option"
              src={RelateOne}
              alt="page with only a heading"
            />
          </label>

          <label>
            <div className="description relate-img">2. Margin max-out</div>
            <input
              type="radio"
              name="relate"
              value="maxout"
              onChange={onHandleImgChange}
              checked={(state = "maxout")}
              //   className="relate"
            />
            <img
              className="img-option"
              src={RelateTwo}
              alt="air-conditioner in top right corner"
            />
          </label>

          <label>
            <div className="description relate-img">
              3. Stackoverflow is offline and under maintenance
            </div>
            <input
              type="radio"
              name="relate"
              value="fail"
              onChange={onHandleImgChange}
              checked={(state = "fail")}
              //   className="relate"
            />
            <img
              className="img-option"
              src={RelateThree}
              alt="Stackoverflow is down and under construction"
            />
          </label>

          <label>
            <div className="description relate-img">
              4. Don't ask for the cheaper option
            </div>
            <input
              type="radio"
              name="relate"
              value="cheaper"
              onChange={onHandleImgChange}
              checked={(state = "cheaper")}
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
