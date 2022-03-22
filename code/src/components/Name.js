import React from 'react'

const Name = (props) => {
    const { username, email, nameInputChange, onStepChange } = props

  return(
      <div className="container name-container">
        
          <form onSubmit={onStepChange} className="form-container">
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
              />
              </label>

              <label className="label-name">Email:
              <input
              id="Email"
              className="input-container"
              type="email"
              placeholder="Email"
              value={email}
              />
              </label>



          <div className="button-container">
            <button type="submit">Next</button>
            </div>
          </form>
      </div>
  )
}

export default Name

