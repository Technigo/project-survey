import React from "react";

const Form = () => {
  return (
    <div className="form-wrapper">
      <form className="form-display-column">
        <label htmlFor="text-field">
          Which movie is your all time favorite?
        </label>
        <input type="text" maxlength="255" id="text-field" />

        <label htmlFor="dropDown">Which would you like to see more of?</label>
        <select id="dropDown">
          <option value="" selected="selected"></option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Comedy">Crime & Mystery</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Historical">Historical</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Science fiction">Science fiction</option>
          <option value="Thriller"></option>
          <option value="Western">Western</option>
          <option value="Other">Other</option>
        </select>

        <label>How would you rate this survey? </label>
        <div className="form-radioButton">
          <div>
            <input
              type="radio"
              value="very-good"
              id="very-good"
              name="radioButton"
            />
            <label htmlFor="very-good"> Very good</label>
          </div>
          <div>
            <input type="radio" value="good" id="good" name="radioButton" />
            <label htmlFor="good"> Good</label>
          </div>

          <div>
            <input type="radio" value="boring" id="boring" name="radioButton" />
            <label htmlFor="boring"> Boring</label>
          </div>

          <div>
            <input
              type="radio"
              value="super-boring"
              id="super-boring"
              name="radioButton"
            />
            <label htmlFor="super-boring"> Super boring</label>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
