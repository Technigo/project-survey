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
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [age, setAge] = useState('');
    const [radio, setRadio] = useState('');
    const [selectedStacks, setSelectedStacks] = useState ([]);
    
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
        <form 
            className="form" 
            onSubmit={isSurveyComplete}
        >
            <Name 
                name={name}
                setName={setName}
            />
            <Location 
                setLocation={setLocation}
                location={location}
            />
            <Age 
                setAge={setAge}
                age={age}
            />
            <p>Which career path are you interested in?</p>
            <div className="form-components radio">
                {careerPaths.map((career) => {
                    return (
                        <RadioOption
                        key={career}
                        careerName={career}
                        setRadio={setRadio}/>
                    )
                })}
            </div>

            <p>Which programming languages do you want to work with?</p>
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
            <SubmitButton 
                onClick={onSubmitButtonClick}
            />
        </form>
    )
}