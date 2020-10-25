import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 20,
    label: "Rookie",
  },
  {
    value: 40,
    label: "Good",
  },
  {
    value: 60,
    label: "Advanced",
  },
  {
    value: 80,
    label: "Elite",
  },
];

const valuetext = (value) => {
  return `${value}`;
};

const Question2 = ({ experience, onExperienceChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom>
        Training experience {valuetext}
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        onChange={onExperienceChange}
        experience={experience}
        // type={Number}
      />
    </div>
  );
};
export default Question2;
