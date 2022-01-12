import React from "react";
import ImageComponent from "./AuRevoirImage";

const AuRevoir = () => {
  return (
    <div className="container">
      <div className="contentWrapper">
        <p>
          If your answers were mostly 80's chickflicks then you most likely
          prefer those chickflicks
        </p>
        <p>And if you mostly chose 90's then you most likely prefer them.</p>
        <p>
          But we are all chickflick lovers anyway, so it doesn't really matter,
          right?
        </p>
        <ImageComponent />
      </div>
    </div>
  );
};

export default AuRevoir;
