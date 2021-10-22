import React from "react"
import alien from "./video/alien.mp4"

const alienvideo = () => {
  return (
    <div>
      <video
        className="alienvideo"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndez: "-1",
        }}
      >
        <source src={alien} type="video/mp4" />
      </video>
      <button
        onClick={() => window.location.reload(false)}
        className="glow-on-hover hello-world"
      >
        HELLO WORLD
      </button>
    </div>
  )
}

export default alienvideo
