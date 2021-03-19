import React from "react";
import NameInput from "./NameInput";


const Form = (props) => {

    return (
        <form>
            <NameInput name={props.name}
                onNameChange={props.onNameChange} />
        </form>
    )
}

export default Form