import React from "react";
import NameInput from "./NameInput";
import BookInput from "./BookInput";
import DropDownMenu from "./DropDownMenu"


const Form = (props) => {

    return (
        <form>
            <NameInput name={props.name}
                onNameChange={props.onNameChange} />
            <BookInput bookname={props.bookname}
                onBookChange={props.onBookChange} />
            <DropDownMenu feeling={props.feeling}
                onFeelingChange={props.onFeelingChange} />
        </form>
    )
}

export default Form