/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable arrow-parens */
import * as React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

export const Step3 = ({ knowledge, onKnowledgeChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Rate your level of knowledge so far</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={knowledge}
        onChange={e => onKnowledgeChange(e.target.value)}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </FormControl>
  )
}
