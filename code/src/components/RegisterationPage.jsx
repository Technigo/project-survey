import React, { useState } from 'react';

const RegisterationPage = ({ props }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNr, setMobileNr] = useState('');

  const userNameInputChange = (e) => {
    setName(e.target.value);
  };
  const emailInputChange = (e) => {
    setEmail(e.target.value);
  };
  const mobileNrInputChange = (e) => {
    setMobileNr(e.target.value);
  };

  //  const handleChange = (event) => {
  //    const isCheckbox = event.target.type === 'checkbox';
  //    this.setState({
  //      [event.target.name]: isCheckbox
  //        ? event.target.checked
  //        : event.target.value,
  //    });
  //  };

  const [message, setMessage] = useState('');

  const emailValidation = () => {
    const regEX = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
    if (regEX.test(email)) {
      setMessage('Email is valid');
    } else {
      showError(input, 'Email is not valid');
    }
  };

  return (
    <>
      <form className="registerform">
        <h2>Register Your Name</h2>
        <div className="form-control">
          <label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={userNameInputChange}
            />
          </label>
        </div>
        <div className="form-control">
          <label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={emailInputChange}
            />
          </label>
          <p>{message}</p>
        </div>

        <div className="form-control">
          <label>
            <input
              type="tel"
              className="phone"
              placeholder="Enter your mobile number"
              value={mobileNr}
              onChange={mobileNrInputChange}
            />
          </label>
        </div>

        <div>
          {/* <button onClick={emailValidation}>Submit </button> */}

          <button
            type="Submit"
            className="btn"
            onClick={() => props.onNextStep()}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterationPage;
