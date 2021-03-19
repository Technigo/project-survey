import React from "react";
import { Switch, Route } from "react-router-dom";

import { FormContainer } from "./survey.style";
import Name from "../name/name.component";

function Survey() {
  return (
    <FormContainer>
      <Switch>
        <Route path="/step-1" component={Name} />

      </Switch>
    </FormContainer>
  );
}

export default Survey;
