import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} numberOfPieces={400} wind={0.01} />;
};
