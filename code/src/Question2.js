import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";

const Question2 = ({ training, onTrainingChange }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      bgcolor="grey.50"
      color="text.primary"
    >
      <FormControl component="fieldset">
        <RadioGroup
          className="radio-group"
          aria-label="training"
          name="training"
          value={training}
          onChange={onTrainingChange}
        >
          <FormControlLabel
            value="kickboxning"
            control={<Radio />}
            label="Kickboxing"
          />
          <FormControlLabel value="mma" control={<Radio />} label="MMA" />
          <FormControlLabel value="boxing" control={<Radio />} label="Boxing" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Question2;
