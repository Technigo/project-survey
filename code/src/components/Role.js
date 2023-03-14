import React from 'react'

export const Role = ({ role, setRole }) => {
  const handleRoleChange = (event) => {
    setRole(event.target.value)
  }
  return (
    <form>
      <select
        onChange={handleRoleChange}
        value={role}>
        <option value="">My role is:</option>
        <option value="teacher">Teacher</option>
        <option value="class mate">Class mate</option>
        <option value="employer">Employer</option>
        <option value="other">Other</option>
      </select>
    </form>
  )
}