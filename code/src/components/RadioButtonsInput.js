import React from 'react';

const numberOfBooks = ["1", "2", "3+"];

const RadioButtonsInput = (props) => {
    return (
        <div className="radio-container">
            <p>How many times have you read the book?</p>
            <div className="radio-buttons-container">
                {numberOfBooks.map((books) => (
                    <label htmlFor="books"
                        key={books}
                    >
                        <input
                            id="books"
                            type="radio"
                            value={books}
                            onChange={props.onNumberOfBookChange}
                            checked={props.numberOfBook === books}
                        />
                        {books}
                    </label>
                ))};
            </div>
        </div>
    );
};

export default RadioButtonsInput;