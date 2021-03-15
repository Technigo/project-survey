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
          <option value="1">Action</option>
          <option value="2">Adventure</option>
          <option value="3">Comedy</option>
          <option value="4">Crime & Mystery</option>
          <option value="5">Fantasy</option>
          <option value="6">Historical</option>
          <option value="7">Horror</option>
          <option value="8">Romance</option>
          <option value="9">Science fiction</option>
          <option value="10">Thriller</option>
          <option value="11">Western</option>
          <option value="12">Other</option>
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
