import React from "react";
import "./button.css";

export const Button = ({ title, className }) => (
  <button className={className}>{title}</button>
);