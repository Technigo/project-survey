import React, { useState } from 'react';

export const Form = () => {
  const [input, setInput] = useState({});

  const handleInputChange = e => {
    const target = e.currentTarget;

    setInput({
      ...input,
      [target.name]: target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(input);
  };

  const handleResetForm = () => {
    setInput({});
  };

  return (
    <div>
      <p>First name: {input.firstName}</p>
      <p>First name: {input.lastName}</p>

      <form onSubmit={handleSubmit}>
        <label>First name:</label>
        <input
          name="firstName"
          value={input.firstName || ''}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <label>Last name:</label>
        <input
          name="lastName"
          value={input.lastName || ''}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <label>Web framework:</label>
        <select
          name="webFramework"
          value={input.webFramework || ''}
          onChange={handleInputChange}
        >
          <option value="jQuery">jQuery</option>
          <option value="React.js">React.js</option>
          <option value="Angular/Angular.js">Angular/Angular.js</option>
          <option value="ASP.NET">ASP.NET</option>
          <option value="Express">Express</option>
          <option value="Spring">Spring</option>
          <option value="Vue.js">Vue.js</option>
          <option value="Django">Django</option>
          <option value="Flask">Flask</option>
          <option value="Laravel">Laravel</option>
          <option value="Ruby on Rails">Ruby on Rails</option>
          <option value="Drupal">Drupal</option>
        </select>
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleInputChange}
          checked
        />{' '}
        Male
        <br />
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleInputChange}
        />{' '}
        Female
        <br />
        <input
          type="radio"
          name="gender"
          value="other"
          onChange={handleInputChange}
        />{' '}
        Other
        <br />
        <input type="submit" value="Submit" />
        <input type="button" value="Reset form" onClick={handleResetForm} />
      </form>
    </div>
  );
};
