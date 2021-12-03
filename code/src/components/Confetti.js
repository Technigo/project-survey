import React, { useState, useLayoutEffect, useEffect } from "react";
import Confetti from "react-confetti";

export default () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  // console.log("width, height", width, height, window.innerWidth, window.innerHeight);
  return <Confetti width={width} height={height} numberOfPieces={300} />;
};
