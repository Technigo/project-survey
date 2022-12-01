/*import React from 'react'

const Email = ({ email, setEmail }) => {
  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="questionContainer one" id="email">
        <h2 className="questionTitle" tabIndex="0"><i className="fas fa-arrow-circle-right" /> Please add your email adress so that we can contact you!</h2>

        <label htmlFor="email">
          <input
            className="emailInput"
            id="email"
            type="email"
            onChange={onEmailChange}
            value={email}
            placeholder="name@email.com" />
        </label>
      </div>
    </div>
     <div className="sendEmail">
    <input
          className="emailInput"
          type="text"
          onChange={handleEmailAdressChange}
          value={emailAdress} />
          <button className="emailButton" type="button" onClick={handleConfirmEmailChange} tabIndex="0">Email Confirmation</button>
    </div>
  )
}
