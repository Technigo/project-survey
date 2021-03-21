import React from 'react'

const lessons = [
    'Yeah, big time',
    'Some things',
    'Not really'
]
 
const LessonRadioOption = ({ setLesson }) => {
    const onLessonChanged = (e) => {
        setLesson(e.target.value)
    }
 
    return (
        <section className="page-container">
            <header className="header-container-radio">
                <h1>Has the quarantine lifestyle made you reconsider what's important in your life?</h1>
            </header>
            {lessons.map((lesson) => {
                return (
                    <div className="radio-container" key={lesson}>
                        <label htmlFor={lesson}>{lesson}</label>
                        <input
                            name="lesson"
                            type="radio"
                            value={lesson}
                            onChange={onLessonChanged} 
                            className="radio"  
                        />
                    </div>
                )
            })}
        </section>  
    )
}

export default LessonRadioOption