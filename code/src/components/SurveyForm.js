/* eslint-disable max-len */
import React, { useState } from 'react';

export const SurveyForm = () => {
  const [firstName, setFirstName] = useState(''); // Declare a state variable...
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [comment, setComment] = useState('');
  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <form id="surveyForm" className="form" method="post" onSubmit={handleSubmit}>
      <label htmlFor="name" id="name-label">Name:<input name="firstName" type="text" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="given-name" required /></label>
      {firstName !== '' && <p>Your name is {firstName}.</p>}
      <label htmlFor="email" id="email-label">Email:<input name="email" type="email" id="email" value={email} required onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></label>
      {email !== '' && <p>Your email is {email}.</p>}
      <label htmlFor="number" id="number-label">Age:<input name="age" type="number" id="number" min="1" max="100" value={age} onChange={(e) => setAge(e.target.value)} autoComplete="off" /></label>
      {age !== '' && <p>You are {age} years old.</p>}
      <label htmlFor="selectedOption">
          Select an option:
        <select
          id="selectedOption"
          name="selectedOption"
          value={selectedOption} // force the select's value to match the state variable and update the state variable on any change
          onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
      </label>
      <p>Your selected option: {selectedOption}</p>
      <label htmlFor="checkboxOne">
        Checkbox: <input type="checkbox" name="myCheckboxOne" id="checkboxOne" />
      </label>
      <label htmlFor="checkboxTwo">
        Checkbox: <input type="checkbox" name="myCheckboxTwo" id="checkboxTwo" defaultChecked={false} />
      </label>
      <p>
        Radio buttons:
        <label htmlFor="radioOne"><input type="radio" name="myRadio" value="option1" id="radioOne" /> Option 1</label>
        <label htmlFor="radioTwo"><input type="radio" name="myRadio" value="option2" id="radioTwo" defaultChecked /> Option 2</label>
        <label htmlFor="radioThree"><input type="radio" name="myRadio" value="option3" id="radioThree" /> Option 3</label>
      </p>
      <textarea name="comment" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      {comment !== '' && <p>Here is what you think: {comment}</p>}
      <button type="submit" className="submit-btn">Submit form</button>
    </form>
  )
}

