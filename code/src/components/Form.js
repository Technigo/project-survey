import React, { useState } from 'react';
import { Name } from './Name'
import { Age } from './Age'
import { Location } from './Location'
import { RadioOption } from './RadioOption'
import { CheckBoxes } from './CheckBoxes'

const careerPaths= ['front-end', 'back-end', 'fullstack']
const stacks = ['JS', 'CSS', 'HTML', 'React', 'Ruby on Rails', 'Angular', 'Vue', 'C#']

export const Form = () => {
    const [name, setName] = useState('name');
    const [location, setLocation] = useState('location');
    const [age, setAge] = useState('');
    const [radio, setRadio] = useState('');
    const [stack, setCheckBox] = useState (false);

    
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
        
        if (stack === '') {
          return false;
        }
    
        return true;
      };
    
      if (isSurveyComplete()) {
        console.log(`Survey Complete!`);
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
                        careerName={career}
                        setRadio={setRadio}/>
                    )
                })}
            </div>

            <p>Which programming languages do you want to learn?</p>
            <div className="form-components stack">
                {stacks.map((stack) => {
                    return (
                        <CheckBoxes 
                        stack={stack}
                        setCheckBox={setCheckBox}
                        />
                    )
                })}
            </div>
            
        </form>
    )
}