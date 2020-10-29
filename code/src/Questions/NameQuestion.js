import React from "react";

const NameQuestion = ({ name , setName }) => {
    return (
        <div className ="name-question">
            <label htmlFor="name for cat" tabIndex ="0">
                What name would you give your cat? 
                <input
                type="text"
                value={name}
                onChange = {(event) => setName(event.target.value)}
                required
                />
            </label> 
        </div>
    )
}
export default NameQuestion; 