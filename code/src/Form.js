import React, { useState } from 'react'
// import { QuizQuestions } from './QuizQuestions'


import { FirstQuestion } from './FirstQuestion'
import { Question2 } from './Question2'
import { Question3 } from './Question3'
import { Question4 } from './Question4'
import { Summary } from './Summary'

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
    const [gift, setGift] = useState('');
    const [discription, setDiscription] = useState([]);
    const [userName, setUserName] = useState('');

    const handlerNameChange = newName => {
        setName(newName);
    }

    const handlerGiftChange = newGift => {
        setGift(newGift);
    }

    const handlerDiscriptionChange = newDiscription => {
        discription.includes(newDiscription)
            ? setDiscription( discription.filter(item => item !== newDiscription))
            : setDiscription( [...discription, newDiscription] );
    }

    const handlerUserNameChange = newUserName => {
        setUserName(newUserName);
    }

    return (
        <form>
            <FirstQuestion 
                name={name} 
                setName={setName} 
                onNameChange={handlerNameChange}
            />

            <Question2
                name={name}
                discription={discription}
                setDiscription={setDiscription}
                onDiscriptionChange={handlerDiscriptionChange}
            />

            <Question3 
                gift={gift} 
                setGift={setGift} 
                onGiftChange={handlerGiftChange}/>
            
            <Question4 
                userName={userName} 
                setUserName={setUserName} 
                onUserNameChange={handlerUserNameChange}
            />
            
            <Summary
                name={name}
                discription={discription}
                gift={gift}
                userName={userName}
            />
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



// const [name, setName] = useState('');
// const [language, setLanguage] = useState('');
// const [likeProgramming, setLikePogramming] = useState('');
// const [answer, setanswer] = useState('');

// const onNameChange = newName => {
//     setName(newName);
// }

// const onLanguageChange = newLanguage => {
//     setLanguage(newLanguage);
// }

// const onLikeChange = newLikeProgramming => {
//     setLikePogramming(newLikeProgramming);



//  <div>
//                 <label htmlFor="name">Your name</label>
//                 <input 
//                     value={name} 
//                     onChange={e => onNameChange(e.target.value)} 
//                     id="name" 
//                     type="text" 
//                 />
//             </div>
            
            
            
//             <div>
//                 {questions.map(question => {
//                     return (
//                         <QuizQuestions 
//                             question={question.question}
//                             answers={question.answers}  
//                         />
//                     )
//                 })}
//             </div>
            
//             <Question2 />
//             <div>
//                 <h2>Do you like programming?</h2>
//                 <label>
//                     <input 
//                         type="radio" 
//                         value="love it"
//                         onChange={e => onLikeChange(e.target.value)} 
//                         checked={likeProgramming === "love it"}
//                         />
//                     Love it!
//                 </label>
//                 <label>
//                     <input type="radio" value="nope" 
//                         onChange={e => onLikeChange(e.target.value)} 
//                         checked={likeProgramming === "nope"}
//                     />
//                     Nope
//                 </label>
//                 <label>
//                     <input type="radio" value="love-hate" 
//                     onChange={e => onLikeChange(e.target.value)} 
//                     checked={likeProgramming === "love-hate"}
//                     />
//                     It's a love-hate relationship!
//                 </label>
                
//             </div>