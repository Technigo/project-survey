import React from 'react';

const Summary = (props) => {
    const { name } = props;
    const { email } = props;
    const { wantObjectInspiration } = props;
    const { type } = props;
    const { type2 } = props;
    const { style } = props;

    return (
        <div className="form-summary">
             You're answers are:
                <div>
                    {wantObjectInspiration}
                </div>
                <div>
                    {type}
                </div>
                <div>
                    {type2}
                </div>
                <div>
                    {style}
                </div>
                <div>
                    Thank you for answering {name}!
                </div>
                <div>
                    {email}
                </div>
           
        </div>
    );
};

export default Summary;