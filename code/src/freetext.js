import React from 'react';

export const FreeText = (props) => {
    const  { question, text, setText } = props;

    return (
        <div>
            <h2>{question}</h2>
            <label className='text' >
                <textarea
                    className='text-preferences'
                    type='text'
                    onChange={event => setText(event.target.value)}
                    value={text}
                />
            </label>
        </div>
    )
}