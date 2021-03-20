import React, { useState } from 'react'

import FirstPage from './FirstPage'
import Button from './Button'
import ActivitySelect from './ActivitySelect'
import LessonRadioOption from './LessonRadioOption'
import FormSummary from './FormSummary'

const Form = () => {

    const [word, setWord] = useState('')
    const [firstActivity, setFirstActivity] = useState('')
    const [lesson, setLesson] = useState('')
    const [reminder, setReminder] = useState('')
    const [questionIndex, setQuestionIndex] = useState(0)

    const questionHandler = (event) => {
        event.preventDefault()
        if (word === '') {
            setQuestionIndex(0)
        } else if (firstActivity === '') {
            setQuestionIndex (1)
        } else if (lesson === '') {
            setQuestionIndex(2)
        } else 
            setQuestionIndex(3)
    }

    return (
        <form onSubmit={questionHandler}>
            {questionIndex === 0 &&   
                <>
                    <FirstPage 
                        word={word}
                        setWord={setWord}
                    />
                    <Button text="Start" labelText="Start survey" />  
                </>
            }
            {questionIndex === 1 &&
                <>
                    <ActivitySelect
                        firstActivity={firstActivity}
                        setFirstActivity={setFirstActivity}
                    />
                    <Button text="Next" labelText="Next question" />
                </>
            }
            {questionIndex === 2 &&
                <>
                    <LessonRadioOption
                        lesson={lesson}
                        setLesson={setLesson}
                        reminder={reminder}
                        setReminder={setReminder}
                    />
                    <Button text="Submit" labelText="Submit survey" />
                </>
            }
            {questionIndex === 3 &&
                <>
                    <FormSummary
                        word={word}
                        firstActivity={firstActivity}
                        lesson={lesson}
                        reminder={reminder}
                    />
                    <Button text="Restart" labelText="Restart survey"/>
                </>
            } 
        </form>              
    )         
}

export default Form 

   