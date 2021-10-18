import React, { useState } from "react";

export const QuestionTwo = () => {
  return (
    <form>
      <h1>Design</h1>
      <input type="radio" value="1" name="one" /> 1
      <input type="radio" value="2" name="two" /> 2
      <input type="radio" value="3" name="three" /> 3
      <input type="radio" value="4" name="four" /> 4
      <input type="radio" value="5" name="five" /> 5
    </form>
  );
};
