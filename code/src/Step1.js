import React from 'react'
import TextField from '@material-ui/core/TextField'

export const Step1 = ({ name, onNameChange }) => {
  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="fullname"
        label="Full Name"
        name="name"
        autoComplete="full name"
        autoFocus
        onChange={e => onNameChange(e.target.value)}
        value={name}
      />
    </>
  )
}
