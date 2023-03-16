import React from 'react'

export const Role = ({ role, setRole }) => {
  const handleRoleChange = (event) => {
    setRole(event.target.value)
  }
  return (
    <div>
      <p>What is your role?</p>
      <select
        className="roleForm"
        onChange={handleRoleChange}
        value={role}>
        <option value="" disabled>Select:</option>
        <option value="teacher">Teacher</option>
        <option value="class mate">Class mate</option>
      </select>
    </div>
  )
}