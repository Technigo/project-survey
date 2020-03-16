import React from "react";
import "./button.css"

export const Button = ({ title, type }) => (
  <button type={type}>{title}</button>
);