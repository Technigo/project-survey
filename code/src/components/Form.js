import React, {useState} from "react";

import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import OverView from "./Overview";
import Confirmation from "./Confirmation";
import Buttons from "./Buttons";
import ProgressBar from "./ProgressBar";
import HeroSection from "./HeroSection";


// This array is for QuestionTwo
const satisfactionRating = ['Terrible 😞', 'Bad 🙁', 'Okay 🙂', 'Happy 😊', 'Very happy 😍'];


const Form = () => {
    
    const [questionNum, setQuestionNum] = useState(0);
    const [date, setDate] = useState('2022-01-01'); 
    const [rating, setRating] = useState(3);
    const [satisfaction, setSatisfaction] = useState(satisfactionRating[rating]);
    const [frequency, setFrequency] = useState('');
    const [loyalty, setLoyalty] = useState('');
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    document.addEventListener('keydown', e => {
        if (e.keyCode == '39' && questionNum < 6) {
            nextQuestion();
        } else if (e.keyCode == '37' && questionNum > 1) {
            prevQuestion();
        } else if (e.keyCode == '13' && questionNum === 6) {
            submit(e);
        }
    })

    const restart = ()=> {
        setSubmitted(false);
        setQuestionNum(0);
    } 


    const nextQuestion = () => {
        document.querySelector('.progress-bar').style.display ='flex';
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
 
        <>
        <form id='form' className='form flex' onSubmit={submit}>
        <div className="form-container flex">

        {questionNum === 0 &&  <HeroSection nextQuestion = {nextQuestion}/>}

        {questionNum === 1 && 
           <QuestionOne 
            questionNum = {questionNum} 
            date = {date}
            getDate = {getDate}
            />
        } 

        {questionNum === 2 &&       
            <QuestionTwo 
            questionNum = {questionNum}
            rating = {rating}
            getRating = {getRating}
            satisfactionRating = {satisfactionRating}
            satisfaction = {satisfaction}
            setSatisfaction = {setSatisfaction}
            />
            
        } 

        {questionNum === 3 && 
            <QuestionThree 
            questionNum = {questionNum} 
            frequency = {frequency}
            getBookingFrequency = {getBookingFrequency}
            />
 
        }

        {questionNum === 4 && 
            <QuestionFour 
            questionNum = {questionNum} 
            loyalty={loyalty} 
            getLoyaltyRating={getLoyaltyRating}
            />
    
        }

        {questionNum === 5 && 

            <QuestionFive 
            questionNum = {questionNum} 
            feedback = {feedback}
            getFeedback = {getFeedback}
            />

        } 

        {questionNum === 6 && 
            <OverView 
            date = {date} 
            rating = {rating}
            satisfaction = {satisfaction}
            frequency = {frequency}
            loyalty = {loyalty}
            feedback = {feedback} 
            submit = {submit}
            />
        }

        </div>
              
        <Buttons 
            nextQuestion={nextQuestion} 
            prevQuestion={prevQuestion} 
            questionNum = {questionNum} 
        />
        </form>
        

        <ProgressBar questionNum = {questionNum} />
   
        </>
     ) 
        
        : <Confirmation restart={restart} questionNum={questionNum}/> }

    </>

}

export default Form