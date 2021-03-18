import React from 'react';

const SurveyText = (props) => {
    const { name, setName } = props;
    const { email, setEmail } = props;

    return (
        <form className="text-form">
            What's your name?
            <label>
                <input className="text-input"
                type="text"
                placeholder="name"
                value={name}
                onChange={event => setName(event.target.value)}
                />
            </label>
            E-mail
            <label>
                <input className="text-input"
                type="text"
                placeholder="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />
            </label>
        </form>
    )
}
export default SurveyText;

