import React from "react";
import Radio from "./Radio";
import Button from "./Button";

const Page2 = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <Radio />
      <Button buttonText={"back"} handleClick={handlePrevPage} />
      <Button buttonText={"Next"} handleClick={handleNextPage} />
    </div>
  );
};

export default Page2;
