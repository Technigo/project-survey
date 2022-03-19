import React from 'react'

const Name = () => {
  return(
      <div className="name-container">

          <form className="form-container">
            <label className="label-name">First Name:
              <input
              className="input-container"
              type="text"
              required
              placeholder="First name"/>
              </label>
              
              <label className="label-name">Surname:
              <input
              className="input-container"
              type="text"
              required
              placeholder="Last name"/>
              </label>

              <label className="label-name">Email:
              <input
              className="input-container"
              type="email"
              required
              placeholder="Email"/>
              </label>


          </form>
          

          <button type="submit">Next</button>
      </div>
  )
}

export default Name

// onSubmit={onClickChange}