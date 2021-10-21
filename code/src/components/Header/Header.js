import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

// Made a progressbar which updates with different colors depending on the step.
export const Header = ({ step }) => {
  return (
    <section className="header">
      <div
        className="dot"
        style={{
          backgroundColor:
            step >= 1 ? "var(--main-color)" : "var(--secondary-color)",
        }}
      ></div>
      <div
        className="line"
        style={{
          backgroundColor:
            step >= 2 ? "var(--main-color)" : "var(--secondary-color)",
        }}
      ></div>
      <div
        className="dot"
        style={{
          backgroundColor:
            step >= 2 ? "var(--main-color)" : "var(--secondary-color)",
        }}
      ></div>
      <div
        className="line"
        style={{
          backgroundColor:
            step >= 3 ? "var(--main-color)" : "var(--secondary-color)",
        }}
      ></div>
      <div
        className="dot"
        style={{
          backgroundColor:
            step >= 3 ? "var(--main-color)" : "var(--secondary-color)",
        }}
      ></div>
      <div
        className="line"
        style={{
          backgroundColor:
            step >= 4 ? "var(--main-color)" : "var(--secondary-color)",
        }}
      ></div>
      <div
        className="dot"
        style={{
          backgroundColor:
            step >= 4 ? "var(--main-color)" : "var(--secondary-color)",
        }}
      ></div>
      <div
        className="line"
        style={{
          backgroundColor:
            step >= 5 ? "var(--main-color)" : "var(--secondary-color)",
        }}
      ></div>

      <div
        className="icon-container"
        style={{
          backgroundColor:
            step >= 5 ? "var(--main-color)" : "var(--secondary-color)",
        }}
      >
        <FontAwesomeIcon icon={faPlane} />
      </div>
    </section>
  );
};
