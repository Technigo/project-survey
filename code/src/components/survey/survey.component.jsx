import React from "react";
import { Switch, Route } from "react-router-dom";

import { FormContainer } from "./survey.style";
import Name from "../name/name.component";
import SelectBox from "../select-box/select-box.component";
import CheckBox from "../checkbox/checkbox.component";
import Range from "../range/range.component";

function Survey() {
  return (
    <FormContainer>
      <Switch>
        <Route path="/step-1" component={Name} />
        <Route path="/step-2" component={SelectBox} />
        <Route path="/step-3" component={CheckBox} />
        <Route path="/step-4" component={Range} />

      </Switch>
    </FormContainer>
  );
}

export default Survey;
