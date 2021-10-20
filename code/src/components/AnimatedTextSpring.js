import React from "react";
import { useSpring, animated } from "@react-spring/web";

export default () => {
  const styles = useSpring({
    loop: true,
    from: { opacity: 0, color: "#ccff02" },
    to: [
      { opacity: 0, color: "white" },
      { opacity: 1, color: "#ccff02" },
      { opacity: 0, color: "white" },
      { opacity: 1, color: "#4deeea" },
      { opacity: 0, color: "white" },
      { opacity: 1, color: "#FF0075" },
    ],
  });
  return (
    <animated.div style={styles}>
      <span>X3</span>
    </animated.div>
  );
};
