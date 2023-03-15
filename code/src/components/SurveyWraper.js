/* eslint-disable */
import React, { useState } from "react";

import { WelcomePage } from "./WelcomePage";
import { NameQuestion } from "./NameQuestion";
import { AgeQuestion } from "./AgeQuestion";
import { TypeOfproductQuestion } from "./TypeOfProductQuestion";
import { SummaryPage } from "./SummaryPage";
import { GoodBypage } from "./GoodBypage";

export const SurveyWraper = () => {
    const [name, setName] = useState("");
    const [ageGroup, setAgeGroup] = useState("");
    const [product, setProduct] = useState("");
    const [step, setStep] = useState(0);
    


    const onSubmit = (event) => {
        console.log("in SurveyWrapper.onSubmit step=" + Number(step))
        event.preventDefault();
        setStep(step + 1);
        if(step === 5){
            setStep (0)
        }
    };

    const onNameChange = (event) => {
        setName(event.target.value);
    };
    const onAgeGroupChange = (event) => {
        setAgeGroup(event.target.value);
    };
    const onProductChange = (event) => {
        setProduct(event.target.value);
    };


    return (
        <form className="form" onSubmit={onSubmit}>
            {step === 0 && <WelcomePage />}
            {step === 1 && <NameQuestion name={name} onNameChange={onNameChange} />}
            {step === 2 && <AgeQuestion ageGroup={ageGroup} onAgeGroupChange={onAgeGroupChange} />}
            {step === 3 && <TypeOfproductQuestion product={product} onProductChange={onProductChange} />}
            {step === 4 && <SummaryPage name={name} ageGroup={ageGroup} product={product} />}
            {step === 5 && <GoodBypage />}
            

        </form>
    )
}  