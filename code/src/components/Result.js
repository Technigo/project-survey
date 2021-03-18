import React from "react";

const Result = ({ movieName, movieGenre, rating }) => {
  return (
    <div>
      {movieName}
      {movieGenre}
      {rating}
    </div>
  );
};

export default Result;
