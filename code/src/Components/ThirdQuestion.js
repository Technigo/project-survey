import React from 'react';
import Button from './Button';

const ThirdQuestion = ({ userActivities, onActivitiesChange, section, setSection }) => {

    return (
        <section className="question-section">
            <h2 className="question-heading">Vilken aktivitet har du deltagit i?</h2>
            <div className="checkboxes activity">

                <label htmlFor="måltidsCoachning">Måltidscoachning</label>
                <input
                    id="måltidsCoachning"
                    type="checkbox"
                    checked={userActivities.includes('måltidsCoachning')}
                    onChange={() => onActivitiesChange('måltidsCoachning')}
                />
                <label htmlFor="telefonFika">Telefonfika</label>
                <input
                    id="telefonFika"
                    type="checkbox"
                    checked={userActivities.includes('telefonFika')}
                    onChange={() => onActivitiesChange('telefonFika')}
                />
                <label htmlFor="digitalKurs">Digital kurs</label>
                <input
                    id="digitalKurs"
                    type="checkbox"
                    checked={userActivities.includes('digitalKurs')}
                    onChange={() => onActivitiesChange('ditigalKurs')}
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