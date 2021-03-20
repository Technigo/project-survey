import React, { useState } from 'react';
import { Name } from './Name'
import { Age } from './Age'
import { Location } from './Location'
import { RadioOption } from './RadioOption'
import { CheckBoxes } from './CheckBoxes'
import { SubmitButton } from './SubmitButton'


const careerPaths= ['Frontend', 'Backend', 'Fullstack']
const stacks = ['JS', 'CSS', 'HTML', 'React', 'Ruby on Rails', 'Angular', 'Vue', 'C#']

export const Form = ({ onSubmit }) => {

    // states
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [age, setAge] = useState('');
    const [radio, setRadio] = useState('');
    const [selectedStacks, setSelectedStacks] = useState ([]);
    const [section, setSection] = useState('welcome')
    
    const isSurveyComplete = () => {
        if (name === '') {
          return false;
        }
    
        if (location === '') {
          return false;
        }
    
        if (age === '') {
          return false;
        }

        if (radio === '') {
          return false;
        }
    
        return true;
    };
    
    if (isSurveyComplete()) {
        console.log(`Survey Complete!`);
    }

    const onSubmitButtonClick = (e) => {
        e.preventDefault();
        onSubmit({
            name,
            age,
            location,
            radio,
            selectedStacks
        })
    }

    const onCheckBoxChange = (checked, stack) => {

        if (checked) {
            selectedStacks.push(stack)
        } else {
            selectedStacks.pop(stack)
        }
    }
    
    return (
        <>
            <form 
                className="form" 
                onSubmit={isSurveyComplete}
            >
                {section === 'welcome' && (
                    <section className='section welcome'>
                        <h2 tabIndex="0" className="welcome-message">Welcome!</h2>
                        <p tabIndex="0" className="welcome-message">Press start to tell us who you are and what kind of developer you want to become!</p>
                        <div className="start-btn-wrapper">
                            <button
                                className='start-btn'
                                onClick={() => { setSection('name-input') }}
                            >
                            Start
                            </button>
                        </div>
                    </section>
                )}
            

                {section === 'name-input' && (
                    <section className='section name-input'>
                        <Name 
                            name={name}
                            setName={setName}
                        />
                        <div className='button-wrapper'>
                            <button
                                className='back-button'
                                type='button'
                                value='welcome'
                                onClick={event => { setSection(event.target.value) }}
                            >
                            Back
                            </button>
                            <button
                                className='next-button'
                                type="submit"
                                value='location'
                                onClick={event => { setSection(event.target.value) }}
                            >
                            Next
                            </button>
                        </div>
                    
                    </section>
                )}

                {section === 'location' && (
                    <section className='section location'>
                    <Location 
                        setLocation={setLocation}
                        location={location}
                    />
                        <div className='button-wrapper'>
                            <button
                                type="button"
                                value="name-input"
                                onClick={event => { setSection(event.target.value) }}
                                className="back-button"
                            >
                                Back
                            </button> 
                            <button
                                type="submit"
                                value="age"
                                onClick={event => { setSection(event.target.value) }}
                                className="next-button"
                            >
                                Next
                            </button>
                        </div>
                    </section>
                )}

                {section === 'age' && (
                    <section className='section age'>
                    <Age 
                        setAge={setAge}
                        age={age}
                    />
                    <div className='button-wrapper'>
                        <button
                            type="button"
                            value="location"
                            onClick={event => { setSection(event.target.value) }}
                            className="back-button"
                        >
                        Back
                        </button> 
                        <button
                            className="next-button"
                            value='career'
                            onClick={event => { setSection(event.target.value) }}
                        >
                        Next
                        </button>
                    </div>
                    </section>
                )}

                {section === 'career' && (
                    <section className='section career'>
                        <h4 className="question career" tabIndex="0">Which career path are you interested in?</h4>
                        <div className="form-components radio">
                            {careerPaths.map((career) => {
                                return (
                                    <RadioOption
                                        key={career}
                                        careerName={career}
                                        setRadio={setRadio}
                                    />
                                )
                            })}
                        </div>
                        <div className='button-wrapper'>
                            <button
                                type="button"
                                value="age"
                                onClick={event => { setSection(event.target.value) }}
                                className="back-button"
                            >
                                Back
                            </button> 
                            <button
                                className="next-button"
                                value='stack'
                                onClick={event => { setSection(event.target.value) }}
                            >
                                Next
                            </button>
                        </div>

                    </section>
                )}

                {section === 'stack' && (
                    <section className='section-stack'>
                        <h4 className="question" tabIndex="0">Which programming languages do you want to work with?</h4>
                        <div className="form-components stack">
                            {stacks.map((stack) => {
                                return (
                                    <CheckBoxes
                                        key={stack}
                                        stack={stack}
                                        onChange={onCheckBoxChange}
                                    />
                                )
                            })}
                        </div>
                        <div className='button-wrapper'>
                            <button
                                type="button"
                                value="career"
                                onClick={event => { setSection(event.target.value) }}
                                className="back-button"
                            >
                                Back
                            </button>
                            <SubmitButton 
                            onClick={onSubmitButtonClick}
                            />
                        </div>
                    </section>
                )}
            </form>
       </>
    )
}