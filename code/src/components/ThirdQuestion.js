import React from 'react'

export const ThirdQuestion = ({text, setText}) => {

    return (
        <div className='third-question'>
            <label><h2 className='text-header' tabIndex="0">What was the main reason you wanted to to start at the Technigo bootcamp and become a frontend developer?</h2></label>
                <textarea
                    aria-label='text area'
                    type='text'
                    onChange={event => setText(event.target.value)}
                    value={text}
                    id="message"
                    cols="30"
                    rows="2"
                    maxLength="100"
                    name="messageValue"
                    placeholder="Max. 100 characters"
                    required
                >
                </textarea>
        </div>
    );
}; 