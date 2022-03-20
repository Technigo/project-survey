import React, { useState } from 'react';


const Checkbox = ({ onClickNext }) => { 
    const [wantsMember, setWantsMember] = useState(false);
    return (
        <section className="check-box section">
            <div className="section-child">
                <p>To continue to give our customers the best possible cinema experience we'd like to know a bit more about our visistors.</p>
                <p>Take the form to contribute to your favourite cinema (us) - and you'll get a free large size popcorn as thanks 🍿</p>
                <label className="label">
                    First of all, would you like to be a member in our new movies-for-geeks-club? If yes, tick this box:  
                    <input
                    type="checkbox"
                    checked={wantsMember}
                    onChange={(event) => setWantsMember(event.target.checked)}
                    />
                </label>
                <button className="button" onClick={onClickNext}>Next</button>
            </div>
        </section>
    );
};

export default Checkbox;