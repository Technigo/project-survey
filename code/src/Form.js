import React from "react";

const Form = () => {
  return (
    <form className="form">
      <p>What kind of job are you looking for?</p>
      <div className="time-container">
        <label htmlFor="full">Full time</label>
        <input type="checkbox" />
        <label htmlFor="part">Part time</label>
        <input type="checkbox" />
        <label htmlFor="project">Temporary project</label>
        <input type="checkbox" />
      </div>

      <div className="genre-container">
        <label htmlFor="genre">
          Within which genre would you like to find a job?
        </label>
        <select>
          <option>Frontend development</option>

          <option>Backend development</option>

          <option>Fullstack development</option>

          <option>Content writing</option>

          <option>Translation</option>

          <option>Customer service</option>

          <option>Sales</option>
        </select>
      </div>
      <p>
        How much experience do you have from the type of profession you're
        interested in?
      </p>
      <div className="experience">
        <label htmlFor="educating">Under education</label>
        <input type="radio" />
        <label htmlFor="junior">Junior</label>
        <input type="radio" />
        <label htmlFor="senior">Senior</label>
        <input type="radio" />
      </div>
      <div className="button-container">
          <button className="button" type="submit">Submit</button>
      </div>
    </form>
  );
};
export default Form;
