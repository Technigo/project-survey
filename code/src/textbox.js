import React from "react";

export const TextBox = (props) => {
    const  { title, placeholder, type, text, setText } = props;

    return (
        <div className="contact-container">
            <label className="text">
                <p>{title}</p>
                <input
                    className="text-contact"
                    placeholder={placeholder}
                    type={type}
                    onChange={event => setText(event.target.value)}
                    value={text}
                    required
                />
            </label>
        </div>
    );
};
