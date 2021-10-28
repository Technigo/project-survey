import React, { useState, useLayoutEffect } from "react";
import Confetti from "react-confetti";

export default () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  // console.log("width, height", width, height, window.innerWidth, window.innerHeight);
  return <Confetti width={width} height={height} numberOfPieces={300} />;
};
