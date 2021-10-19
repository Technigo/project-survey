import React from "react";
import ImageComponent from "Components/ThirdImg";

const ThirdQuestion = ({ fundamentalInput, setFundamentalInput }) => {
  // const [fundamentalInput, setFundamentalInput] = useState("");
  return (
    <div className="QuestionContainer">
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="inputForm">
          <label htmlFor="textInput">Reading is what?</label>
          <input
            id="textInput"
            placeholder="fundamental!"
            type="text"
            value={fundamentalInput}
            onChange={(event) => setFundamentalInput(event.target.value)}
          />
        </div>
      </form>
      <ImageComponent />
    </div>
  );
};

export default ThirdQuestion;
