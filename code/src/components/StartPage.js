/* eslint-disable indent */
/* eslint-disable max-len */
import React from 'react'

const StartPage = ({ nextPlease }) => {
    return (
        <div className="flex flex-col gap-10"> {/* Start form */}
            <div className="question">
                <p>Welcome to our food survey! We are excited to learn more about your eating habits and preferences.<br />
                    Your responses will help us better understand what people are eating and how we can improve our offerings.
                </p>
            </div>
            <div>
                <button type="button" onClick={nextPlease}>Start the survey</button>
            </div>
        </div>
    )
}

export default StartPage