import React from 'react';


const Checkbox = ({ wantsMember, onChangeMember, onClickNext }) => { 
    return (
        <section className="check-box section">
            <div className="section-child">
                <div className="info">
                    <p>To give our customers the best possible experience we'd like to know a bit more about our visistors.</p>
                    <p>Take this form to contribute to your favourite cinema (us) - and you'll get a free large size popcorn as thanks</p>
                    <label className="label">
                        First of all, would you like to be a member in our new movies-for-geeks-club? If yes, tick this box:  
                        <input
                        type="checkbox"
                        checked={wantsMember}
                        onChange={onChangeMember}
                        />
                    </label>
                </div>
                <button className="btn" onClick={onClickNext}>Next</button>
            </div>
        </section>
    );
};

export default Checkbox;
