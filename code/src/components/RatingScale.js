import React from "react";

const RatingScale = ({ number, rating, setRating }) => {
  return (
    <button onClick={() => setRating(number)} className="rating-single-number">
      {number}
    </button>
  );
};

export default RatingScale;
