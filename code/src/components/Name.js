import React from 'react'

const Name = (props) => {
    const { username, nameInputChange, onStepChange } = props

  return(
      <div className="container name-container">

          <form onSubmit={onStepChange} onChange={nameInputChange} className="form-container">
            <label className="label-name">First Name:
              <input
              id="Name"
              className="input-container"
              type="text"
              placeholder="First name"
              value={username}
              onChange={nameInputChange}/>
              </label>
              
              <label className="label-name">Surname:
              <input
              id="Surname"
              className="input-container"
              type="text"
              placeholder="Last name"
              onChange={nameInputChange}/>
              </label>

              <label className="label-name">Email:
              <input
              id="Email"
              className="input-container"
              type="email"
              placeholder="Email"
              
              onChange={nameInputChange}/>
              </label>



          <div className="button-container">
            <button type="submit">Next</button>
            </div>
          </form>
      </div>
  )
}

export default Name

