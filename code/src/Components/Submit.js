import React from 'react'


const Submit = ({ yourName, yourMonth, yourLetter }) => {

        return (
            <section className="submit-section">
                <h2>Hi, my name is {yourName} and I’m working as a {yourMonth} {yourLetter} and I love it! </h2>

                <button className="form-submit" tabIndex="0" type="submit" onClick={() => window.location.reload(false)}>Back, this can't be possible... I want to do it again!</button>
            </section>


        );
}

export default Submit;