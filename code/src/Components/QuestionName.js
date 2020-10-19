import React from 'react';

const QuestionName = ({name, funcSetName}) => {
    
    return (
        <section className="name-section">
            <h2 tabIndex="0">Question 1</h2>
            <label
                htmlFor="input-text"
                className="label"  
            >
                What's your name?
            </label>
            <input
                id="input-text"
                type="text"
                value={name}
                onChange={event => funcSetName(event.target.value)}
                required
                placeholder="Firstname Lastname"
            ></input>
        </section>
    )
}

export default QuestionName;
