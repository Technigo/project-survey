import React from "react";
import NameInput from "./NameInput";
import BookInput from "./BookInput";
import DropDownMenu from "./DropDownMenu"
import RadioButtonsInput from "./RadioButtonsInput";
import RadioButtonsRecommends from "./RadioButtonsRecommends";
import SubmitButton from "./SubmitButton";

const Form = (props) => {
    return (
        <div className="form-container">
            <form className="form" onSubmit={props.handleSubmit}>
                <div className="header-container">
                    <h1 tabIndex="0">Book survey!</h1>
                    <div className="text-container">
                        <p tabIndex="0">Please take a few seconds to answer some questions about the latest book you have read:</p>
                    </div>
                </div>
                <NameInput
                    name={props.name}
                    onNameChange={props.onNameChange}
                />
                <BookInput
                    bookname={props.bookname}
                    onBookChange={props.onBookChange}
                />
                <DropDownMenu
                    feeling={props.feeling}
                    onFeelingChange={props.onFeelingChange}
                />
                <RadioButtonsInput
                    onNumberOfBookChange={props.onNumberOfBookChange}
                    numberOfBook={props.numberOfBook}
                />
                <RadioButtonsRecommends
                    onRecommendationChange={props.onRecommendationChange}
                    recommendation={props.recommendation}
                />
                <SubmitButton
                    isFormFinished={props.isFormFinished}
                />
            </form>
        </div>
    );
};

export default Form;


