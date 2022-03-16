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

// This array is for QuestionTwo
const satisfactionRating = ['Terrible 😞', 'Bad 🙁', 'Okay 🙂', 'Happy 😊', 'Very happy 😍'];


const Form = () => {

    const [questionNum, setQuestionNum] = useState(1);
    const [date, setDate] = useState(''); 
    const [rating, setRating] = useState(3);
    const [satisfaction, setSatisfaction] = useState(satisfactionRating[rating]);
    const [frequency, setFrequency] = useState('');
    const [loyalty, setLoyalty] = useState('');
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);


    const nextQuestion = () => setQuestionNum(questionNum + 1);
    
    const prevQuestion = () => setQuestionNum(questionNum - 1);
    
    const getDate = (date) =>  setDate(date);
    
    const getRating = (satisfaction) => setRating(satisfaction);
    
    const getBookingFrequency = (frequency) => setFrequency(frequency);
    
    const getLoyaltyRating = (rating) => setLoyalty(rating);
    
    const getFeedback = (feedback) => setFeedback(feedback);
    
    const submit = (e) => {
        e.preventDefault();
        setSubmitted(true);       
    }

    return <>
        {!submitted ? (

        <form id='form' onSubmit={submit}>
        <ProgressBar questionNum = {questionNum} />
        <Heading />

        {questionNum === 1 && (
            <>
            <QuestionOne 
            questionNum = {questionNum} 
            date = {date}
            getDate = {getDate}
            />
            <NextBtn nextQuestion={nextQuestion} />
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
            <PrevBtn prevQuestion={prevQuestion} />
            <NextBtn nextQuestion={nextQuestion} />
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
            />
        )}

        </form>) 
        
        : <Confirmation /> }

    </>

}

export default Form