import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    display: "flex",
    justifyContent: "center",
  },
  margin: {
    height: theme.spacing(4),
  },
  type: {
    margin: 75,
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
  return `${value.label}`;
};
function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

const Question2 = ({ handleSliderChange, experience }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.type}
        id="discrete-slider-restrict"
        gutterBottom
      >
        Restricted values
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={10}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
};

export default Question2;
