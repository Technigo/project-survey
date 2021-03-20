import React from 'react'

const lessons = [
    'Yeah, big time',
    'Some things',
    'Not really'
]
 
const LessonRadioOption = ({ lesson, setLesson, reminder, setReminder }) => {
    const onLessonChanged = (e) => {
        setLesson(e.target.value)
    }

    const onReminderChanged = (e) => {
        setReminder(e.target.value)
    }
 
    return (
        <div className="question-container">
            <h1 className="question-header">Has the quarantine lifestyle made you reconsider what's important in your life?</h1>
            {lessons.map((lesson) => {
                return (
                <div className="radio-container" key={lesson}>
                    <label htmlFor={lesson}>{lesson}</label>
                    <input
                        name="lesson"
                        type="radio"
                        value={lesson}
                        onChange={onLessonChanged}   
                    />
                </div>
                )
            })}
            <div className="input-container">
            	<h3 className="input-title">As a reminder to the post quarantine you, write down the things you have experienced during this different time.</h3>
                <div className="reminder-input">
                    <label htmlFor={reminder}></label>
                    <input
                        name="reminder"
                        type="text"
                        placeholder="I will remember..."
                        value={reminder}
                        onChange={onReminderChanged}
                    />
                </div>       
            </div>
        </div>  
    )
}

export default LessonRadioOption