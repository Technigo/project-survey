import React from 'react'

const Database = () => {
  return (
    <form onSubmit={this.handleFormSubmit}>
      <label>
        User:{' '}
        <input
          name="user"
          value={this.state.user}
          onChange={this.handleChange}
        />
      </label>
      <label>
        <input
          name="rememberMe"
          checked={this.state.rememberMe}
          onChange={this.handleChange}
          type="checkbox"
        />{' '}
        Remember me
      </label>
      <button type="submit">Sign In</button>
    </form>
  )
}

export default Database
