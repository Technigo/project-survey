import React from 'react';
import QuestionThree from './QuestionThree'
import QuestionFour from './QuestionFour'

const pet = ['dog', 'cat', 'rat']



const RadioOption = ({ pet, setPet, item }) => {

    const onPetChange = (event) => {
        setPet(event.target.value)
    }

    return (
        <>
            <div>
                <h2>Third Question</h2>
                <p>Which animal will be your pet?</p>
            </div>

            <div>
                 {pet.map((item) => {
                    return (
                        <QuestionThree
                            pet={pet}
                            setPet={setPet}
                            item={item}
                        />
                    )
                })}
            </div>

            <label key={item} htmlFor={item}>{item}</label>
                <input 
                    name="pet" 
                    id={pet} 
                    type="radio" 
                    value={item}
                    onChange={onPetChange}
                    checked={pet === item }  
                /> 
        </>
    )

}

export default RadioOption;