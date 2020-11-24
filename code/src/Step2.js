import * as React from "react"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"

import { useStyles } from "./App"

export const Step2 = ({ favourite, onFavouriteChange }) => {
  const classes = useStyles()

  return (
    <FormControl component="fieldset" fullWidth className={classes.title}>
      <FormLabel component="legend">
        What is your favourite part of front-end development?
      </FormLabel>
      <RadioGroup
        aria-label="favourite"
        name="favourite"
        value={favourite}
        onChange={(e) => onFavouriteChange(e.target.value)}
      >
        <FormControlLabel
          value="javascript"
          control={<Radio />}
          label="Javascript"
        />
        <FormControlLabel value="css" control={<Radio />} label="CSS" />
        <FormControlLabel value="react" control={<Radio />} label="React" />
      </RadioGroup>
    </FormControl>
  )
}
