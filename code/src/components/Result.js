import React from "react";

import Button from "@material-ui/core/Button";

const Result = ({ movieName, movieGenre, rating }) => {
  return (
    <div className="results-wrapper">
      <h3>Thank you for taking our survey.</h3>
      <h4 tabindex="0">You answered the following:</h4>
      <p tabindex="0">Your all time favorite movie is: {movieName}</p>
      <p tabindex="0">
        The genre you would like to see more of is: {movieGenre}
      </p>
      <p tabindex="0">You gave this survey the following score: {rating}</p>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => {
          window.location.reload();
        }}
        style={{ marginTop: 10 }}
      >
        Go back
      </Button>
    </div>
  );
};

export default Result;
