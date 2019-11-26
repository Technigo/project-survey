import React from "react";
import { SurveyName } from "SurveyName";
import { CompanySize } from "CompanySize";
import { CompanyLocation } from "./CompanyLocation";
import { Submit } from "Submit";

export const App = () => {
  return (
    <div>
      <SurveyName />
      <CompanySize />
      <CompanyLocation />
      <Submit />
    </div>
  );
};

/*  
 return <SurveyName name={name.id} setName={setName.id} />;
      const [amount, setAmount] = useState(false); 
      return(
      <labels>How big is your company</labels>
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
      ></input>*/
