import React, { useState } from 'react'



export const QuestionFour = () => {

    const [wantsNewsletter, setWantdNewsletter] = useState(false);

    return (
        <form>
            <label>
                I want to receive newsletter
            <input
                    type="checkbox"
                    checked={wantsNewsletter}
                    onChange={event => setWantdNewsletter(event.target.checked)}
                />
            </label>
        </form>
    );
};