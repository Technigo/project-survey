import React, { useState } from "react";

{
  /* this is an object containing the values for our questions. it's initially set as an empty string - state object */
}
const InputsForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  {
    /* this handles all of the inputs   */
  }

  {
    /* this takes the inital value (empty string) and says: when this is changed, take the old value (...values), the dots stand for old value, and replace it with input value */
  }
  const handleFirstNameInputChange = event => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInputChange = event => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailInputChange = event => {
    setValues({ ...values, email: event.target.value });
  };

  {
    /* this handles what happens when we hit the submit button. it keeps the page from refreshing and checks if the user has inputted all the info, if true then the span with the error doesn't get shown  */
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  {
    /* this is used to tell us if our form is valid. in the handleSubmit we want to say that the value is true if the form is valid. that's why we ass the setValid(true) */
  }
  const [valid, setValid] = useState(false);

  {
    /* this makes sure that the success message isn't shown by giving it the value false */
  }
  const [submitted, setSubmitted] = useState(false);

  // THIS CONNECTS TO THE BUTTON AT THE BOTTOM OF THE PAGE AND SHOWS A MESSAGE WHEN CLICKED
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);

  const Text = () => <div>{values.firstName} clicked the button!</div>;

  return (
    <>
      <section className="form-container">
        {submitted && valid ? (
          <div className="success-message">Success!</div>
        ) : null}
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleFirstNameInputChange}
          />
          {submitted && !values.firstName && (
            <span id="first-name-error">Please enter a first name</span>
          )}

          <label>Last name:</label>
          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleLastNameInputChange}
          />
          {submitted && !values.firstName && (
            <span id="first-name-error">Please enter a last name</span>
          )}
          <label>Email</label>
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleEmailInputChange}
          />
          {submitted && !values.firstName && (
            <span id="first-name-error">Please enter an email</span>
          )}
          <div>
            <button onClick={onClick} type="submit">
              Click me
            </button>
            {showText ? <Text /> : null}
          </div>
        </form>
      </section>

      {/* <label>radio</label>
      <input type="radio" /> */}
    </>
  );
};
export default InputsForm;
