import React from 'react'

export const Role = ({ role, setRole }) => {
  const handleRoleChange = (event) => {
    setRole(event.target.value)
  }
  return (
    <div className="roleForm">
      <p>What is your role?</p>
      <select
        onChange={handleRoleChange}
        value={role}>
        <option value="">Select:</option>
        <option value="teacher">Teacher</option>
        <option value="class mate">Class mate</option>
      </select>
    </div>
  )
}