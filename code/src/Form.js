import React, { useState } from 'react'

const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            {answer: '<script>', isCorrect: true },
            {answer: '<js>', isCorrect: false },
            {answer: '<scripting>', isCorrect: false },
            {answer: '<javascript>', isCorrect: false },
        ],
    },
    {
        question: 'What is the correct HTML for referring to an external style sheet?',
        answers: [
            {answer: '<style src="style.css"', isCorrect: false },
            {answer: '<link rel="stylesheet" type="text/css" href="style.css">', isCorrect: false },
            {answer: '<stylesheet>style.css</stylesheet>', isCorrect: false },
        ],
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        answers: [
            {answer: 'const colors=[\'red\', \'green\', \'blue\']', isCorrect: true },
            {answer: 'const colors=\'red\', \'green\', \'blue\'', isCorrect: false },
            {answer: 'const colors=[1:\'red\', 2\'green\', 3:\'blue\']', isCorrect: false },
            {answer: 'const colors= 1 = (\'red\'), 2 = (\'green\'), 3 = (\'blue\')', isCorrect: false },
        ],
    },
    {
        question: 'Who created JavaScript?',
        answers: [
            {answer: 'Microsoft', isCorrect: false },
            {answer: 'Sun Microsystems', isCorrect: false },
            {answer: 'Oracle', isCorrect: false },
            {answer: 'Netscape', isCorrect: true },
        ],
    },
    {
        question: 'Which of these has correct syntax?',
        answers: [
            {answer: '<!DOCTYPE html>', isCorrect: true },
            {answer: '<DOCTYPE! html>', isCorrect: false },
            {answer: '!<DOCTYPE html>', isCorrect: false },
            {answer: '<DOCTYPE html !>', isCorrect: false },
        ],
    },
    {
        question: 'JavaScript wasn’t always called that. What other names has it been released under?',
        answers: [
            {answer: 'Latte', isCorrect: false },
            {answer: 'Mocha', isCorrect: true },
            {answer: 'LiveScript', isCorrect: false },
            {answer: 'BScript', isCorrect: false },
        ],
    },

    {
        question: 'What does HTML stand for?',
        answers: [
            {answer: 'Hyper Text Markup Language', isCorrect: true },
            {answer: 'Home Tool Markup Language', isCorrect: false },
            {answer: 'Hyperlinks and Text Markup Language', isCorrect: false },
        ],
    },
 
]



export const Form = () => {
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');
    const [likeProgramming, setLikePogramming] = useState('');

    const onNameChange = newName => {
        setName(newName);
    }

    const onLanguageChange = newLanguage => {
        setLanguage(newLanguage);
    }

    const onLikeChange = newLikeProgramming => {
        setLikePogramming(newLikeProgramming);
    }

    return (
        <form>
            <div>
                <label htmlFor="name">Your name</label>
                <input 
                    value={name} 
                    onChange={e => onNameChange(e.target.value)} 
                    id="name" 
                    type="text" />
            </div>
            <label>
                <h2>What is your favorite language so far?</h2>
                <select 
                    value={language} 
                    onChange={e => onLanguageChange(e.target.value)}>

                        <option value="">Choose your favorite</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="javascript">JavaScript</option>
                </select>
            </label>
            
            <div>
                <h2>{questions[0].question}</h2>
                <input 
                    type="button"
                    value={questions[0].answers[0].answer}
                />
                 <input 
                    type="button"
                    value={questions[0].answers[1].answer}
                />
                 <input 
                    type="button"
                    value={questions[0].answers[2].answer}
                />
                 <input 
                    type="button"
                    value={questions[0].answers[3].answer}
                />
            </div>
            <div>
                <h2>Do you like programming?</h2>
                <label>
                    <input 
                        type="radio" 
                        value="love it"
                        onChange={e => onLikeChange(e.target.value)} 
                        checked={likeProgramming === "love it"}
                        />
                    Love it!
                </label>
                <label>
                    <input type="radio" value="nope" 
                        onChange={e => onLikeChange(e.target.value)} 
                        checked={likeProgramming === "nope"}
                    />
                    Nope
                </label>
                <label>
                    <input type="radio" value="love-hate" 
                    onChange={e => onLikeChange(e.target.value)} 
                    checked={likeProgramming === "love-hate"}
                    />
                    It's a love-hate relationship!
                </label>
                
            </div>
        </form>
    )
}



/* <h2>{questions[0].question}</h2>
<div className="answer-container">
    {answers.map(answer = => ( 
        <label key="{answer">
            <input
                type="button"
                value={answer}
            />
            {answer}
        </label>
    ))}
</div> */