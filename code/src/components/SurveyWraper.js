/* eslint-disable */
import React, { useState } from "react";

import { WelcomePage } from "./WelcomePage";
import { NameQuestion } from "./NameQuestion";
import { AgeQuestion } from "./AgeQuestion";
import { TypeOfproductQuestion } from "./TypeOfProductQuestion";
import { SummaryPage } from "./SummaryPage";
import { GoodBypage } from "./GoodBypage";
import { SliderQuestion } from "./SliderQuestion";

export const SurveyWraper = () => {
    const [name, setName] = useState("");
    const [ageGroup, setAgeGroup] = useState("");
    const [product, setProduct] = useState("");
    const [range, setRange] = useState("");
    const [step, setStep] = useState(0);



    const onSubmit = (event) => {
        // console.log("in SurveyWrapper.onSubmit step=" + Number(step))
        // event.preventDefault();
        // // console.log(event.target.className);
        // // if ( event.target.className === "nextQuestionButton") {
        // setStep(step + 1);
        // if (step === 6) {
        //     setStep(0)
        // }

        // // } else if (event.target.className === "backQuestionButton") {
        // //     setStep(step - 1);

        // // }


    };

    const onClickBack = (event) => {
        console.log("in SurveyWrapper.onClickBack step=" + Number(step))
        console.log(event.target)
        setStep(step - 1);
    }

    const onClickNext = (event) => {
        console.log("in SurveyWrapper.onClickNext step=" + Number(step))
        console.log(event.target)
        setStep(step + 1);
        if (step === 6) {
            setStep(0)
        }
    }
    const onNameChange = (event) => {
        setName(event.target.value);
    };
    const onAgeGroupChange = (event) => {
        setAgeGroup(event.target.value);
    };
    const onProductChange = (event) => {
        setProduct(event.target.value);
    };
    const onRangeChange = (event) => {
        setRange(event.target.value);
    }


    return (
        <form className="form" onSubmit={onSubmit}>
            {step === 0 && <WelcomePage onClickNext={onClickNext}/>}
            {step === 1 && <NameQuestion name={name} onNameChange={onNameChange} onClickBack={onClickBack} onClickNext={onClickNext} />}
            {step === 2 && <AgeQuestion ageGroup={ageGroup} onAgeGroupChange={onAgeGroupChange} onClickBack={onClickBack} onClickNext={onClickNext} />}
            {step === 3 && <TypeOfproductQuestion product={product} onProductChange={onProductChange} onClickBack={onClickBack} onClickNext={onClickNext} />}
            {step === 4 && <SliderQuestion range={range} onRangeChange={onRangeChange} onClickBack={onClickBack} onClickNext={onClickNext} />}
            {step === 5 && <SummaryPage name={name} ageGroup={ageGroup} product={product} range={range} onClickBack={onClickBack} onClickNext={onClickNext}/>}
            {step === 6 && <GoodBypage onClickNext={onClickNext} />}
        </form>
    )
}  