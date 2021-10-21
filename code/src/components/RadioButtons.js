import React from "react";
import { useState } from "react/cjs/react.development";

const webLanguages = ["JS", "HTML", "CSS"];

const RadioButtons = (props) => {
  const [WebLanguage, setWebLanguage] = useState();
  return (
    <>
      <form>
        What is your favorite Web language {props.name}?
        {webLanguages.map((language) => (
          <label key={language}>
            <input
              type="radio"
              value={language}
              onChange={(event) => setWebLanguage(event.target.value)}
              checked={WebLanguage === language}
            />
            {language}
          </label>
        ))}
      </form>

      {/* <form>
    <p>What is your favorite Web language {props.name}?</p>
    <label>
      <input
      type="radio"
      value="JS"
      onChange={event => setWebLanguage(event.target.value)}
      checked={WebLanguage === "JS"}
      />
      JS
    </label>

    <label>
      <input
      type="radio"
      value="HTML"
      onChange={event => setWebLanguage(event.target.value)}
      checked={WebLanguage === "HTML"}
      />
      HTML
    </label>

    <label>
      <input
      type="radio"
      value="CSS"
      onChange={event => setWebLanguage(event.target.value)}
      checked={WebLanguage === "CSS"}
      />
      CSS
    </label>

    </form> */}

      <button onClick={props.onStepChange}>next question</button>
    </>
  );
};

export default RadioButtons;
