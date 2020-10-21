import React from 'react';
import { ParticipanceField } from 'ParticipanceField';

const Summary = ({name, email, theme, answer,}) => {
    return (
        <>
        {answer === 'Yes' ? (
            <p className="summary">Welcome {name} to my party! This is what you answered:
                Email:{email}
                Preferred theme:{theme}
            </p>) : (
            <p className="summary">Sorry you cannot make it! See you next time!</p>  
        )
        }
        </>
    )
}

export default Summary;