import React from "react";

import { ButtonContainer, ButtonText } from "../../assets/styles/shared";
import { FormWrapper } from "./form.style";

const Form = () => {
  return (
    <FormWrapper>
      <ButtonContainer>
        <ButtonText to="/step-1">Start</ButtonText>
      </ButtonContainer>
    </FormWrapper>
  );
};

export default Form;
