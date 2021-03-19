import React from "react";
import NameInput from "./NameInput";
import BookInput from "./BookInput";


const Form = (props) => {

    return (
        <form>
            <NameInput name={props.name}
                onNameChange={props.onNameChange} />
            <BookInput bookname={props.bookname}
                onBookChange={props.onBookChange} />
        </form>
    )
}

export default Form