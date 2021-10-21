import React, { useState } from 'react'

import Intro from './Intro'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import QuestionFour from './QuestionFour'
import Summary from './Summary'
import ButtonNext from './ButtonNext'
import ButtonBack from './ButtonBack'

const pet = ['dog', 'cat', 'rat']

const Form = () => {
 
    const [name, setName] = useState('');
    const [size, setSize] = useState('')
    const [pet, setPet] = useState('')
    const [character, setCharacter] = useState('')
    const [questionIndex, setQuestionIndex] = useState(0)



    // const onBackIndexChange = () => {
    //     setQuestionIndex(questionIndex -1)
    // }


    console.log(size, size, size)
    console.log(name, name, name)
    console.log(pet, pet, pet)
    console.log(character, character, character)
    console.log(questionIndex)

    return (
        <>
            <form onSubmit={event => event.preventDefault()}>
                
                {/* INTRO SECTION */}
                {questionIndex === 0 && 
                    <>
                        <section aria-label="Intro page" className='intro-page'>
                            <Intro/> 
                            <ButtonNext
                                questionIndex={questionIndex}
                                setQuestionIndex={setQuestionIndex}
                            />
                        </section>
                    </>
                }

                {/* NAME SECTION */}
                {questionIndex === 1 && 
                    <>
                        <section aria-label="Name input page" className='name-page'>
                                <h2 tabIndex="0">What will you name your pet?</h2>
                                <p tabIndex="0">Type their name</p>
                        
                                <QuestionOne 
                                    name={name}
                                    setName={setName}
                                /> 

                                <ButtonBack
                                    questionIndex={questionIndex}
                                    setQuestionIndex={setQuestionIndex}
                                />

                                <ButtonNext
                                    questionIndex={questionIndex}
                                    setQuestionIndex={setQuestionIndex}
                                />
                        </section>

                    </>
                }

                {/* SIZE SECTION */}
                {questionIndex === 2 && 
                    <>
                        <section aria-label="Size option page" className='size-page'>
                            <h2 tabIndex="0">How big do you want your pet to be?</h2>
                            <p tabIndex="0">Please choose below</p>            
                        
                            <QuestionTwo
                                size={size}
                                setSize={setSize}    
                            />

                            <ButtonBack
                                questionIndex={questionIndex}
                                setQuestionIndex={setQuestionIndex}
                            />

                            <ButtonNext
                                questionIndex={questionIndex}
                                setQuestionIndex={setQuestionIndex}
                            />
                        </section>
                    </>
                }

                {/* PET SECTION */}
                {questionIndex === 3 && 
                    <>
                        <section aria-label="Pet option page" className='pet-page'>
                            <h2 tabIndex="0">What animal do you want for your pet?</h2>
                            <p tabIndex="0">Please choose an option below</p>            
                        
                            <QuestionThree
                                pet={pet}
                                setPet={setPet}    
                            />

                            <ButtonBack
                                questionIndex={questionIndex}
                                setQuestionIndex={setQuestionIndex}
                            />

                            <ButtonNext
                                questionIndex={questionIndex}
                                setQuestionIndex={setQuestionIndex}
                            />
                        </section>
                    </>
                }

                {/* CHARACTERISTIC SECTION */}
                {questionIndex === 4 && 
                    <>
                        <section aria-label="Character option page" className='character-page'>
                            <h2 tabIndex="0">How would you define your ideal pet's personality?</h2>
                            <p tabIndex="0">Please choose an option</p>   

                            <QuestionFour
                                character={character}
                                setCharacter={setCharacter}    
                            />

                            <ButtonBack
                                questionIndex={questionIndex}
                                setQuestionIndex={setQuestionIndex}
                            />

                            <ButtonNext
                                questionIndex={questionIndex}
                                setQuestionIndex={setQuestionIndex}
                            />
                        </section>        
                    </>
                }

                {/* SUMMARY SECTION */}
                {questionIndex > 4 && 
                    <>
                        <section aria-label="Summary page" className='summary-page'>
                            <Summary 
                                name={name} 
                                size={size}
                                pet={pet}
                                character={character}
                            />

                            <ButtonBack
                                questionIndex={questionIndex}
                                setQuestionIndex={setQuestionIndex}
                            />
                        </section>
                    </>
                }
               
            </form>
        </>
    )
}

export default Form;