import React from 'react';

const Summary = ({name, email, theme, answer,}) => {
    
    return (
        <>
            {answer === 'Yes' ? (
                <p className="summary" tabindex="0">Welcome {name} to my party! 
                    <p>This is what you answered:</p>
                    <ul>
                        <li>  Email:{email}</li>
                        <li>Preferred theme:{theme}</li>
                    </ul>
                </p>
                ):(
                <p className="summary" tabIndex="0">Sorry you cannot make it! See you next time!</p>  
            )}
        </>
    )}

export default Summary;