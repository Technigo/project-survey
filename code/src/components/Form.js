import React from "react";
import Name from "./Name";
import CatType from "./CatType";
import CatFeel from "./CatFeel";
import Newsletter from "./Newsletter";
import Answers from "components/Answers";

const [step, setStep] = useState(1);

const Form = () => {
  return (
    <>
      <Name />

      <CatType />
      <CatFeel />
      <Newsletter />
      <Answers />
    </>
  );
};

export default Form;
