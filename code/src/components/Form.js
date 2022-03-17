import React, {useState} from "react";

import Heading from "./Heading";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import OverView from "./Overview";
import Confirmation from "./Confirmation";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";
import ProgressBar from "./ProgressBar";
import IntroPage from "./IntroPage";


// This array is for QuestionTwo
const satisfactionRating = ['Terrible 😞', 'Bad 🙁', 'Okay 🙂', 'Happy 😊', 'Very happy 😍'];


const Form = () => {
    
    const [questionNum, setQuestionNum] = useState(0);
    const [date, setDate] = useState(''); 
    const [rating, setRating] = useState(3);
    const [satisfaction, setSatisfaction] = useState(satisfactionRating[rating]);
    const [frequency, setFrequency] = useState('');
    const [loyalty, setLoyalty] = useState('');
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    document.addEventListener('keydown', e => {
        if (e.keyCode == '39' && questionNum <= 6) {
            nextQuestion();
        } else if (e.keyCode == '37' && questionNum > 1) {
            prevQuestion();
        }
    })

    const nextQuestion = () => {
        document.querySelector('.form-container').style.transform ='translateY(0%)';
        document.querySelector('#form').style.display = 'flex';
        document.querySelector('.progress-bar').style.opacity ='1';
        setQuestionNum(questionNum + 1);
    };
    
    const prevQuestion = () => setQuestionNum(questionNum - 1);
    
    const getDate = (date) =>  setDate(date);
    
    const getRating = (satisfaction) => setRating(satisfaction);
    
    const getBookingFrequency = (frequency) => setFrequency(frequency);
    
    const getLoyaltyRating = (rating) => setLoyalty(rating);
    
    const getFeedback = (feedback) => setFeedback(feedback);
    
    const submit = (e) => {
        e.preventDefault();
        return setSubmitted(true);       
    }

    return <>
        {!submitted ? (
        <div className='container'>
         {questionNum === 0 && (
             <>
             <Heading nextQuestion = {nextQuestion}/>
             </>
        ) 
        }

        <ProgressBar questionNum = {questionNum} />
        <form id='form' onSubmit={submit}>
        <div className="form-container">
        {questionNum === 1 && (
            <>
            <QuestionOne 
            questionNum = {questionNum} 
            date = {date}
            getDate = {getDate}
            />
            <div className="btn-container">
            <NextBtn nextQuestion={nextQuestion} />

            </div>
            </>
        )} 

        {questionNum === 2 && (
            <>          
            <QuestionTwo 
            questionNum = {questionNum}
            rating = {rating}
            getRating = {getRating}
            satisfactionRating = {satisfactionRating}
            satisfaction = {satisfaction}
            setSatisfaction = {setSatisfaction}
            />
            <div className="btn-container">
            <PrevBtn prevQuestion={prevQuestion} />
            <NextBtn nextQuestion={nextQuestion} />
            </div>
            </>
        )} 

        {questionNum === 3 && (
            <>
            <QuestionThree 
            questionNum = {questionNum} 
            frequency = {frequency}
            getBookingFrequency = {getBookingFrequency}
            />
            <PrevBtn prevQuestion={prevQuestion} />
            <NextBtn nextQuestion={nextQuestion} />
            </>
        )}

        {questionNum === 4 && (
            <>   
            <QuestionFour 
            questionNum = {questionNum} 
            loyalty={loyalty} 
            getLoyaltyRating={getLoyaltyRating}
            />
            <PrevBtn prevQuestion={prevQuestion} />
            <NextBtn nextQuestion={nextQuestion} />
            </>
        )}

        {questionNum === 5 && (
            <>
            <QuestionFive 
            questionNum = {questionNum} 
            feedback = {feedback}
            getFeedback = {getFeedback}
            />
            <PrevBtn prevQuestion={prevQuestion} />
            <NextBtn nextQuestion={nextQuestion} />
            </>
        )} 

        {questionNum === 6 && (
            <OverView 
            date = {date} 
            rating = {rating}
            satisfaction = {satisfaction}
            frequency = {frequency}
            loyalty = {loyalty}
            feedback = {feedback} 
            setSubmitted = {setSubmitted}
            />
        )}
        </div>

        </form>
        </div>) 
        
        : <Confirmation /> }

    </>

}

export default Form