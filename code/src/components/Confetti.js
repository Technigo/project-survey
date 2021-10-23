import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default () => {
  //const { width, height } = useWindowSize();

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  console.log("width, height", width, height, window.innerWidth, window.innerHeight);
  return <Confetti width={width} height={height} numberOfPieces={300} />;
};
