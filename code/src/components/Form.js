import React, {useState} from "react";

import Heading from "./Heading";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import OverView from "./Overview";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";


const Form = () => {

    const [questionNum, setQuestionNum] = useState(1);
    const [date, setDate] = useState('');
    const [rating, setRating] = useState(2);
    const [frequency, setFrequency] = useState('');
    const [loyalty, setLoyalty] = useState('');
    const [feedback, setFeedback] = useState('');


    const nextQuestion = () => {
        return setQuestionNum(questionNum + 1);
    }

    const prevQuestion = () => {
        return setQuestionNum(questionNum - 1);
    }

    const getDate = (date) => {
        return setDate(date);
    }

    const getRating = (satisfaction) => {
        return setRating(satisfaction);
    }

    const getBookingFrequency = (frequency) => {
        return setFrequency(frequency);
    }

    const getLoyaltyRating = (rating) => {
        return setLoyalty(rating);
    }

    const getFeedback = (feedback) => {
        return setFeedback(feedback);
    }
    
    const getQuestion = () => {
        if (questionNum === 1) {

            return <>
            <QuestionOne 
            questionNum = {questionNum} 
            date = {date}
            getDate = {getDate}
            />
            <NextBtn nextQuestion={nextQuestion} />
            </>
 
        } else if (questionNum === 2) {

            return <>          
            <QuestionTwo 
            questionNum = {questionNum}
            rating = {rating}
            getRating = {getRating}
            />
            <PrevBtn prevQuestion={prevQuestion} />
            <NextBtn nextQuestion={nextQuestion} />
            </>

        } else if (questionNum === 3) {

            return <>
            <QuestionThree 
            questionNum = {questionNum} 
            frequency = {frequency}
            getBookingFrequency = {getBookingFrequency}
            />
            <PrevBtn prevQuestion={prevQuestion} />
            <NextBtn nextQuestion={nextQuestion} />
            </>

        } else if (questionNum === 4) {

            return <>
            <QuestionFour 
            questionNum = {questionNum} 
            loyalty = {loyalty}
            getLoyaltyRating = {getLoyaltyRating}
            />
            <PrevBtn prevQuestion={prevQuestion} />
            <NextBtn nextQuestion={nextQuestion} />
            </>

        } else if (questionNum === 5) {

            return <>   
            <QuestionFive 
            questionNum = {questionNum} 
            feedback = {feedback}
            getFeedback = {getFeedback}
            />
            <PrevBtn prevQuestion={prevQuestion} />
            <NextBtn nextQuestion={nextQuestion} />
            </>
            
        } else {
            return <OverView 
            date = {date} 
            rating = {rating}
            frequency = {frequency}
            loyalty = {loyalty}
            feedback = {feedback}    
            />
        }
    }


    return (
      <div>
        <Heading/>
        {getQuestion()}
      </div>
    )
}

export default Form