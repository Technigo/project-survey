import React, { useState } from "react";

const Information = ({ onSubmit }) => {
  const [information, setInformation] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      information,
    });
  };

  const handleInformationChange = (informationValue) => {
    information.includes(informationValue)
      ? setInformation(information.filter((item) => item !== informationValue))
      : setInformation([...information, " ", informationValue]);
  };

  return (
    <form className="forms-container" onSubmit={handleSubmit}>
      <div>
        Where did you hear about us?
        <label htmlFor="facebook">
          Facebook
          <input
            type="checkbox"
            id="facebook"
            value="facebook"
            checked={information.includes("facebook")}
            onChange={() => handleInformationChange("facebook")}
          />
        </label>
        <label htmlFor="linkedin">
          Linkedin
          <input
            type="checkbox"
            id="linkedin"
            value="linkedin"
            checked={information.includes("linkedin")}
            onChange={() => handleInformationChange("linkedin")}
          />
        </label>
        <label htmlFor="friends">
          Friends
          <input
            type="checkbox"
            id="friends"
            value="friends"
            checked={information.includes("friends")}
            onChange={() => handleInformationChange("friends")}
          />
        </label>
      </div>

      <input className="forms-container__submit" type="submit" value="Submit" />
    </form>
  );
};

export default Information;
