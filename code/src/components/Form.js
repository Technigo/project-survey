import React from "react";
import NameInput from "./NameInput";
import BookInput from "./BookInput";
import DropDownMenu from "./DropDownMenu"
import RadioButtonsInput from "./RadioButtonsInput";
import RadioButtonsRecomends from "./RadioButtonsRecomends";
import SubmitButton from "./SubmitButton";


const Form = (props) => {

    return (

        <form onSubmit={event => event.preventDefault()}>
            <NameInput name={props.name}
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
            <SubmitButton />
        </form>
    )
}

export default Form