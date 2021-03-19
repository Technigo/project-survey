import React from "react";
import { Switch, Route } from "react-router-dom";

import { FormContainer } from "./survey.style";
import Name from "../name/name.component";
import ExperienceType from "../experience-type/experience-type.component";
import Equipments from "../equipments/equipments.component";
import ExperienceDuration from "../experience-duration/experience-duration.component";
import ClimbingArea from "../climbing-area/climbing-area.component";
import Color from "../color/color.component";
import Result from "../result/result.component";

const Survey = () => {
  return (
    <FormContainer>
      <Switch>
        <Route path="/step-1" component={Name} />
        <Route path="/step-2" component={ExperienceType} />
        <Route path="/step-3" component={Equipments} />
        <Route path="/step-4" component={ExperienceDuration} />
        <Route path="/step-5" component={ClimbingArea} />
        <Route path="/step-6" component={Color} />
        <Route path="/result" component={Result} />
      </Switch>
    </FormContainer>
  );
}

export default Survey;
