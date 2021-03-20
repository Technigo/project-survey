import React from 'react';

const SubmitButton = (props) => {
    if (props.isFormFinished()) {
        return (<button className="SubmitButton" type="submit" >Submit</button>
        )
    }
    else {
        return (
            <button className="SubmitButton" type="submit" disabled>Submit</button>
        )
    }
}

export default SubmitButton