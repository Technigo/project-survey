import React from 'react'

const Name = (props) => {
    const { nameInputChange, onStepChange } = props
  return(
      <div className="container name-container">

          <form onSubmit={onStepChange} className="form-container">
            <label className="label-name">First Name:
              <input
              id="Name"
              className="input-container"
              type="text"
              required
              placeholder="First name"
              
              onChange={nameInputChange}/>
              </label>
              
              <label className="label-name">Surname:
              <input
              id="Name"
              className="input-container"
              type="text"
              required
              placeholder="Last name"
              
              onChange={nameInputChange}/>
              </label>

              <label className="label-name">Email:
              <input
              id="Name"
              className="input-container"
              type="email"
              required
              placeholder="Email"
              
              onChange={nameInputChange}/>
              </label>


          </form>

          <div className="button-container">
            <button type="submit">Next</button>
            </div>
      </div>
  )
}

export default Name

// onSubmit={onClickChange}