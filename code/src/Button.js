import React from "react";
import "./button.css"

export const Button = ({ title, type, name, vacation, spiritAnimal, isEighteen }) => (
  <button type={type} disabled={name === "" || vacation === "" || spiritAnimal === "" || isEighteen === false}>{title}</button>
);