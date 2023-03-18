import React from 'react'

export const Role = ({ role, setRole }) => {
  const handleRoleChange = (event) => {
    setRole(event.target.value)
  }
  return (
    <form className="roleForm">
      <p>In what capacity do you perform this review?</p>
      <select
        aria-label="Select your role here"
        className="roleSelect"
        onChange={handleRoleChange}
        value={role}>
        <option value="" disabled>Select:</option>
        <option value="Teacher">Teacher</option>
        <option value="Class mate">Class mate</option>
      </select>
    </form>
  )
}