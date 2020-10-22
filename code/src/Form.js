import React from 'react'
import { Header } from 'components/Header'
import { FirstQuestion } from './components/FirstQuestion'
import { SecondQuestion } from './components/SecondQuestion'
import { ThirdQuestion } from './components/ThirdQuestion'
import { SubmitButton } from './components/SubmitButton'
import { Summary } from './components/Summary'
import { useState } from 'react'



export const Form = () => {
    const [ageGroup, setAgeGroup] = useState('');
    const [location, setLocation] = useState('');
    const [text, setText] = useState('');
    const [submit, setSubmit] = useState(false);


    return (
        <section className='survey-info'>
        {submit === false ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmit(true) }} >
        <Header />
        <FirstQuestion 
        ageGroup={ageGroup}
        setAgeGroup={setAgeGroup}
        />

        <SecondQuestion
        location={location}
        setLocation={setLocation} 
        />

        <ThirdQuestion
        text={text}
        setText={setText}
         />

        <SubmitButton />

        </form>
        ) : (
        <Summary 
        ageGroup={ageGroup}
        location={location}
        text={text} 
        />
        )}; 
        </section>
    );
}; 

