import React from "react";
import "./Button.css";

export const Button = ({ title, className }) => (
  <button className={className}>{title}</button>
);