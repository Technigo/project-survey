import React from 'react';

const SubmitButton = (props) => {
    if (props.isFormFinished()) {
        return (
            <div>
                <button tabIndex="0" className="submit-button" type="submit">Submit</button>
            </div>
        );
    } else {
        return (
            <button className="submit-button" type="submit" disabled>Submit</button>
        );
    };
};

export default SubmitButton;