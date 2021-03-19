import React from "react";
import { Switch, Route } from "react-router-dom";

import { FormContainer } from "./survey.style";
import SimpleInput from "../simple-input/simple-input.component";
import SelectBox from "../select-box/select-box.component";
import CheckBox from "../checkbox/checkbox.component";
import Range from "../range/range.component";
import RadioButton from "../radio-button/radio-button.component";

function Survey() {
  return (
    <FormContainer>
      <Switch>
        <Route path="/step-1" component={SimpleInput} />
        <Route path="/step-2" component={SelectBox} />
        <Route path="/step-3" component={CheckBox} />
        <Route path="/step-4" component={Range} />
        <Route path="/step-5" component={RadioButton} />

      </Switch>
    </FormContainer>
  );
}

export default Survey;
