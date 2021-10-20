import React, { useEffect } from 'react'
import './Home.css'

export const Home = ({ setShowHome, setCurrent, questionsRecord, setQuestionsRecord, current }) => {

    const changeScreen = () => {
        setShowHome(false)
        setCurrent(1)
        questionsRecord.push(1);
        setQuestionsRecord(questionsRecord);
    }

    return (
        <div className="home_container">
            <div className="home_text">
                <h1>Are you ready to answer some questions  and create your own story today?</h1>
                <h2>Let's go!</h2>
            </div>
            <div className="home_image_container">
                <img className="home_image" src="./images/home-image.jpeg" alt="star wars image" />
            </div>
            <button className="home_button" onClick={changeScreen}>Start quiz</button>
        </div>
    )
}


export default Home