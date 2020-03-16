import React, { useState } from "react";

export const ContactDetails = () => {
    const [guestInfo, setGuestInfo] = useState("");
    const [guestEmail, setGuestEmail] = useState("");

    return (
        <div className="contact-container">
            <label className="text">
                <p>Name:</p>
                <input
                    className="text-contact"
                    placeholder="Name"
                    type="text"
                    onChange={event => setGuestInfo(event.target.value)}
                    value={guestInfo}
                    required
                />
            </label>
            <label className="text">
                <p>Email:</p>
                <input
                    className="text-contact"
                    placeholder="user@domain.com"
                    type="email"
                    onChange={event => setGuestEmail(event.target.value)}
                    value={guestEmail}
                    required
                />
            </label>
        </div>
    );
};
