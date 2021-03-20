import React from "react";
import NameInput from "./NameInput";
import BookInput from "./BookInput";
import DropDownMenu from "./DropDownMenu"
import RadioButtonsInput from "./RadioButtonsInput";
import RadioButtonsRecomends from "./RadioButtonsRecomends";
import SubmitButton from "./SubmitButton";


const Form = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <>
                <h1>Your latest book!</h1>
                <p>We will be very happy to know a bit about the latest book you read!</p>
                <p>Please take a few seconds to answer our questions:</p>
            </>
            <NameInput
                name={props.name}
                onNameChange={props.onNameChange} />
            <BookInput bookname={props.bookname}
                onBookChange={props.onBookChange} />
            <DropDownMenu feeling={props.feeling}
                onFeelingChange={props.onFeelingChange} />
            <RadioButtonsInput
                onNumberOfBookChange={props.onNumberOfBookChange}
                numberOfBook={props.numberOfBook} />
            <RadioButtonsRecomends onrecomendationChange={props.onrecomendationChange}
                recomendation={props.recomendation} />
            <SubmitButton isFormFinished={props.isFormFinished} />
        </form>

    )
}
console.log()
export default Form