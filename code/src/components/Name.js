import React from 'react'

const Name = (props) => {
    const { username, email, nameInputChange, onStepChange } = props

  return(
      <div className="container">
          <section className="name-container">
        
          <form onSubmit={onStepChange} className="form-container">
            <label className="label-name">First Name:</label>
              <input
              id="Name"
              className="input-container"
              type="text"
              placeholder="First name"
              value={username}
              onChange={nameInputChange}/>
              
              <label className="label-name">Surname:</label>
              <input
              id="Surname"
              className="input-container"
              type="text"
              placeholder="Last name"
              />

              <label className="label-name">Email:</label>
              <input
              id="Email"
              className="input-container"
              type="email"
              placeholder="Email"
              value={email}
              />
              



          <div className="button-container">
            <button type="submit">Next</button>
            </div>
          </form>
          </section>
      </div>
  )
}

export default Name

