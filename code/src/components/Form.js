import React from "react";
import { useState } from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import Result from "./Result";

const Form = () => {
  const [movieName, setMovieName] = useState("");
  const [movieGenre, setMovieGenre] = useState("Other");
  const [rating, setRating] = useState("");
  const [counter, setCounter] = useState(0);

  const onMovieNameChange = (event) => {
    setMovieName(event.target.value);
  };

  const onMovieGenreChange = (event) => {
    setMovieGenre(event.target.value);
  };

  const onRatingChange = (event) => {
    setRating(event.target.value);
  };

  const onCounterChange = (event) => {
    event.preventDefault();
    setCounter(counter + 1);
  };

  if (counter === 0) {
    return (
      <div className="form-wrapper">
        <form className="form-display-column">
          <InputLabel style={{ marginTop: 10 }}>
            Which movie is your all time favorite?
          </InputLabel>
          <TextField
            placeholder="Movie Title"
            variant="filled"
            type="text"
            color="primary"
            value={movieName}
            onChange={onMovieNameChange}
            style={{
              marginBottom: 10,
              marginTop: 5,
            }}
          />
          <InputLabel id="label">
            Which genre would you like to see more of?
          </InputLabel>
          <FormControl
            style={{
              marginBottom: 10,
              marginTop: 5,
            }}
          >
            <Select
              id="label"
              variant="filled"
              value={movieGenre}
              onChange={onMovieGenreChange}
            >
              <MenuItem value="Other">Other</MenuItem>
              <MenuItem value="Action">Action</MenuItem>
              <MenuItem value="Adventure">Adventure</MenuItem>
              <MenuItem value="Comedy">Comedy</MenuItem>
              <MenuItem value="Crime & Mystery">Crime & Mystery</MenuItem>
              <MenuItem value="Fantasy">Fantasy</MenuItem>
              <MenuItem value="Historical">Historical</MenuItem>
              <MenuItem value="Horror">Horror</MenuItem>
              <MenuItem value="Romance">Romance</MenuItem>
              <MenuItem value="Science fiction">Science fiction</MenuItem>
              <MenuItem value="Thriller">Thriller</MenuItem>
              <MenuItem value="Western">Western</MenuItem>
            </Select>
          </FormControl>

          <div className="form-radioButton">
            <InputLabel>How would you rate this survey?</InputLabel>
            <RadioGroup name="group1" onChange={onRatingChange}>
              <FormControlLabel
                value="very good"
                id="very good"
                control={<Radio color="primary" />}
                label="Very Good"
              />
              <FormControlLabel
                value="good"
                id="good"
                control={<Radio color="primary" />}
                label="Good"
              />
              <FormControlLabel
                value="boring"
                id="boring"
                control={<Radio color="primary" />}
                label="Boring"
              />
              <FormControlLabel
                value="super boring"
                id="super boring"
                control={<Radio color="primary" />}
                label="Super Boring"
              />
            </RadioGroup>
            <ButtonGroup variant="contained" color="primary">
              <Button type="submit">Reset Form</Button>
              <Button type="submit" onClick={onCounterChange}>
                Submit
              </Button>
            </ButtonGroup>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <Result movieName={movieName} movieGenre={movieGenre} rating={rating} />
    );
  }
};

export default Form;
