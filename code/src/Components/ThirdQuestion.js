import React from 'react';
import Button from './Button';

const ThirdQuestion = ({ userActivities, onActivitiesChange, section, setSection }) => {

    return (
        <section className="question-section">
            <h2 className="question-heading">Vilken aktivitet har du deltagit i?</h2>
            <div className="checkboxes activity">

                <label htmlFor="måltidscoachning">Måltidscoachning</label>
                <input
                    id="måltidscoachning"
                    type="checkbox"
                    checked={userActivities.includes('måltidscoachning')}
                    onChange={() => onActivitiesChange('måltidscoachning')}
                />
                <label htmlFor="telefonfika">Telefonfika</label>
                <input
                    id="telefonfika"
                    type="checkbox"
                    checked={userActivities.includes('telefonfika')}
                    onChange={() => onActivitiesChange('telefonfika')}
                />
                <label htmlFor="digitalKurs">Digital kurs</label>
                <input
                    id="digitalKurs"
                    type="checkbox"
                    checked={userActivities.includes('digitalKurs')}
                    onChange={() => onActivitiesChange('digitalKurs')}
                />
                <label htmlFor="rådAvCoach">Råd av en coach</label>
                <input
                    id="rådAvCoach"
                    type="checkbox"
                    checked={userActivities.includes('rådAvCoach')}
                    onChange={() => onActivitiesChange('rådAvCoach')}
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