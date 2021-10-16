import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ step }) => {
  return (
    <section className="header">
      <div
        className="dot"
        style={{ backgroundColor: step >= 1 ? "green" : "var(--main-color)" }}
      ></div>
      <div
        className="line"
        style={{ backgroundColor: step >= 2 ? "green" : "var(--main-color)" }}
      ></div>
      <div
        className="dot"
        style={{ backgroundColor: step >= 2 ? "green" : "var(--main-color)" }}
      ></div>
      <div
        className="line"
        style={{ backgroundColor: step >= 3 ? "green" : "var(--main-color)" }}
      ></div>
      <div
        className="dot"
        style={{ backgroundColor: step >= 3 ? "green" : "var(--main-color)" }}
      ></div>
      <div
        className="line"
        style={{ backgroundColor: step >= 4 ? "green" : "var(--main-color)" }}
      ></div>
      <div
        className="dot"
        style={{ backgroundColor: step >= 4 ? "green" : "var(--main-color)" }}
      ></div>
      <div
        className="line"
        style={{ backgroundColor: step >= 5 ? "green" : "var(--main-color)" }}
      ></div>

      <div
        className="icon-container"
        style={{ backgroundColor: step >= 5 ? "green" : "var(--main-color)" }}
      >
        <FontAwesomeIcon icon={faPlane} />
      </div>
    </section>
  );
};
