import React from 'react';

const SurveyText = (props) => {
    const { name, setName } = props;
    const { email, setEmail } = props;

    return (
        <div className="text-form">
            <p className="text-label">What's your name?</p>
            <label>
                <input className="text-input"
                type="text"
                placeholder="name"
                value={name}
                onChange={event => setName(event.target.value)}
                />
            </label>
            <p className="text-label">E-mail</p>
            <label>
                <input className="text-input"
                type="text"
                placeholder="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />
            </label>
        </div>
    )
}
export default SurveyText;