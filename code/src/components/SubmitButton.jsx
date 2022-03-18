import React from "react";
import forwardButton from '../assets/forward-purple.png'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGbArzFfRKxXoM7v1E9jhVQqS7HfXYtlk",
    authDomain: "project-survey-week10.firebaseapp.com",
    databaseURL: 'https://project-survey-week10-default-rtdb.europe-west1.firebasedatabase.app/',
    projectId: "project-survey-week10",
    storageBucket: "project-survey-week10.appspot.com",
    messagingSenderId: "245167263996",
    appId: "1:245167263996:web:ade40b556cd8a503b00779",
    measurementId: "G-EKP1BVXVN8"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const SubmitButton = ({pageNumber, setPageNumber, name, gender, age, tipiq1Answer, tipiq2Answer, tipiq3Answer, tipiq4Answer, tipiq5Answer, tipiq6Answer, tipiq7Answer, tipiq8Answer, tipiq9Answer, tipiq10Answer, tiviq1Answer, tiviq2Answer, tiviq3Answer, tiviq4Answer, tiviq5Answer, tiviq6Answer, tiviq7Answer, tiviq8Answer, tiviq9Answer, tiviq10Answer, tiviq11Answer, tiviq12Answer, tiviq13Answer, tiviq14Answer, tiviq15Answer, tiviq16Answer, tiviq17Answer, tiviq18Answer, tiviq19Answer, tiviq20Answer}) => {

    // Testing Data Structure:
    const IP_API = 'https://api.db-ip.com/v2/free/self'
    const handleSubmit = () => {
        fetch(IP_API)
        .then((res) => res.json())
        .then((data) => {
            let date = new Date().toString()
            let userID
            const uid = () => {
                userID = Date.now().toString(36) + Math.random().toString(36).substring(2);
            }
            uid();
            const sendData = (name, gender, age, tipiq1Answer, tipiq2Answer, tipiq3Answer, tipiq4Answer, tipiq5Answer, tipiq6Answer, tipiq7Answer, tipiq8Answer, tipiq9Answer, tipiq10Answer, tiviq1Answer, tiviq2Answer, tiviq3Answer, tiviq4Answer, tiviq5Answer, tiviq6Answer, tiviq7Answer, tiviq8Answer, tiviq9Answer, tiviq10Answer, tiviq11Answer, tiviq12Answer, tiviq13Answer, tiviq14Answer, tiviq15Answer, tiviq16Answer, tiviq17Answer, tiviq18Answer, tiviq19Answer, tiviq20Answer, data, date) => {
                const db = getDatabase(app);
                set(ref(db, 'submissions/' + userID), {
                    Name: name,
                    Gender: gender,
                    Age: age,
                    TipiOne: tipiq1Answer,
                    TipiTwo: tipiq2Answer,
                    TipiThree: tipiq3Answer,
                    TipiFour: tipiq4Answer,
                    TipiFive: tipiq5Answer,
                    TipiSix: tipiq6Answer,
                    TipiSeven: tipiq7Answer,
                    TipiEight: tipiq8Answer,
                    TipiNine: tipiq9Answer,
                    TipiTen: tipiq10Answer,
                    TiviOne: tiviq1Answer,
                    TiviTwo: tiviq2Answer,
                    TiviThree: tiviq3Answer,
                    TiviFour: tiviq4Answer,
                    TiviFive: tiviq5Answer,
                    TiviSix: tiviq6Answer,
                    TiviSeven: tiviq7Answer,
                    TiviEight: tiviq8Answer,
                    TiviNine: tiviq9Answer,
                    TiviTen: tiviq10Answer,
                    TiviEleven: tiviq11Answer,
                    TiviTwelve: tiviq12Answer,
                    TiviThirteen: tiviq13Answer,
                    TiviFourteen: tiviq14Answer,
                    TiviFifteen: tiviq15Answer,
                    TiviSixteen: tiviq16Answer,
                    TiviSeventeen: tiviq17Answer,
                    TiviEighteen: tiviq18Answer,
                    TiviNineteen: tiviq19Answer,
                    TiviTwenty: tiviq20Answer,
                    IPData: data,
                    Timestamp: date,
                });
            }
            sendData(name, gender, age, tipiq1Answer, tipiq2Answer, tipiq3Answer, tipiq4Answer, tipiq5Answer, tipiq6Answer, tipiq7Answer, tipiq8Answer, tipiq9Answer, tipiq10Answer, tiviq1Answer, tiviq2Answer, tiviq3Answer, tiviq4Answer, tiviq5Answer, tiviq6Answer, tiviq7Answer, tiviq8Answer, tiviq9Answer, tiviq10Answer, tiviq11Answer, tiviq12Answer, tiviq13Answer, tiviq14Answer, tiviq15Answer, tiviq16Answer, tiviq17Answer, tiviq18Answer, tiviq19Answer, tiviq20Answer, data, date)
            window.scrollTo(0, 0)
            setPageNumber(pageNumber + 1)
        })
    }
    return (
        <button type="submit" value="Submit" onClick={handleSubmit} className="submit-btn"><img className="navbutton-icon" src={forwardButton} alt="forward button" /></button>
    )
}

export default SubmitButton