import React from 'react';
import Button from './Button';

const ThirdQuestion = ({ userActivities, onActivitiesChange, section, setSection }) => {

    return (
        <section className="question-section">
            <h2 className="question-heading">Vilken aktivitet har du deltagit i?</h2>
            <div className="checkboxes activity">

                <label htmlFor="mealCoaching">Måltidscoachning</label>
                <input
                    id="mealCoaching"
                    type="checkbox"
                    checked={userActivities.includes('mealCoaching')}
                    onChange={() => onActivitiesChange('mealCoaching')}
                />
                <label htmlFor="phoneChat">Telefonfika</label>
                <input
                    id="phoneChat"
                    type="checkbox"
                    checked={userActivities.includes('phoneChat')}
                    onChange={() => onActivitiesChange('phoneChat')}
                />
                <label htmlFor="digitalCourse">Digital kurs</label>
                <input
                    id="digitalCourse"
                    type="checkbox"
                    checked={userActivities.includes('digitalCourse')}
                    onChange={() => onActivitiesChange('digitalCourse')}
                />
                <label htmlFor="coaching">Råd av en coach</label>
                <input
                    id="coaching"
                    type="checkbox"
                    checked={userActivities.includes('coaching')}
                    onChange={() => onActivitiesChange('coaching')}
                />
            </div>
            <Button 
                disable={onActivitiesChange} 
                btnText="Nästa" 
                nextQuestion="fourthQuestion"
                section={section} 
                setSection={setSection}
            >
                Nästa
            </Button>
        </section>
    );
}

export default ThirdQuestion;