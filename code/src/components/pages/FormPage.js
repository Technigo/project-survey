import React, { useState } from 'react';
import { inputValidation } from '../../validation/validation';
import { Input } from '../../components/form/Input';
import { ProgressBar } from '../misc/ProgressBar';

export const FormPage = ({ onSubmit }) => {
  // Initiating state for form input and setting webFramework and gender to default values
  const [input, setInput] = useState({
    webFramework: 'jQuery',
    role: 'Developer, back-end',
    temp: 'Frontend Developer'
  });

  // Initiating state for character counter
  const [count, setCount] = useState({});

  // Initalizing state for errors
  const [error, setError] = useState({});

  // Initiating state for sections
  const [section, setSection] = useState(1);

  // Initiating state to indicate form ready to submit
  // const [submitReady, setSubmitReady] = useState(false);

  const handleInputChange = e => {
    const target = e.currentTarget;

    // Validation of inputs and setting error states
    inputValidation(target, error, setError, e.type);

    // Updating state for character count
    setCount({
      ...count,
      [target.name]: target.value.length
    });

    // Updating state with input value
    setInput({
      ...input,
      [target.name]: target.value.trim()
    });
  };

  const handleInputBlur = e => {
    const target = e.currentTarget;

    // Validation of inputs and setting error states
    inputValidation(target, error, setError, e.type);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Submit information in state object
    onSubmit(input);
  };

  return (
    <div className="form-page">
      <h1>Developer survey 2019</h1>

      <form onSubmit={handleSubmit} id="survey" noValidate>
        <div>
          {section === 1 && (
            <div>
              <ProgressBar totalSections={5} currentSection={section} />
              <Input
                name="firstName"
                error={error['firstName']}
                handleInputBlur={handleInputBlur}
                handleInputChange={handleInputChange}
                count={count['firstName']}
                value={input['firstName']}
                placeholder="Name"
                label="First name"
              />
              <Input
                name="lastName"
                error={error['lastName']}
                handleInputBlur={handleInputBlur}
                handleInputChange={handleInputChange}
                count={count['lastName']}
                value={input['lastName']}
                placeholder="Name"
                label="Last name"
              />
            </div>
          )}
          {section === 2 && (
            <div>
              <ProgressBar totalSections={5} currentSection={section} />
              <label htmlFor="role">What's your developer role?</label>
              <select
                id="role"
                name="role"
                value={input.role || ''}
                onChange={handleInputChange}
              >
                <option value="Developer, back-end">Developer, back-end</option>
                <option value="Developer, full-stack">
                  Developer, full-stack
                </option>
                <option value="Developer, front-end">
                  Developer, front-end
                </option>
                <option value="Developer, mobile">Developer, mobile</option>
              </select>
            </div>
          )}
          {section === 3 && (
            <div>
              <ProgressBar totalSections={5} currentSection={section} />
              <label htmlFor="hobbyCoding">Do you code outside of work?</label>
              <input
                id="hobbyCoding"
                type="radio"
                name="hobbyCoding"
                value="Yes"
                onChange={handleInputChange}
                checked={input.hobbyCoding === 'Yes'}
              />{' '}
              Yes
              <br />
              <input
                id="hobbyCoding"
                type="radio"
                name="hobbyCoding"
                value="No"
                onChange={handleInputChange}
                checked={input.hobbyCoding === 'No'}
              />{' '}
              No
            </div>
          )}
          {section === 4 && (
            <div>
              <ProgressBar totalSections={5} currentSection={section} />
              <label htmlFor="webFramework">
                What web framework do you use?
              </label>
              <select
                id="webFramework"
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
            </div>
          )}
          {section === 5 && (
            <div>
              <ProgressBar totalSections={5} currentSection={section} />
              <label htmlFor="yearsSinceLearning">
                Years since you learned to code?
              </label>
              <select
                id="yearsSinceLearning"
                name="yearsSinceLearning"
                value={input.yearsSinceLearning || ''}
                onChange={handleInputChange}
              >
                <option value="Less than 5 years">Less than 5 years</option>
                <option value="5 to 9 years">5 to 9 years</option>
                <option value="10 to 14 years">10 to 14 years</option>
                <option value="15 to 19 years">15 to 19 years</option>
                <option value="20 to 24 years">20 to 24 years</option>
                <option value="25 to 29 years">25 to 29 years</option>
                <option value="30 to 34 years">30 to 34 years</option>
                <option value="35 to 39 years">35 to 39 years</option>
                <option value="40 to 44 years">40 to 44 years</option>
                <option value="45 to 49 years">45 to 49 years</option>
                <option value="50 years or more">50 years or more</option>
              </select>
            </div>
          )}
        </div>

        <div className="form-page-buttons">
          {section !== 1 && (
            <button
              type="button"
              disabled={section <= 1}
              onClick={() => setSection(section - 1)}
            >
              Previous
            </button>
          )}
          {section !== 5 && (
            <button
              type="button"
              disabled={section === 5}
              onClick={() => setSection(section + 1)}
            >
              Next
            </button>
          )}
          {section === 5 && (
            <button
              type="submit"
              disabled={error.lastName || error.firstName}
              value="Submit"
            >
              Submit survey
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
