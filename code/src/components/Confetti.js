import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default () => {
  const { width, height } = useWindowSize();
  console.log("width, height", width, height, window.innerWidth, window.innerHeight);
  return <Confetti width={width} height={height} numberOfPieces={300} />;
};
